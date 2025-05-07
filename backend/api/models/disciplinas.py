from django.db import models

class Disciplina(models.Model):
    DISCIPLINAS_CHOICES = [
         # Ensino Fundamental
        ('LP', 'Língua Portuguesa'),
        ('MAT', 'Matemática'),
        ('CIE', 'Ciências'),
        ('HIS', 'História'),
        ('GEO', 'Geografia'),
        ('ART', 'Artes'),
        ('EF', 'Educação Física'),
        ('ER', 'Ensino Religioso'),
        ('ING', 'Língua Inglesa'),
        # Ensino Médio
        ('LIT', 'Literatura'),
        ('BIO', 'Biologia'),
        ('FIS', 'Física'),
        ('QUI', 'Química'),
        ('FIL', 'Filosofia'),
        ('SOC', 'Sociologia'),
    ]

    NIVEL_ENSINO_CHOICES = [
        ('EF', 'Ensino Fundamental'),
        ('EM', 'Ensino Médio'),
    ]

    codigo = models.CharField(max_length=3, choices=DISCIPLINAS_CHOICES, unique=True)
    nivel_ensino = models.CharField(max_length=2, choices=NIVEL_ENSINO_CHOICES)
    carga_horaria = models.IntegerField()

    def __str__(self):
        return self.codigo
