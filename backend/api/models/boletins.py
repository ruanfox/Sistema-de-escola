from django.db import models
from .alunos import Aluno
from .turmas import Turma
from django.utils import timezone

class Boletim(models.Model):
    aluno_id = models.ForeignKey(Aluno, on_delete=models.CASCADE)
    turma_id = models.ForeignKey(Turma, on_delete=models.CASCADE)
    semestre = models.IntegerField()
    media_geral = models.FloatField()
    faltas_total = models.IntegerField()
    data_geracao = models.DateField(default=timezone.now)
    
    def __str__(self):
        return f"Boletim de {self.aluno} - Semestre {self.semestre}"