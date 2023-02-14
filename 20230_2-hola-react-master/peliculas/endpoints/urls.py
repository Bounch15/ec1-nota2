from django.urls import path
from . import views

urlpatterns = [
    path("codigopedido", views.codigopedido),
    path("login", views.login),
    path("peliculas/listar", views.obtenerPeliculas),
    path("categorias/listar", views.obtenerCategorias)
]