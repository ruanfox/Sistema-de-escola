from rest_framework import viewsets
from api.models.boletins import Boletim
from api.serializers.boletins import BoletimSerializer

class BoletimViewSet(viewsets.ModelViewSet):
    queryset = Boletim.objects.all()
    serializer_class = BoletimSerializer
