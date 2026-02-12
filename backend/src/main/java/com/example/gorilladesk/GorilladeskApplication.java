package com.example.gorilladesk;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class GorilladeskApplication {

    public static void main(String[] args) {
        SpringApplication.run(GorilladeskApplication.class, args);
    }
}

