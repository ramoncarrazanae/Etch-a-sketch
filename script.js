container = document.querySelector(".container");

creatigGreed(16);
function creatigGreed(n){
    console.log(n);
    removeAllChildNodes(container);

    for (i=0;i<n*n;i++){
        const width = 500/n;
        let div = document.createElement("div");
        div.setAttribute('class', 'grid-div');
        div.style.width = width.toString()+ "px";
        div.style.height = width.toString()+ "px";
        container.appendChild(div);    
    }
    
    let gridDivs = document.querySelectorAll(".grid-div");

    gridDivs.forEach(item =>{
    item.addEventListener("mouseover", function(e){
    currentElement = e.target;
    currentElement.style.backgroundColor = "blue";
})});


}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



let buttonClear = document.getElementById("clear-buttons");

buttonClear.addEventListener("click", function(){
    let numberOfGrids = prompt("Enter a number of columns(1-100)","16");
    if (parseInt(numberOfGrids) >100) {
        alert("Eres anormal. Te dije que entre 1 y 100");
        creatigGreed(16);
    } else {
        console.log(numberOfGrids);
        
    }
    creatigGreed(parseInt(numberOfGrids));
    console.log(parseInt(numberOfGrids));
    gridDivs.forEach(item => {
        item.style.backgroundColor = "gray";
    });
});