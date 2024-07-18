from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from shop.views import DressListCreate
from backend.views import ProfileView, signup, verify_old_password, login_view, change_password
from rest_framework.authtoken import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/dresses/', DressListCreate.as_view(), name='dress-list-create'),
    path('api/login/', views.obtain_auth_token, name='api_token_auth'),
    path('api/profile/', ProfileView.as_view(), name='profile'),
    path('api/signup/', signup, name='signup'),
    path('api/verify_old_password/', verify_old_password, name='verify_old_password'),
    path('api/change_password/', change_password, name='change_password'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
