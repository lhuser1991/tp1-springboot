package com.springboot.tp1.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class PersonneDto {
    
    private long id;
    private String nom;
    private String prenom;
    private String description;
    private String lienImg;
    private boolean actif;
    private long idCategorie;

    public PersonneDto(Personne personne) {
        this.id = personne.getId();
        this.nom = personne.getNom();
        this.prenom = personne.getPrenom();
        this.description = personne.getDescription();
        this.lienImg = personne.getLienImg();
        this.actif = personne.isActif();
        this.idCategorie = personne.getCategorie().getId();
    }
}
