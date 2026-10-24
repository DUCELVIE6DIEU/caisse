const Budget_du_client = 20000
const Prix_d_un_cahier = 1500 
let Quantité_de_cahiers = 4 
const Prix_d_un_stylo = 500
let Quantité_de_stylos = 3
const Montant_des_cahiers = Prix_d_un_cahier * Quantité_de_cahiers;
const Montant_des_stylos = Prix_d_un_stylo*Quantité_de_stylos;
const Montant_total_des_achats = Montant_des_cahiers+Montant_des_stylos;
console.log("===== CAISSE =====");
console.log("cahier:", Prix_d_un_cahier, "FCFA");
console.log("stylos:", Prix_d_un_stylo, "FCFA");
console.log("total:", Montant_des_cahiers, "FCFA");
console.log("budget:", Budget_du_client, "FCFA");
if (Montant_total_des_achats <= Budget_du_client) {
    console.log("Budget suffissant");
}
else {
console.log("Budget insuffisant");   
}
console.log(" ");
for(let n=1; n<=5; n++){
    console.log("Achat numéro", +n);
}