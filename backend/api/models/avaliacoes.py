from django.db import models
from .disciplinas import Disciplina
from .turmas import Turma

class Avaliacao(models.Model):
    nome = models.CharField(max_length=255)
    descricao = models.CharField(max_length=255)
    data = models.DateTimeField(auto_now_add=True)
    disciplina_id = models.ForeignKey(Disciplina, on_delete=models.CASCADE)
    turma_id = models.ForeignKey(Turma, on_delete=models.CASCADE)

    def __str__(self):
    return f"{self.serie} - {self.nome}"