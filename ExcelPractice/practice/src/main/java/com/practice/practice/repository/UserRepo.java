package com.practice.practice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.practice.practice.entity.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long>{

}
