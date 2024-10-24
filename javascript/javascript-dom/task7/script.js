var fontsize = 15;
  function incr(){
    fontsize++;
    if(fontsize <= 34){
    document.getElementById('text').style.fontSize = fontsize + 'px';
  }
}
  function decr(){
    --fontsize;
    if(fontsize >= 14){
    document.getElementById('text').style.fontSize = fontsize + 'px';
    
  }
}