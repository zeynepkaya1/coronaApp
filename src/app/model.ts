export class Model{
    items;

    constructor(){
        this.items = [
            new ulkeListe(1,1,1,1),
            new ulkeListe(1,1,1,1),
            new ulkeListe(1,1,1,1),
            new ulkeListe(1,1,1,1),
            new ulkeListe(1,1,1,1),
            new ulkeListe(1,1,1,1),
            new ulkeListe(1,1,1,1),
            new ulkeListe(1,1,1,1),
            new ulkeListe(1,1,1,1),
            new ulkeListe(1,1,1,1),
            new ulkeListe(1,1,1,1),
            new ulkeListe(1,1,1,1),
            new ulkeListe(1,1,1,1),
            new ulkeListe(1,1,1,1),
            new ulkeListe(1,1,1,1),
            new ulkeListe(1,1,1,1),
            new ulkeListe(1,1,1,1),
            new ulkeListe(1,1,1,1),
            new ulkeListe(1,1,1,1),
            new ulkeListe(1,1,1,1)
        ];
    }
}

export class ulkeListe {
    ulke;
    vaka;
    olum;
    iyi;

    constructor(ulke, vaka, olum, iyi) {
        this.ulke = ulke;
        this.vaka = vaka;
        this.olum = olum;
        this.iyi = iyi;
    }
}