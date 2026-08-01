https://github.com/Matu-Dev-JS/2026_UTN_PWI_JUNIO_LUNES_MIERCOLES/tree/main/Clase%201%20Introduccion%20a%20desarrollo%20web

## SINTAXIS HTML

## ETIQUETAS

Existen 2 tipos de etiqueta:

## De Cierre
<ejemplo> </ejemplo>

## Caracteristica Especial: NESTING O ANIDAMIENTO
Pueden contener otras etiquetas

<padre><hija><nieta></nieta></hija><img/></padre>

## De autocierre
<ejemplo-autocierre> o <ejemplo-autocierre/>

Ejemplo Real:

<div></div> - es de cierre
<img> - es de autocierre
<input/> - es de autocierre
<label></label> - de cierre

Que define si es autocierre o de cierre? El lenguaje, cada elemento (img, input, label) tiene en su definicion si es de autocierre o de cierre

## Elementos

Son los tipos de elementos que existen y estan definidos en el lenguaje HTML, cada elemento tiene un significado o funcionamiento.

Por ejemplo:

button -> Hacer un boton, de cierre
img -> hacer una imagen, de autocierre
video -> hacer un video, de cierre
a -> hacer un hipervinculo, de cierre
h1 -> hacer un titulo de mucha jerarquia, de cierre
p -> hacer un parrafo, de cierre
nav -> navegacion de la pagina, de cierre
audio -> hacer audios dentro de la pagina, de cierre

## Atributos

Cada elemento tiene o puede tener ATRIBUTOS, los atributos son configuraciones de ese elemento. El tipo de atributos de cada elemento es definido por el elemento. 

El elemento IMG tiene acceso a los atributos SRC y ALT. SRC es el atributo que define la direccion de la imagen, el source. 

El ALT es el atributo que define un texto alternativo en caso de que no cargue la imagen

Por ejemplo:

<img src="" alt="">


<h1>Hola que ase</h1>
<img src= "https://http2.mlstatic.com/D_NQ_702697-MLA111355108068_052026-OO.webp" alt="Tengo hambre">
<img src="./Grisel_test.png">


## Problema del Anidamiento
Ejemplo:

El codigo se lee mal:

<padre><hijo><nieto></nieto></hijo><hijo></hijo></padre>

Para eso indentamos, es una buena practica:

<padre>
    <hijo>
        <nieto></nieto>
    </hijo>
    <hijo></hijo>
</padre>