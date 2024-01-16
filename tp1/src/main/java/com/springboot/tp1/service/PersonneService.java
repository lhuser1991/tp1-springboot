package com.springboot.tp1.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.tp1.model.Categorie;
import com.springboot.tp1.model.Personne;
import com.springboot.tp1.model.PersonneDto;
import com.springboot.tp1.repository.CategorieRepository;
import com.springboot.tp1.repository.PersonneRepository;

@Service
public class PersonneService {
    
    @Autowired
    private PersonneRepository personneRepository;

    @Autowired
    private CategorieRepository categorieRepository;

    public PersonneDto getPersonneById(long idPersonne) {
        Personne personne = personneRepository.findById(idPersonne).orElse(new Personne());
        return new PersonneDto(personne);
    }

    public List<PersonneDto> getAllPersonne() {
        List<Personne> listPersonne =  personneRepository.findAllByActif(true);
        List<PersonneDto> listPersonneDto = new ArrayList<PersonneDto>();
        for(Personne p: listPersonne) {
            listPersonneDto.add(new PersonneDto(p));
        }
        return listPersonneDto;
    }

    public PersonneDto createPersonne(PersonneDto personneDto) {

        Personne newPersonne = new Personne(personneDto);
        newPersonne.setActif(true);
        newPersonne.setCategorie(categorieRepository.findById(personneDto.getIdCategorie()).orElse(new Categorie()));
        personneRepository.save(newPersonne);
        return new PersonneDto(newPersonne);
    }

    public PersonneDto deletePersonne(long idPersonne) {
        Personne personne = personneRepository.findById(idPersonne).orElse(new Personne());
        if(personne.getId() != 0) {
            personne.setActif(false);
        }
        personneRepository.save(personne);
        return new PersonneDto(personne);
    }
}
