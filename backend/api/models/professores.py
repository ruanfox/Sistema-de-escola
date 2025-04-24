from django.db import models
from .users import User

class Professor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if self.user.tipo_User != 'professor':
            self.user.tipo_User = 'professor'
            self.user.save()

    def __str__(self):
        return self.user.nome
