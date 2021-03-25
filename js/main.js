// Do stuff when button is pressed
const button = document.getElementById('submit-button');
button.addEventListener('click', () => {
 

    // Determine which radio is pressed
    const radios = document.querySelectorAll('[type="radio"]');
    const textInput = document.getElementById('translator-input');
    let values = textInput.value;
    const endResult = document.querySelector("#results")
    let obj = document.getElementById("search")
    let searchedObj = (search(values))
    for (const radio of radios) {
        if(radio.checked === true)  {
            if(radio.value === "encode"){
                console.log(radio.value)
                endResult.innerText = encode(values);
                return endResult
            }else if(radio.value === "translate"){
                console.log(radio.value)
                endResult.innerText = translate(values);
                return endResult
            }else if(radio.value === "madlib") {
                console.log(radio.value)
                endResult.innerText = madlib(values);
            }else if(radio.value === "search"){
                endResult.innerHTML = "";
                console.log(search(values));
                for (obj of searchedObj) {
                    console.log(obj.symbol)
                    const para = document.createElement("p")
                    para.innerText = obj.symbol;
                    endResult.appendChild(para)
                }
            }else if(radio.value === "random") {
                console.log(radio.value)
                endResult.innerHTML = Math.floor(Math.random()* 4).toFixed(0);
                if(endResult.innerText == 0){
                    document.getElementById("encode").click();
                    document.getElementById("submit-button").click();
                }
                if(endResult.innerText == 1){
                    document.getElementById("translate").click();
                    document.getElementById("submit-button").click();
                }
                if(endResult.innerText == 2){
                    document.getElementById("madlib").click();
                    document.getElementById("submit-button").click();
                }
                if(endResult.innerText == 3){
                    document.getElementById("search").click();
                    document.getElementById("submit-button").click();
                }
                return endResult
            } 
        }    
    }
}







)

// function myFunction() {
//     document.getElementById(radio.value).click();
                        
// }