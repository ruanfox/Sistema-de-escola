from django.db import models
from .turmas import Turma
from .disciplinas import Disciplina

class Turma_Disciplina(models.Model):
    turma_id = models.ForeignKey(Turma, on_delete=models.CASCADE)
    disciplina_id = models.ForeignKey(Disciplina, on_delete=models.CASCADE)

    def __str__(self):
        return f"{turma_id.nome} - {disciplina_id.nome}"