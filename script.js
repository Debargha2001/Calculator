var display=document.getElementById('display');
var buttons=document.getElementsByClassName('button');
var operand1=null;
var operand2=null;
var operator=null;

function isOperator(value){
    return value=='/' || value=='*' || value=='-' || value=='+';
}

for(var i=0;i<buttons.length;i++){
    buttons[i].onclick = function(){
        var value=this.getAttribute('data-value');
        var text=display.textContent.trim();
        if(isOperator(value)){
            operand1=parseFloat(text);
            operator=value;
            display.textContent= "";
        }
        else if(value=='sign'){
            operand1= -1*parseFloat(text);
            display.textContent=operand1;
        }
        else if(value=='.'){
            operand1=parseFloat(text);
            if(text.length && !text.includes('.')){
                display.textContent=text+'.';
            }
        }
        else if(value=='%'){
            operand1=parseFloat(text)/100;
            display.textContent=operand1;
        }
        else if(value=='ac'){
            display.textContent="";
        }
        else if(value=='='){
            operand2=parseFloat(text);
            var result =eval(operand1+operator+operand2);
            display.textContent=result;
            operand1=result;
            operator=null;
            operand2=null;
        }
        else{
            display.textContent+=value;
        }
    }
}