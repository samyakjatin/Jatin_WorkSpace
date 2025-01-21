package com.SmartProgramming.SmartProgramming.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SmartProgramming.SmartProgramming.entities.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	
	

}
