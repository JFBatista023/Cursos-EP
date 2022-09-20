from django.db import models
from datetime import datetime


class Pessoa(models.Model):
    nome = models.CharField(max_length=200)
    email = models.CharField(max_length=200)

    def __str__(self) -> str:
        return self.nome


class Receita(models.Model):
    pessoa = models.ForeignKey(Pessoa, on_delete=models.CASCADE)
    publicada = models.BooleanField(default=False)
    nome_receita = models.CharField(max_length=200)
    foto_receita = models.ImageField(upload_to='fotos/%d/%m/%Y', blank=True)
    ingredientes = models.TextField()
    modo_preparo = models.TextField()
    tempo_preparo = models.IntegerField()
    rendimento = models.CharField(max_length=100)
    categoria = models.CharField(max_length=100)
    date_receita = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self) -> str:
        return self.nome_receita
