from rest_framework import viewsets
from api.models.frequencias import Frequencia
from api.serializers.frequencias import FrequenciaSerializer

class FrequenciaViewSet(viewsets.ModelViewSet):
    queryset = Frequencia.objects.all()
    serializer_class = FrequenciaSerializer
