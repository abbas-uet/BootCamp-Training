var buttonList=[]
function onButtonclick(){
    buttonList = document.querySelectorAll('.btn');
    
    buttonList.forEach(btn => {
        btn.addEventListener('click',changetheCounterValue);
    });
}
function changetheCounterValue(event){
    buttonList.forEach(btn => {
        btn.classList.remove('border-change');
    });
    event.currentTarget.classList.add('border-change');
    let innerButtonText=event.currentTarget.textContent;
    let currentCounterVal=parseInt(document.getElementById('counter').innerText);
    if(innerButtonText=='Decrease'){
        currentCounterVal--;
        document.getElementById('counter').innerText=currentCounterVal;
        currentCounterVal<0?document.getElementById('counter').style.color='red':''
    }else if(innerButtonText=='Reset'){
        document.getElementById('counter').innerText=0;
        document.getElementById('counter').style.color='grey';
    }else{
        currentCounterVal++;
        document.getElementById('counter').innerText=currentCounterVal;
        currentCounterVal>0?document.getElementById('counter').style.color='green':''
    }
}
document.addEventListener('click',onButtonclick);