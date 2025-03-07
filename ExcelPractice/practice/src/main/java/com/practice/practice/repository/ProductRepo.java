package com.practice.practice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.practice.practice.entity.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product, Long> {

}
