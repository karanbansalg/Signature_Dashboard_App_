const canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d')
let changeColor = document.querySelector('.changeColor')
let clear = document.querySelector('.clear')
let changeBackground = document.querySelector('.changeBackground')
let changeWidth = document.querySelector('.changeWidth')
let save = document.querySelector('.save')
let undo = document.querySelector('.undo')

let isDrawing = false

function onChangeColor(e){
    ctx.strokeStyle = e.target.value
}

function onChangeBackground(e){
    ctx.fillStyle = e.target.value;
  canvas.style.backgroundColor = e.target.value
  
}

function onChangeWidth(e){

   ctx.lineWidth = e.target.value
   console.log(e.target.value);
}

function onMouseDown(e){
    isDrawing = true
    ctx.beginPath()
    ctx.moveTo(e.offsetX + 50,e.offsetY + 50)
     
}

function onMouseMove(e){  
    if(!isDrawing)return
    ctx.lineTo(e.offsetX + 50,e.offsetY + 50) 
    ctx.stroke()
    
}

function onMouseUp(){
    isDrawing = false
    if(isDrawing = false)return

}

function onClear(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    isDrawing = false
    if(isDrawing = false)return
}

function onSave(){
   save.href =  canvas.toDataURL('png')
   localStorage.setItem('sign',save.href)
   onClear()
}

function onUndo(){
  let img = new Image;
img.onload = function(){
  ctx.drawImage(img,0,0); 
};
img.src = save.href;
   
}

canvas.addEventListener('mousedown',onMouseDown)
canvas.addEventListener('mousemove',onMouseMove)
canvas.addEventListener('mouseup',onMouseUp)

if(changeWidth) changeWidth.addEventListener('change',onChangeWidth)
if (changeColor) changeColor.addEventListener('input', onChangeColor);
if (changeBackground) changeBackground.addEventListener('input', onChangeBackground);
