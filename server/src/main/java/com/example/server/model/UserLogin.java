package com.example.server.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "userLogins")
public class UserLogin {
    private String email;
    private String password;

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}
