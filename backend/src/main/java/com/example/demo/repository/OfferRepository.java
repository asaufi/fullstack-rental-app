package com.example.demo.repository;
import com.example.demo.entity.Offer;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfferRepository extends JpaRepository<Offer,Long> {

    Optional<Offer> findByPickupLocation(String pickupLocation);
}
