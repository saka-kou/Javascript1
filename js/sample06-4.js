const textElems = document.querySelectorAll(".txt");
console.log( textElems )

textElems[0].addEventListener("mouseover" , function(event){
    console.log( event.target )
    event.target.style.color = "pink"
})

for( let i=0; i< 5; i++){
    console.log( textElems[ i ])
    textElems[ i ] , addEventListener("mouseover" , function(event){
        console.log(event.target)
        event.target.style.color = "pink"
    })
}