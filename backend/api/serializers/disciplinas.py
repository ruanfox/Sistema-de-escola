from rest_framework import serializers
from api.models.disciplinas import Disciplina

class DisciplinaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disciplina
        fields = [
            'id',
            'codigo',
            'carga_horaria',
            'nivel_ensino',
        ]   