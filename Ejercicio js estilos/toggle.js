let ctrol = true;
const img=document.querySelector('img');

document.querySelector('.box').addEventListener('click', () => {
    ctrol = !ctrol;
   /* if (ctrol) {
    img.src = 'PinguLinux_Ying_Yang.png';
    alert(ctrol);}
   else{
    img.src = 'PinguLinux_Yoda.jpg';
    alert(ctrol); */

    if (ctrol) {
        img.setAttribute('src','PinguLinux_Ying_Yang.png');
     }       
       else {
        img.setAttribute('src','PinguLinux_Yoda.jpg');
             }
});
    
  /* ctrol?document.querySelector('img').setAttribute('background-image', 'PinguLinux_Ying_Yang.png')
        :document.querySelector('img').setAttribute('background-image', 'PinguLinux_Yoda.jpg'); */
    