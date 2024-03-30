principal()

function principal() {
    let opcion
    let totalSueldos = 0
    do {
        opcion = Number(prompt("Cálculos de Total a pagar de los sueldos del mes\n\n Ingrese opción:\n1- Ingrese empleado \n2- Mostrar total a pagar \n0- Salir"))
        if (opcion != 0 && opcion !=1 && opcion !=2 ) {
            console.log(opcion)
            alert("Opcion ingresada incorrecta")
        } else if (opcion === 1) {
            dni = Number(prompt("Ingrese DNI del empleado: "))
            sueldoBruto = Number(prompt("Ingrese Sueldo Bruto: "))
            horasAl50 = Number(prompt("Ingrese 'Cantidad de Horas Extras' en Días Laborables - Recargo 50%: "))
            horasAl100 = Number(prompt("Ingrese 'Cantidad de Horas Extras' en Sábados después de las 13hs, Domingos y feriados - Recargo 100%: "))
            totalSueldos = calcularSueldoNeto(sueldoBruto, horasAl50, horasAl100, totalSueldos)            
        } else if (opcion === 2 ) {
            alert("El total de sueldos a pagar es de $ " + totalSueldos.toFixed(2))
        } else if (opcion === 0) {
            alert("GRACIAS POR UTILIZAR NUESTRO SERVICIO!!!\n Le recuerdo que el total de sueldos a pagar es de $ " + totalSueldos.toFixed(2))
        }
    } while (opcion !== 0)
}


function calcularSueldoNeto(sueldoBr, hAl50, hAl100, total) {
    //Valor de la hora normal = Sueldo Bruto / 200 horas 
    //Horas Extras al 50% (Días laborables). Cálculo: Sueldo bruto divido por 200hs.(mes) multiplicado 1,50.
    let totAl50 = sueldoBr / 200 * 1.50 * hAl50
    //Horas Extras al 100% (Sábado despues de las 13hs, domingos y feriados). Cálculo: Sueldo bruto divido por 200hs.(mes) multiplicado 2.
    let totAl100 = sueldoBr / 200 * 2 * hAl100
    //Total remunerativo = Sueldo Bruto + Horas al 50% + Horas al 100%
    let remunerativo = sueldoBr + totAl50 + totAl100
    //Descuentos 17%
    let descuentos = remunerativo * 0.17
    //Neto a cobrar = Total remunerativo - Descuentos
    let subtotal = remunerativo - descuentos
    alert("DNI: " + dni + "\n Sueldo Bruto: $" + sueldoBr.toFixed(2) + "\n- Horas Extras al 50%: " +
    hAl50 + " , Total $"+ totAl50 +"\n- Horas Extras al 100%: " + hAl100 + " , Total $" + totAl100 + 
    "\n- Descuentos: (-) $" + descuentos.toFixed(2) + "\n La remuneración neta es de: $ " + subtotal.toFixed(2))
    total = total + subtotal
    return total
}

