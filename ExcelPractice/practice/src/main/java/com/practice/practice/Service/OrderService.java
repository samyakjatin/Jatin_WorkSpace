package com.practice.practice.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.practice.practice.entity.Order;
import com.practice.practice.entity.Product;
import com.practice.practice.entity.User;
import com.practice.practice.repository.OrderRepo;
import com.practice.practice.repository.ProductRepo;
import com.practice.practice.repository.UserRepo;

import java.util.*;

import jakarta.transaction.Transactional;

@Service
public class OrderService {
	
	 @Autowired
	    private UserRepo userRepository;
	    
	    @Autowired
	    private OrderRepo orderRepository;
	    
	    @Autowired
	    private ProductRepo productRepository;

	    @Transactional
	    public void saveExcelData(List<Map<String, Object>> excelData) {
	        for (Map<String, Object> row : excelData) {
	            if (row.containsKey("name") && row.containsKey("email")) {
	                User user = new User();
	                user.setName(String.valueOf(row.get("name")));  // Safe conversion
	                user.setEmail(String.valueOf(row.get("email")));
	                userRepository.save(user);
	            }

	            if (row.containsKey("orderNumber") && row.containsKey("amount")) {
	                Order order = new Order();
	                order.setOrderNumber(String.valueOf(row.get("orderNumber"))); // Safe conversion
	                order.setAmount(Double.parseDouble(row.get("amount").toString()));
	                orderRepository.save(order);
	            }

	            if (row.containsKey("productName") && row.containsKey("price")) {
	                System.out.println("Inserting Product: " + row.get("productName") + " | Price: " + row.get("price"));

	                Product product = new Product();
	                product.setProductName(String.valueOf(row.get("productName")));
	                product.setPrice(Double.parseDouble(row.get("price").toString()));
	               // product.setProductName("Test TV");
	               // product.setPrice(10000.0);

	                productRepository.save(product);
	            }

	        }
	    }

	    
	    }


