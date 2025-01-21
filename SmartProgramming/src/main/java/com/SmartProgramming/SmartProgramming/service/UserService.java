package com.SmartProgramming.SmartProgramming.service;

import java.util.List;
import java.util.Optional;

import com.SmartProgramming.SmartProgramming.entities.User;

public interface UserService {
	public User createUser(User user);
	public List<User> getAllUsers();
	public Optional<User> getUserDetails(int id);

}
