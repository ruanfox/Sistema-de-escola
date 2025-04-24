from rest_framework import serializers
from api.models.users import User
from api.models.responsaveis import Responsavel


class ResponsavelSeriaizer(serializers.ModelSerializer):

    class Meta:

        model = Responsavel
        fields = '__all__'
