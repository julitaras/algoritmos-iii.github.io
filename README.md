# Página de Algoritmos y Programación III (7507/9502) - Curso Leveroni

## ¿Cómo levantar localmente la página?

Cualquier commit en el directorio raíz se auto-publica en la página al hacer push a la rama master. GitHub se encarga de ese proceso.

Para visualizar los cambios de manera local, se debe instalar [Jekyl]l(https://jekyllrb.com/docs/).

```sh
gem install jekyll bundler
cd algoritmos-iii.github.io
bundle install

# Para visualizar la página. --livereload es para ver los cambios en vivo.
bundle exec jekyll serve --livereload
```

**Nota:** Estos pasos tambien estan indicados en la pagina de Jekyll.
