function cenaProizvoda(i) {
    var komCvet = document.getElementsByClassName('komada');
    var cenaKom = document.getElementsByClassName('cenaJednog');
    let cena = 0;

    // if (isNaN(komCvet[i].value)) {
    //     komCvet[i].value = 0
    // }
    kom = parseInt(komCvet[i].value);
    if (kom < 0) {
        kom = 0;
        komCvet[i].value = 0;
    }

    else {
        cKomada = parseInt(cenaKom[i].value);
        cena = kom * cKomada;
    }
    document.getElementsByClassName('proizvod')[i].value = cena;
}

var elementiCene = document.getElementsByClassName('komada');
for (i = 0; i < elementiCene.length; i++) {
    elementiCene[i].setAttribute("onchange", `cenaProizvoda(${i});suma()`);
}

function suma() {
    var ukCena = 0;
    var cena = document.getElementsByClassName('proizvod');

    for (i = 0; i < cena.length; i++) {

        cene = parseInt(cena[i].value);
        ukCena = ukCena + cene;
    }
    document.getElementById('ukupna').value = ukCena;
}

function skladiste() {
    var komCvet = document.getElementsByClassName('komada');
    var cena = document.getElementsByClassName('proizvod');
    var ukCena = document.getElementById('ukupna');

    var buket = [];

    for (i = 0; i < komCvet.length; i++) {
        var cvet = {
            'ime': komCvet[i].name,
            'kolicina': komCvet[i].value,
            'cena': cena[i].value
        };

        buket[i] = cvet;
    }
    var narudzbina = {
        'buket': buket,
        'ukupnaCena': ukCena.value
    };
    localStorage.setItem('naruceno', JSON.stringify(narudzbina));

};
