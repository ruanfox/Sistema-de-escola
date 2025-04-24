# backend/seed.py
import os
import django
import random
from faker import Faker

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")
django.setup()

from api.models import Turma, Professor, Aluno, User, Endereco, Responsavel, Disciplina

fake = Faker("pt_BR")

def criar_endereco():
    return Endereco.objects.create(
        cep=fake.postcode(),
        rua=fake.street_name(),
        numero=str(fake.building_number()),
        bairro=fake.bairro(),
        cidade=fake.city(),
        uf=fake.estado_sigla()
    )

def criar_usuario(tipo):
    endereco = criar_endereco()
    user = User.objects.create(
        nome=fake.name(),
        cpf=fake.cpf(),
        rg=fake.rg(),
        data_nascimento=fake.date_of_birth(minimum_age=10, maximum_age=60),
        nacionalidade="Brasileira",
        naturalidade=fake.city(),
        telefone=random.randint(100000000, 999999999),
        sexo=random.choice(["MASCULINO", "FEMININO"]),
        email=fake.unique.email(),
        senha="123456",
        tipo_User=tipo,
        endereco=endereco
    )
    return user

def criar_turmas(qtd=5):
    series = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    for _ in range(qtd):
        Turma.objects.create(
            nome=f"T{random.randint(1, 99)}",
            escolaridade=random.choice(["FUNDAMENTAL", "MEDIO"]),
            turno=random.choice(["MANHA", "TARDE"]),
            serie=random.choice(series),
        )

def criar_disciplinas():
    disciplinas = [
        ("LP", "EF"), ("MAT", "EF"), ("CIE", "EF"), ("HIS", "EF"), ("GEO", "EF"),
        ("ART", "EF"), ("EF", "EF"), ("ER", "EF"), ("ING", "EF"),
        ("LIT", "EM"), ("BIO", "EM"), ("FIS", "EM"), ("QUI", "EM"),
        ("FIL", "EM"), ("SOC", "EM")
    ]
    for codigo, nivel in disciplinas:
        if not Disciplina.objects.filter(codigo=codigo).exists():
            Disciplina.objects.create(
                codigo=codigo,
                nivel_ensino=nivel,
                carga_horaria=random.choice([40, 60, 80])
            )

def criar_professores(qtd=5):
    for _ in range(qtd):
        user = criar_usuario("professor")
        Professor.objects.create(user=user)

def criar_responsavel():
    return Responsavel.objects.create(
        nome=fake.name(),
        cpf=fake.cpf(),
        rg=fake.rg(),
        telefone=fake.phone_number(),
        email=fake.email(),
        parentesco=random.choice(["PAI", "MãE", "AVÓ", "AVÔ", "OUTRO"]),
    )

def criar_alunos(qtd=30):
    turmas = list(Turma.objects.all())
    for _ in range(qtd):
        user = criar_usuario("aluno")
        responsavel = criar_responsavel()
        turma = random.choice(turmas)
        Aluno.objects.create(user=user, responsavel=responsavel, turma=turma)

def run():
    print("Criando dados de exemplo...")
    criar_turmas()
    criar_disciplinas()
    criar_professores()
    criar_alunos()
    print("Dados gerados com sucesso!")

if __name__ == "__main__":
    run()
