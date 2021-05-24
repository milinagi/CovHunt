// Creamos un objeto con la plantilla base de Enemy
function Enemy (left, direction) {
  var self = this

  // Properties (propiedades)
  this.left = left
  this.direction = direction
  this.html = 0
  this.id = -1
  this.alive = true

  // Función que crea un nuevo enemigo y lo añade al DOM
  this.create = function (lastId) {
    let canvas = document.getElementById('canvas')
    let enemy = document.createElement('div')
    enemy.classList.add('enemy')
    self.id = parseInt(lastId) + 1
    enemy.setAttribute('id', self.id)
    enemy.style.left = self.left + 'px'
    canvas.appendChild(enemy)
    self.html = document.getElementById(self.id)
  }

  this.move = function () {
    self.left += 10 * self.direction
    self.html.style.left = self.left + 'px'
  }

  this.die = function () {
    self.html.parentNode.removeChild(self.html)
  }
}
