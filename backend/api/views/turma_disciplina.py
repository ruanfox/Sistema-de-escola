from rest_framework import viewsets
from api.models.turma_disciplina import Turma_Disciplina
from api.serializers.turma_disciplina import TurmaDisciplinaSerializer

class TurmaDisciplinaViewSet(viewsets.ModelViewSet):
    queryset = Turma_Disciplina.objects.all()
    serializer_class = TurmaDisciplinaSerializer
