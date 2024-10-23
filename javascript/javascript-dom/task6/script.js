function mylist(){
    var ul = document.getElementById('myList');
    if(ul.children.length>1){
        ul.removeChild(ul.lastElementChild)
    }
    
}