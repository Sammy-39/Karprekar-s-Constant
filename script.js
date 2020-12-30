var flag = 1;
var count;
function checkNum(){
            
    var inpField = document.querySelector("#inputField")
    var value = inpField.value

    while(value[0]==="0"){
        value = value.slice(1)
    }
    
    if(isNaN(value) || value.length!==4){
                inpField.setCustomValidity("Please enter a 4 digit number")
                alert("Please enter a 4 digit number")
    }
    else{
        count = 0
        var opGroupElement = document.querySelector(".outputGroup")
        opGroupElement.style = "box-shadow: 0 8px 8px 8px gray;"
        while(opGroupElement.firstChild){
            opGroupElement.removeChild(opGroupElement.lastChild)
        }

        opGroupElement.innerHTML = "<p> ------------ Iteration Steps ------------</p>"
        displayKpConstant(value);
    }
}

function displayKpConstant(num){
            
    var maxNum = num.split("").sort((x,y)=>{return y-x}).join("")
    var minNum = num.split("").sort((x,y)=>{return x-y}).join("")
    var diff = parseInt(maxNum) - parseInt(minNum)
    count+=1
    if(diff === 6174){
        diff = `<span style="color:red;"> 6174 </span>`
    }
    var paraElement = document.createElement("p")
    paraElement.innerHTML = `${maxNum} - ${minNum} = ${diff}`
    document.querySelector(".outputGroup").append(paraElement)
    diff = parseInt(maxNum) - parseInt(minNum)

    if(diff !== 6174 && diff!== 0 && count<8){
        displayKpConstant(diff.toString())  
    }
    else if(diff===0 || count===8){
        paraElement = document.createElement("p")
        paraElement.style = "line-height:20px;"
        paraElement.innerText = `!-- Karprekar's Constant cannot be generated--!`
        document.querySelector(".outputGroup").append(paraElement)
    }
           
    return;
}
