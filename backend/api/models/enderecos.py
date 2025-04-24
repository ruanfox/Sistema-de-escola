from django.db import models 

class Endereco(models.Model):
    cep = models.CharField(max_length=20)
    rua = models.CharField(max_length=255)
    numero = models.CharField(max_length=20)
    bairro = models.CharField(max_length=100)
    complemento = models.CharField(max_length=200, blank=True, null=True)
    cidade = models.CharField(max_length=100)
    uf = models.CharField(max_length=2)
    situacao = models.BooleanField(default=True) 

    def __str__(self):
        return f"{self.rua}, {self.numero} - {self.cidade}"