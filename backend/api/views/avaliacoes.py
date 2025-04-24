from rest_framework import viewsets
from api.models.avaliacoes import Avaliacao
from api.serializers.avaliacoes import AvaliacaoSerializer

class AvaliacaoViewSet(viewsets.ModelViewSet):
    queryset = Avaliacao.objects.all()
    serializer_class = AvaliacaoSerializer
