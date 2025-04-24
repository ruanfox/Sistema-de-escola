from rest_framework import viewsets
from api.models.notas import Nota
from api.serializers.notas import NotaSerializer

class NotaViewSet(viewsets.ModelViewSet):
    queryset = Nota.objects.all()
    serializer_class = NotaSerializer
