from rest_framework import serializers
from api.models.professor_turma_disciplinas import Professor_Turma_Disciplina
from api.models.professores import Professor
from api.models.turmas import Turma
from api.models.disciplinas import Disciplina

class ProfessorTurmaDisciplinaSerializer(serializers.ModelSerializer):
    professor_id = serializers.PrimaryKeyRelatedField(queryset=Professor.objects.all(), source='id')
    turma_id = serializers.PrimaryKeyRelatedField(queryset=Turma.objects.all(), source='id')
    disciplina_id = serializers.PrimaryKeyRelatedField(queryset=Disciplina.objects.all(), source='id')

    class Meta:
        model = Professor_Turma_Disciplina
        fields = [
            'id',
            'professor_id',
            'turma_id',
            'disciplina_id'
            ]
