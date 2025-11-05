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

    @Enumerated(EnumType.STRING)
    private Role role; // ✅ New field

    public User() 
    {
    }
    public User(String username, String password, Role role, String email)
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

    public void setRole(Role role)
    {
        this.role = role;
    }

    public Role getRole()
    {
        return role;
    }

    public void setEmail(String email)
    {
        this.email = email;
    }
    public String getEmail()
    {
        return email;
    }
    public void setPassword(String password)
    {
        this.password = password;
    }
    public String getPassword()
    {
        return password;
    }
    

}
