/* =================================
  basic javascript

  comments

  data types

  variables

  MATH

    math: + - * / %

    math etc: ++ -- += < > <= == === != !== && || 

    Math.floor(); Math.random(); 

  STRINGS

    escapes for strings \n

    concatenate strings and variables

    stringVariable.length;
    
    bracket notation on strings console.log(variableName[1]};

    stringVariable[stringVariable.length - n];

  ARRAYS
    
    array = ['a', 1, true, 1.3];

    nestedArray = [['this', 2], ['that', 3]];

    accessing arrays and nested arrays array[2]; = true, nestedArray[1][0]; = 'that'
    
    push(), pop(), shift(), unshift()


  FUNCTIONS

    function nameMeAnything(setParameters, moreThanOne) {
      do something;
      and use the, setParameters, variables;
    }

  CONDITIONAL LOGIC

    if(something is something) {
      do something;
    }

    if(here && there) {
      do one thing;
    } else(near || far) {
      do another thing;
    }

    switch(variable){
      case: 1;
        updateSomething: 'updating';
        break;
    }

  OBJECTS
    obj = {
      a: 'list',
      of: 'non-sense'
    }

  ITERATE

    while(a < 5) {
      console.log('hello steven');
      a ++;
    }


    let a = 1;
    do {
      console.log('this is fun');
    } while (a < 7);
    a++;

    for(a = 0; a < 4; a++) {
      do something;
    }

    RECURSION

  parseInt

  Ternary Operator

==================================== */



/* =================================== 

  

==================================== */



















const ONCE = 'string';
let num = 1; 
let bool = true;
let arr = ['badger1', 'badger2', 'badger3'];
let obj = {
  name: 'onelle',
  age: 42,
  email: 'anything@gmail.com',
  password: 'abcdefg123'
};

console.log(arr);
// pop off the end
arr.pop();
console.log(arr);
// push on the end
arr.push('mushroom3');
console.log(arr);
// shift off the front
arr.shift();
console.log(arr);

arr.unshift('mushroom1');
console.log(arr);