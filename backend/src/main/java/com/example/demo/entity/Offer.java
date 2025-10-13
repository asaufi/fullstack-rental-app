package com.example.demo.entity;
import java.time.LocalDateTime;
import org.hibernate.annotations.DialectOverride.GeneratedColumns;
import jakarta.persistence.*;

@Entity
@Table(name = "offers")

public class Offer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String pickupLocation;
    @Column(nullable = false)
    private LocalDateTime pickupDateTime;
    @Column(nullable = false)
    private String returnLocation;
    @Column(nullable = false)
    private String mobilityService;
    @Column(nullable = false)
    private Double price;

    @ManyToOne
    @JoinColumn(name = "user_id")
    
    private User createdBy;

public Offer()
{
}
public Offer(String title, String pickupLocation, LocalDateTime pickupDateTime,
String returnLocation, String mobilityyService, Double price, User createdBy)
{
    this.title = title;
    this.pickupLocation = pickupLocation;
    this.pickupDateTime = pickupDateTime;
    this.returnLocation = returnLocation;
    this.mobilityService = mobilityyService;
    this.createdBy = createdBy;
}

public void setTitle(String title)
{
    this.title = title;
}
public String getTitle()
{
    return title;
}
    
    public String getPickupLocation() { return pickupLocation; }
    public void setPickupLocation(String pickupLocation) { this.pickupLocation = pickupLocation; }
    public LocalDateTime getPickupDatetime() { return pickupDateTime; }
    public void setPickupDateTime(LocalDateTime pickupDatetime) { this.pickupDateTime = pickupDateTime; }
    public String getReturnLocation() { return returnLocation; }
    public void setReturnLocation(String returnLocation) { this.returnLocation = returnLocation; }
    public String getMobilityService() { return mobilityService; }
    public void setMobilityService(String mobilityService) { this.mobilityService = mobilityService; }
    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
    public User getCreatedBy() { return createdBy; }
    public void setCreatedBy(User createdBy) { this.createdBy = createdBy; }



    
}
