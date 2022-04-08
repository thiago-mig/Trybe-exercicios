let salBruto = 3000.00;
let salMenosInss;
let salMenosIr;

if (salBruto <= 1556.94){
    salMenosInss = salBruto - salBruto * 0.08;
}
else if(salBruto > 1556.94 && salBruto <= 2594.92){
    salMenosInss = salBruto - salBruto * 0.09;
}
else if (salBruto > 2594.92 && salBruto <= 5189.82){
    salMenosInss = salBruto - salBruto * 0.11;
}
else{
    salMenosInss = salBruto - 570.88;
}

//console.log(salMenosInss);

if(salMenosInss <= 1903.98){
    salMenosIr = salMenosInss;
}
else if (salMenosInss > 1903.98 && salMenosInss <= 2826.65){
    salMenosIr = salMenosInss - ((salMenosInss * 0.075) - 142.80);
}
else if (salMenosInss > 2826.65 && salMenosInss <= 3751.05){
    salMenosIr = salMenosInss - ((salMenosInss * 0.15) - 354,80);
}
else if (salMenosInss > 3751.05 && salMenosInss <= 4664.68){
    salMenosIr = salMenosInss - ((salMenosInss * 0.225) - 636.13);
}
else {
    salMenosIr = salMenosInss - ((salMenosInss * 0.275) - 869.36);
}

console.log(salMenosIr);