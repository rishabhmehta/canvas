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

function Circle(x, y, dx, dy, radius) {
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy
  this.radius = radius

  this.draw = function () {
    ctx.beginPath()
    ctx.strokeStyle = 'blue'
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    ctx.stroke()
    ctx.fill()
  }

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0)
      this.dx = -this.dx
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0)
      this.dy = -this.dy

    this.x += this.dx
    this.y += this.dy

    this.draw()
  }
}

const circleArray = []

for (i = 0; i < 200; i++) {
  let radius = 30
  let x = Math.random() * (innerWidth - radius * 2) + radius
  let y = Math.random() * (innerHeight - radius * 2) + radius
  let dx = Math.random() - 0.5 * 15
  let dy = Math.random() - 0.5 * 15
  circleArray.push(new Circle(x, y, dx, dy, radius))
}

console.log(circleArray)

function animate() {
  requestAnimationFrame(animate)
  ctx.clearRect(0, 0, innerWidth, innerHeight)

  for (i = 0; i < circleArray.length; i++) {
    circleArray[i].update()
  }
}

animate()
