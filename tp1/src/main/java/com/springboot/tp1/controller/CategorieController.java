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

import com.springboot.tp1.model.Categorie;
import com.springboot.tp1.service.CategorieService;

@RestController
@RequestMapping("tp1/categorie/")
@CrossOrigin(origins = "http://localhost:4200")
public class CategorieController {
    
    @Autowired
    private CategorieService categorieService;
    
    @GetMapping("{idCategorie}")
    public ResponseEntity<Categorie> getCategorieById(@PathVariable long idCategorie) {
        return ResponseEntity.ok(categorieService.getCategorieById(idCategorie));
    }

    @GetMapping("list")
    public ResponseEntity<List<Categorie>> getAllCategorie() {
        return ResponseEntity.ok(categorieService.getAllCategorie());
    }

    @PostMapping("create")
    public ResponseEntity<Categorie> createCategorie(@RequestBody Categorie Categorie) {
        return ResponseEntity.ok(categorieService.createCategorie(Categorie));
    }

    @GetMapping("delete/{idCategorie}")
    public ResponseEntity<Categorie> deleteCategorie(@PathVariable long idCategorie) {
        return ResponseEntity.ok(categorieService.deleteCategorie(idCategorie));
    }

    @GetMapping("init")
    public ResponseEntity<Categorie> getEmptyCategorie() {
        return ResponseEntity.ok(categorieService.getEmptyCategorie());
    }

}
