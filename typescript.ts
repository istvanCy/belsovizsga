function osszesOszto(szam: number): number[] {
    var osztok: number[] = [];

    for (var i: number = 1; i <= szam; i++) {
        if (szam % i == 0) {
            osztok.push(i);
        }
    }

    return osztok;
};

function parosDarab(szamok: number[]): number {
    let db: number = 0;

    for (let i: number = 0; i < szamok.length; i++) {
        if (szamok[i] % 2 == 0) {
             db++;
        }
    }

    return db;
};
