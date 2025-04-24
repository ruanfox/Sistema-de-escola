from rest_framework import serializers
from api.models.notas import Nota
from api.models.alunos import Aluno
from api.models.disciplinas import Disciplina
from api.models.avaliacoes import Avaliacao

class NotaSerializer(serializers.ModelSerializer):
    aluno_id = serializers.PrimaryKeyRelatedField(queryset=Aluno.objects.all(), source='id')
    disciplina_id = serializers.PrimaryKeyRelatedField(queryset=Disciplina.objects.all(), source='id')
    avaliacao_id = serializers.PrimaryKeyRelatedField(queryset=Avaliacao.objects.all(), source='id')

    class Meta:
        model = Nota
        fields = ['id', 'aluno_id', 'disciplina_id', 'avaliacao_id', 'valor', 'data']
        read_only_fields = ['data'] 
