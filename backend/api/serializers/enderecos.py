from rest_framework import serializers
from api.models.enderecos import Endereco

class EnderecoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Endereco
        fields = [
            'id',
            'cep',
            'rua',
            'numero',
            'bairro',
            'complemento',
            'cidade',
            'uf',
            'situacao',
        ]
