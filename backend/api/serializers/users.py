from rest_framework import serializers
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
            'id',
            'nome',
            'cpf',
            'rg',
            'email',
            'senha',
            'data_criacao',
            'tipo_User',
            'foto',
            'endereco',
        ]
        extra_kwargs = {
            'senha': {'write_only': True}
        }

    def create(self, validated_data):
        endereco_data = validated_data.pop('endereco')
        endereco = Endereco.objects.create(**endereco_data)
        user = User.objects.create(endereco=endereco, **validated_data)
        return user

    def update(self, instance, validated_data):
        endereco_data = validated_data.pop('endereco', None)
        if endereco_data:
            for attr, value in endereco_data.items():
                setattr(instance.endereco, attr, value)
            instance.endereco.save()
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance
