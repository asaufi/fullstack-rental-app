package com.example.demo.entity;
import jakarta.persistence.*;

@Entity
@Table(name = "users")



public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false , unique = true)
    private String username;

    @Column(nullable = false)
    private String password;
    
    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String role;

    public User() 
    {
    }
    public User(String username, String password, String role, String email)
    {
        this.username = username;
        this.password = password;
        this.role = role;
        this.email = email;
    }

    public Long getId()
    {
        return id;
    }
    public String getUsername()
    {
        return username;
    }
    public void setUsername(String username)
    {
        this.username = username;
    }


}
