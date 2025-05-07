from django.db.models.signals import pre_save
from django.dispatch import receiver
from api.models.users import User  
from django.utils.text import slugify

@receiver(pre_save, sender=User)
def gerar_email_e_senha(sender, instance, **kwargs):
    if not instance.email:
        nomes = instance.nome.strip().split()
        iniciais = ''.join([n[0].lower() for n in nomes])
        base_email = f"{iniciais}@gmail.com"
        email = base_email

        
        i = 1
        while User.objects.filter(email=email).exclude(pk=instance.pk).exists():
            email = f"{iniciais}{i}@gmail.com"
            i += 1

        instance.email = email

    
    if instance._state.adding and hasattr(instance, 'cpf'):
        instance.set_password(instance.cpf)
