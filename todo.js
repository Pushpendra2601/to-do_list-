
 const inputValue=document.getElementById('input');
 const listcontainer=document.getElementById('lst-cont');

 function myTask(){
    if(inputValue===" "){
        alert('Please enter the task');
        
    }
    else{
        let li =document.createElement("li");
        li.innerHTML=inputValue.value;
        listcontainer.appendChild(li);
        
        
        // adding del icon
        let span =document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputValue.value=" ";
    loclstrg();
    
 }

 listcontainer.addEventListener("click",function(del){
    if(del.target.tagName==="LI"){
        del.target.classList.toggle("checked");
        loclstrg();
    }
        

    else if(del.targate.tagName==="SPAN"){
        del.targate.parentElement.remove();
        loclstrg();
        
        }
    
 },false);

 function loclstrg(){
    localStorage.setItem('data',listcontainer.innerHTML);
 }

 function data(){
    listcontainer.innerHTML=localStorage.getItem('data');
 }

 
