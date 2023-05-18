const persona = {
    nombre: 'nombre',
    sexo: 'sexo',
    edad: 0,
}


const personas = [
    {
        nombre: 'Fabricio',
        sexo: 'masculino',
        edad: 21,
    },
    {
        nombre: 'Marina',
        sexo: 'femenino',
        edad: 24,
    },
    {
        nombre: 'Franco',
        sexo: 'masculino',
        edad: 75,
    },
    {
        nombre: 'Gimena',
        sexo: 'femenino',
        eda: 15,
    }

];

//promedio edades
let sumaEdades = 0;
let promedioEdades = 0;
const cantidadPersonas = personas.length;

for (let i = 0; i < personas.length; i++) {
    console.log(personas[i].nombre + ' tiene '+personas[i].edad+' años')
    sumaEdades = sumaEdades + personas[i].edad;
}

promedioEdades = sumaEdades/cantidadPersonas;
console.log('El promedio de edades es: '+promedioEdades);

//mujer mayor
let mujerMayor;
console.log('La mujer mayor'+ mujerMayor)
for (let index = 0; index < personas.length; index++) {
    const p = personas[index];
    if (p.sexo === 'femenino') {
        if (!mujerMayor) {
            mujerMayor = p;
        } else {
            if (p.edad > mujerMayor.edad) {
                mujerMayor = p;
            }
        }
    }
}
console.log(mujerMayor)

const mujeres = personas.filter((p) => p.sexo === 'femenio');
console.log(mujeres)
let mujerMayor2 = { edad: 0};
for (let index = 0; index < mujeres.length; index++) {
    if (mujeres[i].edad > mujerMayor2.edad) {
        mujerMayor2 = mujeres[i];
    }
    
}
console.log(mujerMayor2);