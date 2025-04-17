from django.db import models

class Turma(models.Model):
    nome = models.CharField(max_length=100)
    ano = models.IntegerField()
    turno = models.CharField(max_length=50)
    serie = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.serie} - {self.nome}"
