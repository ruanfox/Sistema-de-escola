from django.db import models
from .users import User
from .turmas import Turma
from .responsaveis import Responsavel

class Aluno(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    turma = models.ForeignKey(Turma, on_delete=models.CASCADE)
    responsavel = models.ForeignKey(Responsavel, on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if self.user.tipo_User != 'aluno':
            self.user.tipo_User = 'aluno'
            self.user.save()

    def __str__(self):
        return self.user.nome
