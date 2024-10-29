 function btn(){
   if(!document.getElementById('newButton')){
    var btn = document.createElement('button');
    btn.innerText = 'New Button';
    "New Button"
    btn.id = 'newButton';
    btn.style.marginTop = '10px';
    document.body.appendChild(btn);
    document.getElementById('newbtncontainer').appendChild(btn);

 }
 else{
   console.log("The button is already exist")
 }
}
