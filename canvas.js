const canvas = document.querySelector('canvas')
const heading = document.querySelector('h1')

canvas.width = innerWidth
canvas.height = innerHeight

const ctx = canvas.getContext('2d')

// ctx.fillStyle = 'rgba(255,0,0,0.5)'
// ctx.fillRect(100, 100, 100, 100)
// ctx.fillStyle = 'rgba(0,0,255,0.5)'
// ctx.fillRect(400, 100, 100, 100)
// ctx.fillStyle = 'rgba(0,255,0,0.5)'
// ctx.fillRect(300, 300, 100, 100)

// // ctx.beginPath()
// ctx.moveTo(50, 300)
// ctx.lineTo(300, 100)
// ctx.lineTo(400, 300)
// ctx.strokeStyle = '#fa34a3'
// ctx.stroke()

// for (i = 0; i < 400; i++) {
//   const x = Math.random() * window.innerWidth
//   const y = Math.random() * window.innerHeight
//   ctx.beginPath()
//   ctx.strokeStyle = 'blue'
//   ctx.arc(x, y, 30, 0, Math.PI * 2, false)
//   ctx.stroke()
// }
// let x = Math.random() * innerWidth
// let y = Math.random() * innerHeight
// let dx = (Math.random() - 0.5) * 15
// let dy = (Math.random() - 0.5) * 15
// let radius = 30

const mouse = {
  x: undefined,
  y: undefined,
}

const maxRadius = 40
const minRadius = 2

const colorArray = [
  '#ffaa33',
  '#99ffaa',
  '#00ff00',
  '#4411aa',
  '#ff1100',
  '#c2efb3',
  '#97abb1',
  '#746F72',
  '#735F3D',
  '#594A26',
]

window.addEventListener('mousemove', function (e) {
  mouse.x = e.x
  mouse.y = e.y
  console.log(mouse)
})

window.addEventListener('resize', function () {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

function Circle(x, y, dx, dy, radius) {
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy
  this.radius = radius
  this.minRadius = radius
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)]

  this.draw = function () {
    ctx.beginPath()
    ctx.strokeStyle = 'blue'
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    ctx.fillStyle = this.color
    ctx.fill()
  }

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0)
      this.dx = -this.dx
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0)
      this.dy = -this.dy

    this.x += this.dx
    this.y += this.dy

    // interactivity
    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1
      }
    } else if (this.radius > this.minRadius) this.radius -= 1

    this.draw()
  }
}

let circleArray = []

function init() {
  circleArray = []

  for (i = 0; i < 800; i++) {
    const radius = Math.random() * 20 + 1
    const x = Math.random() * (innerWidth - radius * 2) + radius
    const y = Math.random() * (innerHeight - radius * 2) + radius
    const dx = Math.random() - 0.5
    const dy = Math.random() - 0.5
    circleArray.push(new Circle(x, y, dx, dy, radius))
  }
}

function animate() {
  requestAnimationFrame(animate)
  ctx.clearRect(0, 0, innerWidth, innerHeight)

  for (i = 0; i < circleArray.length; i++) {
    circleArray[i].update()
  }
}

init()

animate()
