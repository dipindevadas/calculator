var screen = document.getElementById('screen');

function btnClick(value)
{
    screen.value +=value;
}

function clearScreen(){
    screen.value="";
}

function findResult()
{
    var result=eval(screen.value);
    screen.value=result;
}

function del(){ 
        currentExpression=screen.value; 
        screen.value=currentExpression.slice(0,-1); 
    }