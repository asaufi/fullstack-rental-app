package com.example.demo.security;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {

        // Fetch the user from your database
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));


        // Return a Spring Security user object with username, password, and role
        return org.springframework.security.core.userdetails.User
        .withUsername(user.getUsername())
        .password("{noop}" + user.getPassword()) // 👈 add {noop} prefix
        .authorities(user.getRole().name())
        .build();

    }
}
