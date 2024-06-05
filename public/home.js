let righticon = document.querySelector('#righticon');
let lefticon = document.querySelector('#lefticon');
let move = document.querySelector('.threeimg');


righticon.addEventListener('click',()=>{
    move.scrollLeft += 140;
})

lefticon.addEventListener('click',()=>{
    move.scrollLeft -= 140;
})


let rightarrow = document.querySelector('#rightarrow');
let leftarrow = document.querySelector('#leftarrow');
let fivebox = document.querySelector('.fivebox');


rightarrow.addEventListener('click',()=>{
    fivebox.scrollLeft += 170;
})

leftarrow.addEventListener('click',()=>{
    fivebox.scrollLeft -= 170;
})

let tog = document.querySelector('.toggle')
  
let menu = document.querySelector('#bar').addEventListener('click',()=>{
    tog.classList.toggle('toggle')
})

  
