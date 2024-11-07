 function inputfield(){
    var input = document.getElementById('username');
    var form = document.getElementById('myForm');
    form.addEventListener ('submit',function(event){
    if(input.value.trim() === ''){ 
        event.preventDefault();  
        alert("username is required");
    }
    })
 }