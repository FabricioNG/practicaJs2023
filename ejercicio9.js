const array = [2, 20, 7, 15, 2];
let suma = 0;

for (let i = 0; i < array.length; i++) {

if (array[i] %2 == 0)
    suma = suma + array[i];
    
};

console.log(suma);