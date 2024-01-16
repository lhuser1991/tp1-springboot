package com.springboot.tp1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.tp1.model.Personne;
import com.springboot.tp1.model.PersonneDto;
import com.springboot.tp1.service.PersonneService;

@RestController
@RequestMapping("tp1/personne/")
@CrossOrigin(origins = "http://localhost:4200")
public class PersonneController {

    @Autowired
    private PersonneService personneService;
    
    @GetMapping("{idPersonne}")
    public ResponseEntity<PersonneDto> getPersonneById(@PathVariable long idPersonne) {
        return ResponseEntity.ok(personneService.getPersonneById(idPersonne));
    }

    @GetMapping("list")
    public ResponseEntity<List<PersonneDto>> getAllPersonne() {
        return ResponseEntity.ok(personneService.getAllPersonne());
    }

    @PostMapping("create")
    public ResponseEntity<PersonneDto> createPersonne(@RequestBody PersonneDto personneDto) {
        return ResponseEntity.ok(personneService.createPersonne(personneDto));
    }

    @GetMapping("delete/{idPersonne}")
    public ResponseEntity<PersonneDto> deletePersonne(@PathVariable long idPersonne) {
        return ResponseEntity.ok(personneService.deletePersonne(idPersonne));
    }

}
