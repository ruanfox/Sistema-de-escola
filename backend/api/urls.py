from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProdutoViewSet

router = DefaultRouter()
router.register(r'turmas', TurmaViewSet)
router.register(r'enderecos', EnderecoViewSet)
router.register(r'users', UserViewSet)
router.register(r'alunos', AlunoViewSet)
router.register(r'professores', ProfessorViewSet)
router.register(r'disciplinas', DisciplinaViewSet)
router.register(r'avaliacoes', AvaliacaoViewSet)
router.register(r'notas', NotaViewSet)
router.register(r'frequencias', FrequenciaViewSet)
router.register(r'boletins', BoletimViewSet)
router.register(r'turma_disciplinas', TurmaDisciplinaViewSet)
router.register(r'professor_turma_disciplinas', ProfessorTurmaDisciplinaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
