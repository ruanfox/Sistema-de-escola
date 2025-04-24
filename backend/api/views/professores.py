from rest_framework import viewsets
from api.models.professores import Professor
from api.serializers.professores import ProfessorSerializer

class ProfessorViewSet(viewsets.ModelViewSet):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer