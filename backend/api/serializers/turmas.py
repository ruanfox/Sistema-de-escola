from rest_framework import serializers
from api.models.turmas import Turma

class TurmaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turma
        fields = [
            'nome',
            'escolaridade',
            'turno',
            'serie'
        ]