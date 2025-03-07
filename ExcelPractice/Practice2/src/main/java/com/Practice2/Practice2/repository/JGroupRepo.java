package com.Practice2.Practice2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Practice2.Practice2.entity.JGroup;

@Repository
public interface JGroupRepo extends JpaRepository<JGroup, Long> {
}
