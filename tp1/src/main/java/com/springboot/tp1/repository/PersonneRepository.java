package com.springboot.tp1.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.tp1.model.Personne;

public interface PersonneRepository extends JpaRepository<Personne, Long>{
    
    List<Personne> findAllByActif(boolean actif);
    
}
