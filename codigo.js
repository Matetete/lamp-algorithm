// let numero = prompt("Coloque un número")

// if (numero >= 0 && numero <= 9) {
// 	alert("Su número esta entre 0 y 9")
// }

// else if (numero >= 10 && numero <= 20) {
// 	alert("Su número esta entre 10 y 20")
// }

// else {
// 	alert("Su número no aparece en mi sistema")
// }



// let grados = prompt("¿Cuántos grados hace?")

// if (grados >= 30) {
// 	alert("Que calor")
// }

// else if (grados <= 15) {
// 	alert("Que frío")
// }

// else {
// 	alert("Que bonito día hace")
// }



let lampara = prompt("¿La lampara funciona? [si/no] (no usar mayúsculas ni tildes)")

if (lampara == "si") {
	alert("_b")
}

else {
	alert("Que mal")

	let enchufada = prompt("¿Esta enchufada? [si/no] (no usar mayúsculas ni tildes)")

	if (enchufada == "si") {
		alert("Que cagada")

		let quemado = prompt("¿El foco esta quemado? [si/no] (no usar mayúsculas ni tildes)")

		if (quemado == "si") {
			alert("Reemplace el foco")
		}

		else {
			alert("Compre otra lampara")
		}

	}

	else {
		alert("Enchufela")
	}

}
