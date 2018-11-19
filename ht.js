function Q1 (FirstNumber,SecondNubmer){ //функция, которая принимает 2 параметра - 2 числа и возвращает true, 
    if (FirstNumber>SecondNubmer){//если первое число больше второго, и false, если это не так
    return true;
    }
    else{
    return false;
    }
    } 
    
    function Q2(SmthString){//функция, которая принимает 1 параметр - строку и возвращает новую строку вида, “Вы ввели * полученная строка *”.
    console.log("Вы ввели:"+ SmthString);
    }
    
    function Q3(Any){//функция, которая принимает 1 параметр любого типа и проверяет, является ли полученное значение null или undefined.
    if(Any==null || Any==undefined){
    return true;
    }
    else{
    return false;
    }
    }
    
    function Q4(SmthObject){//функция, которая принимает 1 параметр - объект и добавляет этому объекту поле checked со значением true.

    SmthObject = {
    checked:true
    }
    }
    
    function Q5 (f) {//функцию, которая принимает 1 параметр - число и выводит в консоль все числа от нуля до введенного числа (в обе стороны).
    for (i = 0; i < f; i++){
    console.log(i); 
    }
    for (i = f; i >= 0; i--){
    console.log(i);
    } 
    }
    
