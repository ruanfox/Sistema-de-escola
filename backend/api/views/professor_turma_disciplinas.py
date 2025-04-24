from rest_framework import viewsets
from api.models.professor_turma_disciplinas import Professor_Turma_Disciplina
from api.serializers.professor_turma_disciplinas import ProfessorTurmaDisciplinaSerializer

class ProfessorTurmaDisciplinaViewSet(viewsets.ModelViewSet):
    queryset = Professor_Turma_Disciplina.objects.all()
    serializer_class = ProfessorTurmaDisciplinaSerializer
