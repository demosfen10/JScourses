function Q1 (FirstNumber,SecondNubmer){//Напишите функцию, которая принимает 2 параметра - 2 числа и возвращает true,
    if (FirstNumber>SecondNubmer){ // если первое число больше второго, и false, если это не так.
    return true;
    }
    else{
    return false;
    }
    } 
    
    function Q2(SmthString){              //Напишите функцию, которая принимает 1 параметр - строку .
    console.log("Вы ввели:"+ SmthString); //и возвращает новую строку вида, “Вы ввели * полученная строка *”
    }
    
    function Q3(Any){                   //Напишите функцию, которая принимает 1 параметр любого типа и проверяет,
    if(Any==null || Any==undefined){    // является ли полученное значение null или undefined.
    return true;
    }
    else{
    return false;
    }
    }
    
    function Q4(SmthObject){       //Напишите функцию, которая принимает 1 параметр - объект и 
    SmthObject = {                 //добавляет этому объекту поле checked со значением true.
    checked:true
    }
    }
    
    function Q5 (f) {             //Напишите функцию, которая принимает 1 параметр - число и 
    for (i = 0; i < f; i++){      //выводит в консоль все числа от нуля до введенного числа (в обе стороны).
    console.log(i); 
    }
    for (i = f; i >= 0; i--){
    console.log(i);
    } 
    }
    
