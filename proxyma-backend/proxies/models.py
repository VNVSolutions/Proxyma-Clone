from django.db import models
from django.conf import settings


class Country(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=2)
    availability = models.FloatField(default=100.0)  # percentage of availability

    def __str__(self):
        return self.name


class PricingPlan(models.Model):
    PLAN_TYPES = (
        ('residential', 'Residential Proxies'),
        ('static', 'Static Residential IPv4'),
    )

    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    type = models.CharField(max_length=20, choices=PLAN_TYPES)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    period = models.CharField(max_length=20, choices=[('day', 'Day'), ('month', 'Month'), ('year', 'Year')])
    traffic_limit = models.PositiveIntegerField(help_text="Traffic limit in GB")
    ip_limit = models.PositiveIntegerField(help_text="Number of IPs available")
    threads = models.PositiveIntegerField(help_text="Number of concurrent connections")
    is_popular = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name} ({self.get_type_display()}) - ${self.price}/{self.period}"


class ProxyServer(models.Model):
    ip_address = models.GenericIPAddressField()
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)
    is_residential = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    last_checked = models.DateTimeField(auto_now=True)
    response_time = models.FloatField(null=True, blank=True)  # in milliseconds

    def __str__(self):
        return f"{self.ip_address} ({self.country.name})"


class UserSubscription(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    plan = models.ForeignKey(PricingPlan, on_delete=models.CASCADE)
    start_date = models.DateTimeField(auto_now_add=True)
    end_date = models.DateTimeField()
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.user.email} - {self.plan.name}"


class ProxyUsage(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    proxy = models.ForeignKey(ProxyServer, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    bytes_used = models.PositiveBigIntegerField(default=0)
    requests_count = models.PositiveIntegerField(default=0)

    class Meta:
        unique_together = ('user', 'proxy', 'date')

    def __str__(self):
        return f"{self.user.email} - {self.proxy.ip_address} - {self.date}"
