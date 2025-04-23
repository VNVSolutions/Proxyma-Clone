from django.urls import path
from .views import RegisterView, UserProfileView, UserStatsView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('profile/', UserProfileView.as_view(), name='user-profile'),
    path('stats/', UserStatsView.as_view(), name='user-stats'),
]
