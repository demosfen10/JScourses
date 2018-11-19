function f2(b) //проверка на undefined
{ return b==undefined } 

function f3(a) //проверка на null
{
    return a==null;
}
 function f4(c) //проверка на NaN
 {return c!==c;}
 
 function isEmptyObject(obj) { //проверка, что объект пустой(не имеет свойств)
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}
