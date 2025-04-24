from rest_framework import viewsets
from api.models.responsaveis import Responsavel
from api.serializers.responsaveis import ResponsavelSeriaizer

class ResponsavelViewSet(viewsets.ModelViewSet):
    queryset = Responsavel.objects.all()
    serializer_class = ResponsavelSeriaizer