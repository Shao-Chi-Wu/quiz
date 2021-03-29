function change() {     
    var header = document.getElementById("hid123");                               
    header.innerHTML = "CSIE@CGU";
    var para = document.getElementById("pid123");     
    para.innerHTML = "怎麼那麼棒！！."; 
  }  
    
  function myFunction() {   
   var btn = document.createElement("BUTTON");   
   btn.innerHTML = "Change this document"; 
   document.body.appendChild(btn);
   btn.addEventListener("click", change);
  }