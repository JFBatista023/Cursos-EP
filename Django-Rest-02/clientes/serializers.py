from rest_framework import serializers
from clientes.models import Cliente
from .validators import celular_valido, cpf_valido, nome_valido, rg_valido


class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'

    def validate(self, data):
        if not cpf_valido(data['cpf']):
            raise serializers.ValidationError({'cpf': "CPF Inválido."})
        if not rg_valido(data['rg']):
            raise serializers.ValidationError({'rg': 'Deve ter 9 dígitos.'})
        if not nome_valido(data['nome']):
            raise serializers.ValidationError(
                {'nome': 'Não deve ter números.'})
        if not celular_valido(data['celular']):
            raise serializers.ValidationError(
                {'celular': 'O número de celular deve estar no modelo: 11 11111-1111'})
        return data
