package com.example.demo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Offer;
import com.example.demo.service.OfferService;

@RestController
@RequestMapping("/api/offers")
public class OfferController {
    private OfferService offerService;


    @GetMapping
    public List<Offer> getAllOffers()
    {
        return offerService.getAllOffers();
    }

    @PostMapping
    public Offer createOffer(Offer offer)
    {
        return offerService.createOffer(offer);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOffer(@PathVariable Long id)
    {
        offerService.deleteOffer(id);
        return ResponseEntity.noContent().build();
    }
}
