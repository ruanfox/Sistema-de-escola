from django.db import models
from .professores import Professor
from .turmas import Turma
from .disciplinas import Disciplina

class Professor_Turma_Disciplina(models.Model):
    professor_id = models.ForeignKey(Professor, on_delete=models.CASCADE)
    turma_id = models.ForeignKey(Turma, on_delete=models.CASCADE)
    disciplina_id = models.ForeignKey(Disciplina, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.professor.nome} - {self.turma_id.nome} - {self.disciplina_id.nome}"