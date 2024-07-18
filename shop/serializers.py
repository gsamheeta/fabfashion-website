from rest_framework import serializers
from .models import Dress
from django.contrib.auth.models import User

class DressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dress
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email']
