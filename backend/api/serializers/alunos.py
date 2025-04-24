from rest_framework import serializers
from api.models.alunos import Aluno
from api.models.users import User
from api.models.enderecos import Endereco
from api.models.responsaveis import Responsavel


class ResponsavelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Responsavel
        fields = '__all__'

class EnderecoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Endereco
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    # Endereço faz parte de user e não de aluno diretamente
    endereco = EnderecoSerializer()
    class Meta:
        model = User
        fields = [
            'nome',
            'email',
            'cpf',
            'rg',
            'senha',
            'data_criacao',
            'foto',
            'endereco',
        ]
       
class AlunoSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    responsavel = ResponsavelSerializer()

    class Meta:
        model = Aluno
        fields = [
            'turma',
            'responsavel',
            'user',
        ]

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        endereco_data = user_data.pop('endereco')
        responsaveis_data = validated_data.pop('responsavel')

        endereco = Endereco.objects.create(**endereco_data)
        user = User.objects.create(endereco=endereco, **user_data)
        responsavel =Responsavel.objects.create(**responsaveis_data)
        aluno = Aluno.objects.create(user=user, responsavel=responsavel, **validated_data)
        
        return aluno

    
    def update(self, instance, validated_data):
        user_data = validated_data.pop('user', None)
        responsavel_data = validated_data.pop('responsavel', None)

        if user_data:
            endereco_data = user_data.pop('endereco', None)

            if endereco_data:
                for attr, value in endereco_data.items():
                    setattr(instance.user.endereco, attr, value)
                instance.user.endereco.save()

            for attr, value in user_data.items():
                setattr(instance.user, attr, value)
            instance.user.save()

        if responsavel_data:
            for attr, value in responsavel_data.items():
                setattr(instance.responsavel, attr, value)
            instance.responsavel.save()

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        return instance