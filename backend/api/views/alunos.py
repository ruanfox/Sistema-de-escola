from rest_framework import viewsets
from api.models.alunos import Aluno
from api.serializers.alunos import AlunoSerializer

class AlunoViewSet(viewsets.ModelViewSet):
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer