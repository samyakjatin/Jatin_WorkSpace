package com.practice.practice.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.practice.practice.Service.OrderService;



@RestController
@CrossOrigin("*")
@RequestMapping("/upload")
public class UserController {
    @Autowired
    private OrderService orderservice;

    @PostMapping
    public ResponseEntity<String> uploadExcelData(@RequestBody List<Map<String, Object>> excelData) {
    	orderservice.saveExcelData(excelData);
        return ResponseEntity.ok("Data saved successfully");
    }
}