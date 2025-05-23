from django.db import models
from .enderecos import Endereco

class User(models.Model):
    SEXO_CHOICES = [
        ("MASCULINO", "Sexo Masculino"),
        ("FEMININO", "Sexo Feminino"),
    ]
    
    TIPO_USER_CHOICES = [
        ("ADMIN", "Admin"),
        ("PROFESSOR", "Professor"),
        ("ALUNO", "Aluno")
    ]

    nome = models.CharField(max_length=255)
    cpf = models.CharField(max_length=14)
    rg = models.CharField(max_length=20)
    data_nascimento = models.DateField()
    nacionalidade = models.CharField(max_length=255)
    naturalidade = models.CharField(max_length=255)
    telefone = models.IntegerField(max_length=15)
    sexo = models.CharField(max_length=10, choices=SEXO_CHOICES)
    foto = models.ImageField(upload_to='fotos_perfil/', null=True, blank=True)
    email = models.EmailField(unique=True, null=False)
    senha = models.CharField(max_length=128)
    tipo_User = models.CharField(max_length=10, choices=TIPO_USER_CHOICES)
    endereco = models.ForeignKey(Endereco, on_delete=models.CASCADE)
    data_criacao = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.pk and not self.senha:
            self.senha = self.cpf
        super().save(*args, **kwargs)

    def __str__(self):
        return self.nome