from rest_framework import serializers
from api.models.turma_disciplina import Turma_Disciplina
from api.models.turmas import Turma
from api.models.disciplinas import Disciplina

class TurmaDisciplinaSerializer(serializers.ModelSerializer):
    turma_id = serializers.PrimaryKeyRelatedField(queryset=Turma.objects.all(), source='id')
    disciplina_id = serializers.PrimaryKeyRelatedField(queryset=Disciplina.objects.all(), source='id')

    class Meta:
        model = Turma_Disciplina
        fields = ['id', 'turma_id', 'disciplina_id']
