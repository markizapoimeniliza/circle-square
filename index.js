 
//using get and set  - appear one or two or neither

let span = document.getElementById("span")
// let image2 = document.getElementById("img2")
let link = document.getElementById("a")
let select = document.getElementById("select")
let opt1 = document.getElementById("opt1")
let opt2 = document.getElementById("opt2")
let opt3 = document.getElementById("opt3")
let opt4 = document.getElementById("opt4")

const options = {
    Phrase: new URL("https://www.youtube.com/"), //OBNLY WITH NEW - it shows its as a link
    get figures(){
       link.innerHTML = `<a href = "https://www.youtube.com/" style = "position: relative; top: 189px; left: 563px; "> ${this.Phrase}</a>` //neither
       span.innerHTML = " "
       link.addEventListener("mouseover",()=> {
           alert("Click on it!")
        //    link.style.background = "black" 
       })
    },
    set figures(value){ //ONLY 1 parameter!!!
       link.innerHTML = " "
       span.innerHTML = value
    }
}


select.addEventListener("change",function action() {
    if(opt1.selected){
        options.figures = `<img  style = "width: 200px;" src = 'images/circle.png'>` // to avoid interpolation
    }
    else if(opt2.selected){
        options.figures = `<img  style = "width: 200px; position: relative; left: 204px;" src = 'images/square.png'>`
    }
    else if(opt3.selected){ //initial scale
        span.innerHTML = `<img   style = "width: 200px "src = "images/circle.png">
        <img  style = "width: 200px " src = "images/square.png">` 
        link.innerText = " "
        // options.figures = `<img  style = "width: 420px; position: relative; left: -2px; top: -9px;" src = 'images/both.jpeg'>`
    }
    else if(opt4.selected){
       options.figures
    }
    else{
        span.innerHTML = `<img   style = "width: 200px "src = "images/circle.png">
        <img  style = "width: 200px " src = "images/square.png">` 
        link.innerText = " "
    }
}) // mpre professional to use change


//transitions if we have transform!!!!
//can tuse pesudo classes in inline style
//JS ----> HTML (functionality)