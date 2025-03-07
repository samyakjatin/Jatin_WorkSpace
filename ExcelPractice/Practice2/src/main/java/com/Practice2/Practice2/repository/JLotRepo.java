package com.Practice2.Practice2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Practice2.Practice2.entity.JLot;

@Repository
public interface JLotRepo extends JpaRepository<JLot, Long> {
}