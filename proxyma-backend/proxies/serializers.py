from rest_framework import serializers
from .models import Country, PricingPlan, ProxyServer, UserSubscription, ProxyUsage


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ['id', 'name', 'code', 'availability']


class PricingPlanSerializer(serializers.ModelSerializer):
    period_display = serializers.CharField(source='get_period_display', read_only=True)
    type_display = serializers.CharField(source='get_type_display', read_only=True)

    class Meta:
        model = PricingPlan
        fields = ['id', 'name', 'description', 'type', 'type_display', 'price', 'period', 'period_display', 'traffic_limit', 'ip_limit', 'threads', 'is_popular']


class ProxyServerSerializer(serializers.ModelSerializer):
    country = CountrySerializer(read_only=True)

    class Meta:
        model = ProxyServer
        fields = ['id', 'ip_address', 'country', 'is_active', 'is_residential', 'response_time']


class UserSubscriptionSerializer(serializers.ModelSerializer):
    plan = PricingPlanSerializer(read_only=True)

    class Meta:
        model = UserSubscription
        fields = ['id', 'plan', 'start_date', 'end_date', 'is_active']


class ProxyUsageSerializer(serializers.ModelSerializer):
    proxy = serializers.StringRelatedField()

    class Meta:
        model = ProxyUsage
        fields = ['id', 'proxy', 'date', 'bytes_used', 'requests_count']
