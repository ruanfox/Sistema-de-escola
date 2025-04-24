from django.db import models
from .alunos import Aluno
from .disciplinas import Disciplina

class Frequencia(models.Model):
    aluno_id = models.ForeignKey(Aluno, on_delete=models.CASCADE)
    disciplina_id = models.ForeignKey(Disciplina, on_delete=models.CASCADE)
    data = models.DateField(auto_now_add=True)
    presenca = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.data} - {self.status}"