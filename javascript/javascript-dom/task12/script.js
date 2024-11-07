function add_item(){
   
   let items = ["item 1", "item 2", "item 3", "item 4", "item 5"];
   let ul = document.getElementById('itemList');
   ul.innerHTML = '';
   items.forEach((item) => {
    let li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
   })
}
