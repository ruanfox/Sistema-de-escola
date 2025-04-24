from django.db import models

class Turma(models.Model):
    ESCOLARIDADE_CHOICES = [
        ("FUNDAMENTAL", "Ensino Fundamental"),
        ("MEDIO", "Ensino Médio"),
    ]

    TURNO_CHOICES = [
        ("MANHA", "Manhã"),
        ("TARDE", "Tarde"),
        ("NOITE", "Noite"),
    ]

    SERIE_CHOICES = [
        ("1", "1ª Ano"),
        ("2", "2ª Ano"),
        ("3", "3ª Ano"),
        ("4", "4ª Ano"),
        ("5", "5ª Ano"),
        ("6", "6ª Ano"),
        ("7", "7ª Ano"),
        ("8", "8ª Ano"),
        ("9", "9º Ano"),
    ]

    nome = models.CharField(max_length=100)
    escolaridade = models.CharField(max_length=20, choices=ESCOLARIDADE_CHOICES)
    turno = models.CharField(max_length=20, choices=TURNO_CHOICES)
    serie = models.CharField(max_length=10, choices=SERIE_CHOICES)

    def __str__(self):
        return f"{self.serie}ª Série - {self.nome} ({self.turno})"
