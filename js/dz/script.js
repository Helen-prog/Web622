let spans = document.querySelectorAll("#messages-container span");
console.log(spans);

for(let i=0; i<spans.length; i++){
    spans[i].addEventListener("click", function(){
        spans[i].parentNode.remove();
    });
}