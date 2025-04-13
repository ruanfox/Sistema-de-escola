# api/serializers.py
from rest_framework import serializers
from .models import Produto  # Ensure your Produto model is imported if needed

class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = '__all__'  # Or specify fields explicitly