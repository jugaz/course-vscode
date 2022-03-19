/*
    Objetivo:
        Ver rápidamente las definiciones de la clase
        También funciona con archivos HTML y otros

    Tips:
        ⌘ P => luego escribir la @
        ⇧ ⌘ O

        Ctrl + P => luego escribir la @
        Ctrl + Shift = O

        Se pueden agrupar si después de la @, se escriben :
*/


class SuperHeroe {

    nombre;
    poder;
    edad;
    pasatiempo;

    constructor() { }

    usarPoder() {}

    volar() {}

    correr() {}

    caminar() {}

    revivir() {}

    // Sólo para demostración
    // tslint:disable-next-line:member-ordering
    nombre2;
    // tslint:disable-next-line:member-ordering
    poder2;
    // tslint:disable-next-line:member-ordering
    edad2;
    // tslint:disable-next-line:member-ordering
    pasatiempo3;

    set nombreSecreto(nombre) {
        this._nombreSecreto = nombre;
    }

    get nombreSecreto() {
        return this._nombreSecreto;
    }
}
