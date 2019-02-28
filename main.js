
let size = 10;
let orderElement = 1;

const init = () => {
 const button = document.createElement("button");
 const button1 = document.createElement("button");
    button.textContent = "wcisij";
    button1.textContent = "usuń";
    //button.style.backgroundColor = "blue";
    button.style.width = "60px";
    button1.style.width = "60px";
    button.style.height = "20px";
    button1.style.height = "20px";
    button.style.border ="1px solid black";
    button1.style.border ="1px solid black";
    //console.log(button);
    const ul = document.createElement("ul");
    document.body.append(button);
    document.body.append(button1);
    document.body.append(ul);
    
    
    
    button.addEventListener("click",createLiElements);
    button1.addEventListener("click",removeElements);
}

const createLiElements = () => {
   
 for( let i =0; i< 10; i++){
     const li = document.createElement("li"); 
     li.style.fontSize = size +"px";
     li.textContent = "Element nr " + orderElement;
     orderElement++;
     size++;
     document.querySelector("ul").append(li);
     
     
 }

    
}
const removeElements = () => {
   
      document.querySelector("ul").textContent = "";

}

init()