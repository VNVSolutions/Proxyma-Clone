from rest_framework import viewsets, permissions, generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.db.models import Sum
from django.utils import timezone
from datetime import timedelta
from .models import Country, PricingPlan, ProxyServer, UserSubscription, ProxyUsage
from .serializers import (
    CountrySerializer,
    PricingPlanSerializer,
    ProxyServerSerializer,
    UserSubscriptionSerializer,
    ProxyUsageSerializer
)


class CountryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer
    permission_classes = [permissions.AllowAny]


class PricingPlanViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = PricingPlan.objects.all()
    serializer_class = PricingPlanSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        queryset = PricingPlan.objects.all()
        plan_type = self.request.query_params.get('type', None)
        if plan_type:
            queryset = queryset.filter(type=plan_type)
        return queryset


class UserSubscriptionView(generics.ListAPIView):
    serializer_class = UserSubscriptionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return UserSubscription.objects.filter(user=self.request.user, is_active=True)


class ProxyUsageStatsView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        # Get usage for the last 30 days
        thirty_days_ago = timezone.now().date() - timedelta(days=30)
        usage = ProxyUsage.objects.filter(
            user=request.user,
            date__gte=thirty_days_ago
        ).aggregate(
            total_bytes=Sum('bytes_used'),
            total_requests=Sum('requests_count')
        )

        # Convert bytes to GB
        total_gb = round((usage.get('total_bytes') or 0) / (1024 * 1024 * 1024), 2)

        return Response({
            'total_traffic_gb': total_gb,
            'total_requests': usage.get('total_requests') or 0,
            'period': '30 days'
        })


class PurchasePlanView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        plan_id = request.data.get('plan_id')

        try:
            plan = PricingPlan.objects.get(pk=plan_id)
        except PricingPlan.DoesNotExist:
            return Response({'error': 'Plan not found'}, status=status.HTTP_404_NOT_FOUND)

        # Calculate end date based on period
        if plan.period == 'day':
            end_date = timezone.now() + timedelta(days=1)
        elif plan.period == 'month':
            end_date = timezone.now() + timedelta(days=30)
        elif plan.period == 'year':
            end_date = timezone.now() + timedelta(days=365)
        else:
            end_date = timezone.now() + timedelta(days=30)  # Default to 30 days

        # Create subscription
        subscription = UserSubscription.objects.create(
            user=request.user,
            plan=plan,
            end_date=end_date,
            is_active=True
        )

        # Update user's subscription status
        user = request.user
        user.is_subscribed = True
        user.subscription_expires = end_date
        user.save()

        return Response({
            'message': 'Subscription purchased successfully',
            'subscription': UserSubscriptionSerializer(subscription).data
        }, status=status.HTTP_201_CREATED)
