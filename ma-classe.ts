
/*
On peut faire en typescript des classes assez similaires
à celle du PHP avec des propriétés typées, des visibilités
des méthodes et autre.
Il ne faut pas oublier d'exporter les éléménts d'un
module auxquels on voudra accéder depuis d'autre fichiers
*/
export class MaClasse {
    private maPropriete:string;

    //Méthode de construction, équivalente à __construct()
    constructor() {
        this.maPropriete = 'blup';
    }

    methode():string {
        return 'la propriété vaut : '+this.maPropriete;        
    }

}