from rest_framework import viewsets
from api.models.turmas import Turma
from api.serializers.turmas import TurmaSerializer

class TurmaViewSet(viewsets.ModelViewSet):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer

