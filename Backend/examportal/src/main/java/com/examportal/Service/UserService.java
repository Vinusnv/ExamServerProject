package com.examportal.Service;

import java.util.List;
import java.util.Set;

import org.springframework.web.bind.annotation.RequestParam;

import com.examportal.Entity.User;
import com.examportal.Entity.UserRole;

public interface UserService {
	
	//Creating the User
	
	public User createUser(User user,Set<UserRole> userRoles) throws Exception ;

	//Fetch Single User
	public User getSingleUser(@RequestParam String  username);
	
	
	//Fetch Single User
		public List<User> getAllUser();
	//Delete User
	
	public void deleteUser(String username);
	
	//Update User
	
	public User updateUser(User user);
}
