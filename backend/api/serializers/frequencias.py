from rest_framework import serializers
from api.models.alunos import Aluno
from api.models.disciplinas import Disciplina
from api.models.frequencias import Frequencia

class FrequenciaSerializer(serializers.ModelSerializer):
    aluno_id = serializers.PrimaryKeyRelatedField(queryset=Aluno.objects.all(), source='aluno')
    disciplina_id = serializers.PrimaryKeyRelatedField(queryset=Disciplina.objects.all(), source='disciplina')
    aluno_nome = serializers.SerializerMethodField()
    disciplina_nome = serializers.SerializerMethodField()

    class Meta:
        model = Frequencia
        fields = [
            'id',
            'aluno_id',
            'disciplina_id',
            'data',
            'presenca',
            'aluno_nome',
            'disciplina_nome',
        ]

    def get_aluno_nome(self, obj):
        return obj.aluno.nome

    def get_disciplina_nome(self, obj):
        return obj.disciplina.nome
