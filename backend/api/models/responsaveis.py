from django.db import models

class Responsavel(models.Model):
    PARENTESCO_CHOICES = [
        ("PAI", "Pai"),
        ("MÃE", "Mãe"),
        ("AVÓ", "Avó"),
        ("AVÔ", "Avô"),
        ("OUTRO", "Outro"),
    ]

    nome = models.CharField(max_length=100)
    cpf = models.CharField(max_length=14)
    rg = models.CharField(max_length=20, blank=True, null=True)
    telefone = models.CharField(max_length=20)
    email = models.EmailField(blank=True, null=True)
    parentesco = models.CharField(max_length=50,choices=PARENTESCO_CHOICES)

    def __str__(self):
        return f"{self.nome} ({self.grau_parentesco})"