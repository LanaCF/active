const doc = document;
const items = doc.querySelectorAll('.box-item');
const parItem = doc.querySelectorAll('.box');

items.forEach(function(item){
  item.onclick = function(){
    const parent = this.parentElement;

    this.classList.toggle('active');

    let hasActive = false;

    for (let i = 0; i < parent.children.length; i++){
      if(parent.children[i].classList.contains('active')){
        hasActive = true;
        break;
      }
    }

    if(hasActive){
      parent.classList.add('active');
    } else {
      parent.classList.remove('active');
    }
  };
});



















// item.onclick = function(){
//   const parent = this.parentElement;

//   if (this.classList = 'active'){
//     this.classList.toggle('active');
//     parent.classList.toggle('active');
//   } else {
//     parent.classList.toggle('active');
//   }
  
// }




// items.forEach(function(item){
//   const parent = item.parentElement;

//   if (item != '.box-item'){
//     item.onclick = function(){
//     item.classList.toggle('active');
//     parent.classList.add('active');
//     }
//   } else {
//     parent.classList.remove('active');
//   }
  
// });




// items.forEach(function(item){
//   item.onclick = function(){
//     const parent = item.parentElement;

//     if (item != 'box-item'){
//       item.classList.toggle('active');
//       parent.classList.add('active');
      
//     } else {
//       parent.classList.remove('active');
//     }
//   }
// });







// items.forEach(function(item){
//   item.onclick = function(){
//     const parent = this.parentElement;
    
//     parent.classList.toggle('active');
//     this.classList.toggle('active');
//   }
// })






// Array.from(boxItems).forEach(function(item){
//   item.onclick = function(){
//     const next = this.nextElementSibling;
//     const prev = this.previousElementSibling;

//     console.log(prev);
//     console.log(this);
//     console.log(next);
//   }
// });







// const boxItems = doc.querySelectorAll('.box-item');

// const newBoxItems = Array.from(boxItems).map(function(item){
//   return `<p> -= ${item.innerHTML} =- </p>`;
// }).join('');

// box.innerHTML = newBoxItems;




