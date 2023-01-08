const canvas=document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width=1024
canvas.height=100
c.fillStyle('red')
c.fillRect(0,0,canvas.width,canvas.height)

export {
    canvas
}