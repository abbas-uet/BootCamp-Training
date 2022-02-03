
const colorsArray=['white','grey','blue','red','oragne','yellow','pink','cyan','magenta','aqua']

function changeColor(){
    let randomSelectedColor=colorsArray[Math.floor(Math.random()*10)]
    document.body.style.backgroundColor=randomSelectedColor;
    let camelCaseRandomSelectedColor= randomSelectedColor.charAt(0).toUpperCase() + randomSelectedColor.slice(1);
    document.getElementById('colorName').innerText=camelCaseRandomSelectedColor;
    document.getElementById('colorName').style.color=randomSelectedColor;
    document.getElementById('button-clickMe').style.backgroundColor=randomSelectedColor;
}

document.addEventListener("click",changeColor);