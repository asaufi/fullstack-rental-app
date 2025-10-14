package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // désactive CSRF pour les appels frontend
            .authorizeHttpRequests(auth -> auth
                .anyRequest().permitAll() // autorise toutes les requêtes sans login
            )
            .cors(cors -> {}); // active ta config CORS (WebConfig)

        return http.build();
    }
}
