function calcular(){

    let n1String = document.getElementById("numero1").value
    let n2String = document.getElementById("numero2").value
    let n3String = document.getElementById("numero3").value

    let n1 = parseFloat(n1String)
    let n2 = parseFloat(n2String)
    let n3 = parseFloat(n3String)

    let resultado = ((n1 * 600) + ((n2 - 1) * 600) + (n3 * 600))

    window.alert(resultado)
}