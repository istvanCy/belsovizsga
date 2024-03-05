function osszesOszto(szam) {
    var osztok = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i == 0) {
            osztok.push(i);
        }
    }
    return osztok;
}
;
function parosDarab(szamok) {
    var db = 0;
    for (var i = 0; i < szamok.length; i++) {
        if (szamok[i] % 2 == 0) {
            db++;
        }
    }
    return db;
}
;
