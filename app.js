function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var boa = document.getElementById('boa')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = 'Agora são '+hora+ ' horas e '+min+ ' minutos e contando....'
    if(hora >= 0 && hora < 12){
        //BOM DIA #6DAAE8
        boa.innerHTML = 'Bom dia!'
        document.body.style.background = '#6DAAE8'
        img.src = '/Programando em JS/PJ01/img/manha.jpg'
    }else if (hora >= 12 && hora < 18){
        //BOA TARDE #FB840C
        boa.innerHTML = 'Boa tarde!'
        document.body.style.background = '#FB840C'
        img.src = '/Programando em JS/PJ01/img/tarde.jpg'
    }else{
        //BOA NOITE #04172E
        boa.innerHTML = 'Boa noite!'
        document.body.style.background = '#04172E'
        img.src = '/Programando em JS/PJ01/img/noite.jpg'
    }
}

