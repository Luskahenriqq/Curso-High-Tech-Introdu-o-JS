function calcular() {
    let n1String = document.getElementById("numero1").value
    let n2String = document.getElementById("numero2").value

    let n1 = parseFloat(n1String)
    let n2 = parseFloat(n2String)

    let resultado = ((n1 * 100) / n2)

    window.alert(resultado)

}