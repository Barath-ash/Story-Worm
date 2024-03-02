 var oven = document.getElementById("overlay")
 var popper = document.getElementById("popup")
 var round = document.querySelector(".round")
 round.addEventListener("click",function(){
     oven.style.display="block"
    popper.style.display="block"
 })

 var cancelpopup = document.querySelector("#Cancel-popup")

 cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    oven.style.display="none"
    popper.style.display="none"

 })

 var bookname = document.getElementById("bookname")
 var bookauthor = document.getElementById("bookauthor")
 var bookcontent = document.getElementById("book-description")
 var container = document.querySelector(".container")
var addbutton= document.getElementById("addbook")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
div.setAttribute("class","book-container")
div.innerHTML= `<h2> ${bookname.value} </h2>
<h5> ${bookauthor.value} </h5>
<p> ${bookcontent.value} </p>
<button onclick="boom(event)"> delete </button> `
container.append(div)
oven.style.display="none"
popper.style.display="none"               
          
})
2
function boom(event){
    event.target.parentElement.remove()
}

