// EXAMEN SANTIAGO CEA NAVARRO - 46345715W


const a = 8;
const b = 4
;
console.log(a, b);

const producto = (val1, val2) => {
	let res = val1 * val2;
	return res;
};

const divisible = (var1, var2) => {
	if (b % a === 0) console.log("Divisible");
	else console.log("No divisible");
};

const potencia = (var1, var2) => {
	let res = 1;
	while (var2 > 1) {
		res = res * var1;
		var2--;
	}
	console.log(res);
};

if (a > b) {
	console.log("a es mayor que b");
	console.log(producto(a, b));
} else if (a < b) {
	console.log("b es mayor que a");
	divisible(a, b);
} else {
	console.log("a y b son iguales");
	potencia(a, b);
}
