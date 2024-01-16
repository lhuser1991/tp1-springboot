import { Categorie } from "./categorie";

export class Personne {
    id: number;
    nom: string;
    prenom: string;
    description: string;
    lienImg: string;
    idCategorie: number;

    constructor(id: number, nom: string, prenom: string, description: string, lienImg: string, idCategorie: number) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.description = description;
        this.lienImg = lienImg;
        this.idCategorie = idCategorie

    }
}
