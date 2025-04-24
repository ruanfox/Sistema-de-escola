from rest_framework import serializers
from api.models.professores import Professor
from api.models.users import User
from api.models.enderecos import Endereco

class EnderecoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Endereco
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    endereco = EnderecoSerializer()

    class Meta:
        model = User
        fields = [
            'nome',
            'cpf',
            'rg',
            'email',
            'senha',
            'data_criacao',
            'foto',
            'endereco',
        ]

class ProfessorSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Professor
        fields = ['user']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        endereco_data = user_data.pop('endereco')
        endereco = Endereco.objects.create(**endereco_data)
        user = User.objects.create(endereco=endereco, **user_data)
        professor = Professor.objects.create(user=user, **validated_data)
        return professor

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user', None)
        if user_data:
            endereco_data = user_data.pop('endereco', None)
            if endereco_data:
                for attr, value in endereco_data.items():
                    setattr(instance.user.endereco, attr, value)
                instance.user.endereco.save()
            for attr, value in user_data.items():
                setattr(instance.user, attr, value)
            instance.user.save()
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance
