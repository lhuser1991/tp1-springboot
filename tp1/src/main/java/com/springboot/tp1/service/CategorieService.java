package com.springboot.tp1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.tp1.model.Categorie;
import com.springboot.tp1.repository.CategorieRepository;

@Service
public class CategorieService {
    
    @Autowired
    private CategorieRepository categorieRepository;

    public Categorie getCategorieById(long idCategorie) {
        return categorieRepository.findById(idCategorie).orElse(new Categorie());
    }

    public List<Categorie> getAllCategorie() {
        return categorieRepository.findAllByActif(true);
    }

    public Categorie getEmptyCategorie() {
        return new Categorie();
    }

    public Categorie createCategorie(Categorie categorie) {
        Categorie newCategorie = new Categorie(categorie);
        return categorieRepository.save(newCategorie);
    }

    public Categorie deleteCategorie(long idCategorie) {
        Categorie categorie = categorieRepository.findById(idCategorie).orElse(new Categorie());
        if(categorie.getId() != 0) {
            categorie.setActif(false);
        }
        return categorieRepository.save(categorie);
    }
}
