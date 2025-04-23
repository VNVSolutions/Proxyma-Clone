from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CountryViewSet,
    PricingPlanViewSet,
    UserSubscriptionView,
    ProxyUsageStatsView,
    PurchasePlanView
)

router = DefaultRouter()
router.register(r'countries', CountryViewSet)
router.register(r'plans', PricingPlanViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('subscriptions/', UserSubscriptionView.as_view(), name='user-subscriptions'),
    path('usage-stats/', ProxyUsageStatsView.as_view(), name='proxy-usage-stats'),
    path('purchase-plan/', PurchasePlanView.as_view(), name='purchase-plan'),
]
