from djando.db import models
from .enderecos import Endereco

class Users(models.Model):
    nome = models.CharFeild(max_length=255)
    email = models.EmailField(unique=True, null=False)
    senha = models.CharField(max_length=128)
    tipo_User = models.CharField(max_length=50)  # Valores: 'admin', 'professor', 'aluno'
    data_criacao = models.DateTimeField(auto_now_add=True)
    endereco = models.ForeignKey(Endereco, on_delete=models.CASCADE)
    foto = models.ImageField(upload_to='fotos_perfil/', null=True, blank=True)

    def __str__(self):
        return self.nome