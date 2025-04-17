from .django import models
from .alunos import Aluno
from .disciplinas import Disciplina
from .avaliacoes import Avaliacao

class Nota(models.Model):
    aluno_id = models.ForeignKey(Aluno, on_delete=models.CASCADE)
    disciplina_id = models.ForeignKey(Disciplina, on_delete=models.CASCADE)
    avaliacao_id = models.ForeignKey(Avaliacao, on_delete=models.CASCADE)
    valor = models.FloatField()
    data = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"Id aluno - {self.aluno} - Nota {self.valor}"