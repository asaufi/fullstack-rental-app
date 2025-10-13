package com.example.demo.service;

import org.springframework.stereotype.Service;
import com.example.demo.entity.*;
import com.example.demo.repository.UserRepository;

import java.util.*;

@Service
public class UserService {
    private UserRepository userRepository;

    public List<User> getAllUsers()
    {
        return userRepository.findAll();
    }

        public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
    
} 
