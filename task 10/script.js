function btn(){
    if(!document.getElementById('newButton')){
     var btn = document.createElement('button');
     btn.innerText = 'New Button';
     btn.id = 'newButton';
     document.body.appendChild(btn);
     document.getElementById('newbtncontainer').appendChild(btn);
 
  }  
 }
 