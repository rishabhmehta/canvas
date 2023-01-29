const canvas = document.querySelector('canvas')
const heading = document.querySelector('h1')

canvas.width = innerWidth
canvas.height = innerHeight

const ctx = canvas.getContext('2d')

ctx.fillRect(100, 100, 100, 100)
ctx.strokeRect(250, 100, 100, 100)
