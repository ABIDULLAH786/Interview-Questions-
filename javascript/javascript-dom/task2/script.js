var para = document.getElementById('text');
var display=0;
function hideshow(){
  if(display == 1){
      para.style.display = 'block';
      display = 0;
}
else{
   para.style.display = 'none';
   display = 1;
}
}
