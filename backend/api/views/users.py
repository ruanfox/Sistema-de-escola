from rest_framework import viewsets
from api.models.users import User
from api.serializers.users import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
