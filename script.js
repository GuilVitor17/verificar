function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){ 
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number (fano.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked) {
          genero = 'HOMEM'
          if( idade >= 0 && idade < 10) {
              //criança 
              img.setAttribute ('src','fotocriancaM.jpg')
          } else if (idade < 21){
             //jovem
             img.setAttribute('src','fotojovemM.jpg')
          } else if( idade < 50) {
             // adulto
             img.setAttribute('src','fotoadultoM.jpg')
          } else{ 
              //idoso
              img.setAttribute('src','fotoidosoM.jpg')
          }
      } else if (fsex[1].checked) {
          genero = 'MULHER'
          if( idade >= 0 && idade < 10) {
            //criança 
            img.setAttribute('src','fotocriancaF.jpg')
        } else if (idade < 21){
           //jovem
           img.setAttribute('src','fotojovemF.jpg')
        } else if( idade < 50) {
           // adulto
           img.setAttribute('src','fotoadultoF.jpg')
        } else{ 
            //idoso
            img.setAttribute('src','fotoidosoF.jpg')
        }
      }
     res.style.textAlign = "center"
     res.innerHTML = `DETECTAMOS ${genero} COM ${idade} ANOS.`
     res.appendChild(img)
     img.style.marginTop = "10px"
     img.style.textAlign = "center"
     img.style.height = "600px"
     img.style.borderRadius = "10px"
     img.style.width = "500px"
    
    }
}