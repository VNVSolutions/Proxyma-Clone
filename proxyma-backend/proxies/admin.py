from django.contrib import admin
from .models import Country, PricingPlan, ProxyServer, UserSubscription, ProxyUsage


@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    list_display = ('name', 'code', 'availability')
    search_fields = ('name', 'code')
    list_filter = ('availability',)


@admin.register(PricingPlan)
class PricingPlanAdmin(admin.ModelAdmin):
    list_display = ('name', 'type', 'price', 'period', 'traffic_limit', 'ip_limit', 'is_popular')
    list_filter = ('type', 'period', 'is_popular')
    search_fields = ('name', 'description')


@admin.register(ProxyServer)
class ProxyServerAdmin(admin.ModelAdmin):
    list_display = ('ip_address', 'country', 'is_active', 'is_residential', 'created_at', 'response_time')
    list_filter = ('is_active', 'is_residential', 'country')
    search_fields = ('ip_address',)
    date_hierarchy = 'created_at'


@admin.register(UserSubscription)
class UserSubscriptionAdmin(admin.ModelAdmin):
    list_display = ('user', 'plan', 'start_date', 'end_date', 'is_active')
    list_filter = ('is_active', 'plan')
    search_fields = ('user__email', 'user__username')
    date_hierarchy = 'start_date'


@admin.register(ProxyUsage)
class ProxyUsageAdmin(admin.ModelAdmin):
    list_display = ('user', 'proxy', 'date', 'bytes_used', 'requests_count')
    list_filter = ('date',)
    search_fields = ('user__email', 'proxy__ip_address')
    date_hierarchy = 'date'
