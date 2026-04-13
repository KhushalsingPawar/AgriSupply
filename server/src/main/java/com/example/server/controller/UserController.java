package com.example.server.controller;

import com.example.server.model.User;
import com.example.server.model.UserLogin;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import java.util.HashMap;
import java.util.Map;
import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private MongoTemplate mongoTemplate;

    @GetMapping("/")
    public String home() {
        return "API Server is running!";
    }

    @GetMapping("/admin/users")
    public Object getAllUsers(@RequestHeader("role") String role) {
        if (!"ADMIN".equals(role)) {
            return Map.of("message", "Access Denied ❌");
        }
        return mongoTemplate.findAll(User.class);
    }

    @PostMapping("/signup")
public Map<String,String> signup(@RequestBody User user) {
    Map<String,String> res = new HashMap<>();

    User existing = mongoTemplate.findOne(
        Query.query(Criteria.where("email").is(user.getEmail())),
        User.class
    );

    if (existing != null) {
        res.put("message", "Email already exists");
        return res;   // Always JSON
    }

    user.setRole("USER");
    mongoTemplate.save(user);

    res.put("message", "Signup successful");
    return res;  // Always return JSON
}

 @PostMapping("/login")
public Map<String,Object> login(@RequestBody UserLogin login) {
    Map<String,Object> res = new HashMap<>();
    System.out.println("Login attempt: " + login.getEmail());
    try {
        User user = mongoTemplate.findOne(
            Query.query(Criteria.where("email").is(login.getEmail())),
            User.class
        );
        System.out.println("Found user: " + user);

        if (user != null && user.getPassword() != null && user.getPassword().equals(login.getPassword())) {
            user.setPassword(null);
            res.put("name", user.getName());
            res.put("email", user.getEmail());
            res.put("role", user.getRole() != null ? user.getRole() : "USER");
        } else {
            res.put("message", "Invalid credentials");
        }
    } catch(Exception e) {
        e.printStackTrace();
        res.put("message", "Server error. Try again later.");
    }
    return res;
}



}
