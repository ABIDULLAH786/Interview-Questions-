function list(){
    var ul = document.getElementById('myList');
    
    var li = document.createElement('li');
    li.textContent = 'item 3';
    ul.appendChild(li);
}