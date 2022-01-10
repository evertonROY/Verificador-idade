function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length < 4 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade <= 10){
                img.setAttribute('src', 'bebe-h.png')
            }else if (idade <= 22){
                img.setAttribute('src', 'jovem-h.png')
            }else if (idade <= 59){
                img.setAttribute('src', 'adulto-h.png')
            }else{
                img.setAttribute('src', 'idoso-h.png')
            }
        } else {
            genero = 'Mulher'
            if (idade <= 10){
                img.setAttribute('src', 'bebe-m.png')
            }else if (idade <= 22){
                img.setAttribute('src', 'jovem-m.png')
            }else if (idade <= 59){
                img.setAttribute('src', 'adulto-m.png')
            }else{
                img.setAttribute('src', 'idoso-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)
    }

}