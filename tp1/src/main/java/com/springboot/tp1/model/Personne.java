package com.springboot.tp1.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "personne")
public class Personne {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "nom")
    private String nom;

    @Column(name = "prenom")
    private String prenom;

    @Column(name = "description")
    private String description;

    @Column(name = "lien_img")
    private String lienImg;

    @Column(name = "actif")
    private boolean actif;

    @ManyToOne
    @JoinColumn(name = "id_categorie", referencedColumnName = "id", updatable = true)
    private Categorie categorie;

    public Personne() {
        this.id = 0;
        this.nom = "";
        this.prenom = "";
        this.description = "";
        this.lienImg = "";
        this.actif = false;
        this.categorie = null;
    }

    public Personne(PersonneDto personneDto) {
        this.id = personneDto.getId();
        this.nom = personneDto.getNom();
        this.prenom = personneDto.getPrenom();
        this.description = personneDto.getDescription();
        this.lienImg = personneDto.getLienImg();
    }
    
}
