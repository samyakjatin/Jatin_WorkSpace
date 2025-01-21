package com.SmartProgramming.SmartProgramming.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SmartProgramming.SmartProgramming.entities.User;
import com.SmartProgramming.SmartProgramming.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	@Override
	public User createUser(User user) {
		
		
		return userRepository.save(user);
	}
	@Override
	public List<User> getAllUsers() {
		
	
		return	userRepository.findAll();
	}
	@Override
	public Optional<User> getUserDetails(int id) {
		
		return userRepository.findById(id);
	}

}
