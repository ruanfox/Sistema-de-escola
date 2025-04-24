from rest_framework import serializers
from api.models.avaliacoes import Avaliacao
from api.models.disciplinas import Disciplina
from api.models.turmas import Turma

class AvaliacaoSerializer(serializers.ModelSerializer):
    disciplina_id = serializers.PrimaryKeyRelatedField(queryset=Disciplina.objects.all(), source='id')
    turma_id = serializers.PrimaryKeyRelatedField(queryset=Turma.objects.all(), source='id')

    class Meta:
        model = Avaliacao
        fields = [
            'id',
            'nome',
            'descricao',
            'data',
            'disciplina_id',    
            'turma_id'
        ]
        read_only_fields = ['data']
