package com.springboot.tp1.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.tp1.model.Categorie;

public interface CategorieRepository extends JpaRepository<Categorie, Long>{
 
    List<Categorie> findAllByActif(boolean actif);
    
}
