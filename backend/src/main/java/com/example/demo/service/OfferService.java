package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repository.OfferRepository;
import java.util.*;
import com.example.demo.entity.Offer;

@Service
public class OfferService {
    @Autowired
    private OfferRepository offerRepository;


    public List<Offer> getAllOffers()
    {
        return offerRepository.findAll();
    }

    public Optional<Offer> getOfferById(Long id) {
        return offerRepository.findById(id);
    }
    public Offer createOffer(Offer offer) {
        return offerRepository.save(offer);
    }

    public void deleteOffer(Long id) {
        offerRepository.deleteById(id);
    }

    public Optional<Offer> getOffersByPickupLocation(String location) {
        return offerRepository.findByPickupLocation(location);
    }

    
    
}
