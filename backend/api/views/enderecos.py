from rest_framework import viewsets
from api.models.enderecos import Endereco
from api.serializers.enderecos import EnderecoSerializer

class EnderecoViewSet(viewsets.ModelViewSet):
    queryset = Endereco.objects.all()
    serializer_class = EnderecoSerializer
