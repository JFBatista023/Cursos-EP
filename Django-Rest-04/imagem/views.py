from rest_framework import viewsets
from .models import Imagem
from .serializers import ImagemSerializer


class ImagemViewSet(viewsets.ModelViewSet):
    queryset = Imagem.objects.all()
    serializer_class = ImagemSerializer
