package com.springboot.tp1.model;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "categorie")
public class Categorie {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "nom")
    private String nom;

    @Column(name = "actif")
    private boolean actif;

    @JsonIgnore
    @OneToMany(mappedBy = "categorie")
    private Set<Personne> listPersonne;

    public Categorie() {
        this.id = 0;
        this.nom = "";
    }

    public Categorie(Categorie categorie) {
        this.nom = categorie.getNom();
        this.actif = true;
    }
}
