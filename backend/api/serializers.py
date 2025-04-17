# api/serializers.py
from rest_framework import serializers

class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        