from rest_framework import serializers
from api.models.boletins import Boletim
from api.models.alunos import Aluno
from api.models.turmas import Turma

class BoletimSerializer(serializers.ModelSerializer):
    aluno_id = serializers.PrimaryKeyRelatedField(queryset=Aluno.objects.all(), source='id')
    turma_id = serializers.PrimaryKeyRelatedField(queryset=Turma.objects.all(), source='id')

    class Meta:
        model = Boletim
        fields = [
            'id',
            'aluno_id',
            'turma_id',
            'semestre',
            'media_geral',
            'faltas_total',
            'data_geracao',
        ]
        read_only_fields = ['data_geracao']
