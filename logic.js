//Array con metodo push y pop
let plantas = ["tomate", "brocoli", "cebolla", "coliflor"];
let podar = plantas.pop(recorte =>{
    return recorte;
});
console.log(podar);

let medir = [1, 6, 15, 24];
let poner = () =>{
    medir.push(8);
    return console.log(medir);
};
poner();

//Array con metodo shift y unshift
let pescados = ["bagre", "payaso", "mandarín", "espada"];
let corte = pescados.shift(rec =>{
    return rec;
});
console.log(corte);

let tornillos = ["Pequeño", "Mediano", "Grande"];
let cut = () =>{
    tornillos.unshift("Nano");
    return console.log(tornillos);
};
cut();
//-----------------------------------------------------------------------


//Array con metodo reduce
let num1 = [4, 7, 17, 28, 10];
let result1 = num1.reduce((acum, valorA) => {
    return acum + valorA;
});
console.log(result1);

var integrado = [[0, 1],[2, 3],[4, 5]];
let result2 = integrado.reduce((a, b) => {
    return a.concat(b);
});
console.log("Integrado " + result2);

//-----------------------------------------------------------------------


//Array con metodo filter
let estudiantes = ["Santiago", "Camilo", "Esteban", "Simon", "Mateo"];
let filtradoE = estudiantes.filter(nombre => {
    return nombre.startsWith("S");
});
console.log(filtradoE);

let notas = [4.3, 3, 5, 2.5, 1];
let filtradoN = notas.filter(nota => {
    return nota > 2.9;
});
console.log("Notas Aprobadas " + filtradoN);
//-----------------------------------------------------------------------


//Array con metodo map
let departamentos = ["Antioquia", "Cundinamarca", "Cordoba", "Boyaca"];
const departament = departamentos.map(dep => {
    return "Bienvenido a " + dep;
});
console.log(departament);

let cuadradas = [1, 4, 9];
let raices = cuadradas.map(num => {
    return Math.sqrt(num);
});
console.log(raices);
//-----------------------------------------------------------------------