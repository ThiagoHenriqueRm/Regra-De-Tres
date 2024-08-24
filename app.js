const Calc = () => {
    
    let V1 = parseInt(document.getElementById("V1").value)
    let V2 = parseInt(document.getElementById("V2").value)
    
    let X  = 100 * V2 / V1

    document.getElementById("Resposta").innerHTML = `${X}%`

}