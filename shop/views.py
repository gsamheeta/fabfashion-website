
from rest_framework import generics
from .models import Dress
from .serializers import DressSerializer

class DressListCreate(generics.ListCreateAPIView):
    serializer_class = DressSerializer

    def get_queryset(self):
        queryset = Dress.objects.all()
        category = self.request.query_params.get('category', None)
        if category:
            queryset = queryset.filter(category=category)
        return queryset
