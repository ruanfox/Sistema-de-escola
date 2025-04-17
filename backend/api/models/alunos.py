from django.db import models
from .users import User
from .turmas import Turma

class Aluno(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    turma = models.ForeignKey(Turma, on_delete=models.CASCADE)
    responsavel = models.CharField(max_length=255)

    def __str__(self):
        return self.user.nome
