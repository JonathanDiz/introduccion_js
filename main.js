let nombre = 'Jonathan'
let apellido = 'Díaz'
let edad = 30
let pregunta = true
let arr = [
  'escuchar música',
  'ver peliculas',
  'cocinar',
  'escribir'
]
let libroFav = {
  titulo: 'Ami, el niño de las estrellas',
  autor: 'Enrique Barrios',
  fecha: '1986',
  url: 'https://es.wikipedia.org/wiki/Ami_(trilog%C3%ADa)',
}
let birthday = 'Nací el '
birthday = birthday.concat(07)
birthday = birthday.concat(' de ')
birthday = birthday.concat('Julio')
birthday = birthday.concat(' del año ')
birthday = birthday.concat(1992)


console.log(nombre)
console.log(apellido)
console.log(edad)
console.log('¿Eres desarrollador de aplicaciones web? ' + pregunta)
console.log(birthday)

function miActividadFavorita () {
  console.log(arr[2])
}
miActividadFavorita()

function miLibroFavorito () {
  console.log(libroFav)
}
miLibroFavorito()