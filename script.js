let num1='';
let num2='';
let operator='';
let total='';

$(document).ready(function(){

    $('button').on('click',function(e){
        let btn=e.target.innerHTML;
        if(btn>='0' && btn<='9'){
            handleNumber(btn);
        }
        else if(btn === 'Clear'){
            n1 = n2 = operator='';
            ans=0;
            displayButton(ans);
        }
        else{
            handleOperator(btn);
        }
        
    });
});



function handleNumber(num){
    if(num1===''){
        num1=num;
    }
    else{
        num2=num;
    }
    displayButton(num);
}

function handleOperator(oper){
    if(operator===''){
        operator=oper;
    }
    else
    {
        handleTotal();
        operator=oper;
    }
}

function handleTotal(){
    switch(operator){
        case '+':total+= +num1 + +num2;
                 displayButton(total);
        break;
        case '-':total+= +num1 - +num2;
                 displayButton(total);
        break;
        case '/':total+= +num1 / +num2;
                 displayButton(total);
        break;
        case '*':total+= +num1 * +num2;
                 displayButton(total);
        break;
        
    }

    updateVariables();
}

function displayButton(btn){
    $('.input').text(btn);
}

function updateVariables(){
    num1+=total;
    num2='';
}