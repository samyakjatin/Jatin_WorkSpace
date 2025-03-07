package com.practice.practice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.practice.practice.entity.Order;


@Repository
public interface OrderRepo extends JpaRepository<Order, Long> {

}
