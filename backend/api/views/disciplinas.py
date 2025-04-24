from rest_framework import viewsets
from api.models.disciplinas import Disciplina
from api.serializers.disciplinas import DisciplinaSerializer

class DisciplinaViewSet(viewsets.ModelViewSet):
    queryset = Disciplina.objects.all()
    serializer_class = DisciplinaSerializer
    