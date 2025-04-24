from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views.users import UserViewSet
from api.views.alunos import AlunoViewSet
from api.views.professores import ProfessorViewSet
from api.views.responsaveis import ResponsavelViewSet
from api.views.turmas import TurmaViewSet
from api.views.disciplinas import DisciplinaViewSet
from api.views.boletins import BoletimViewSet
from api.views.notas import NotaViewSet
from api.views.professor_turma_disciplinas import ProfessorTurmaDisciplinaViewSet
from api.views.turma_disciplina import TurmaDisciplinaViewSet
from api.views.enderecos import EnderecoViewSet
from api.views.frequencias import FrequenciaViewSet
from api.views.avaliacoes import AvaliacaoViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'alunos', AlunoViewSet)
router.register(r'professores', ProfessorViewSet)
router.register(r'responsaveis', ResponsavelViewSet)
router.register(r'turmas', TurmaViewSet)
router.register(r'disciplinas', DisciplinaViewSet)
router.register(r'boletins', BoletimViewSet)
router.register(r'notas', NotaViewSet)
router.register(r'professor_turma_disciplina', ProfessorTurmaDisciplinaViewSet)
router.register(r'turma_disciplina', TurmaDisciplinaViewSet)
router.register(r'enderecos', EnderecoViewSet)
router.register(r'frequencias', FrequenciaViewSet)
router.register(r'avaliacoes', AvaliacaoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
