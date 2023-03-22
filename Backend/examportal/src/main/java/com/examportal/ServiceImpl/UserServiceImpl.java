package com.examportal.ServiceImpl;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examportal.Entity.User;
import com.examportal.Entity.UserRole;
import com.examportal.Repository.RoleRepo;
import com.examportal.Repository.UserRepository;
import com.examportal.Service.UserService;

import helper.UserFoundException;


@Service
public class UserServiceImpl implements UserService{
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepo roleRepo;

	
	//Creating User
	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {
	
		
		User local=this.userRepository.findByUsername(user.getUsername());
		
		
		if(local!=null)
		{
			System.out.println("User Already Exists");
			
			throw new UserFoundException();
		}
		else
		{
			
			for(UserRole ur:userRoles)
			{
				roleRepo.save(ur.getRole());
			}
			user.getUserrole().addAll(userRoles);
			local=this.userRepository.save(user);
		}
		return local;
	}

//fetching single user
	@Override
	public User getSingleUser(String username) {
		
	
		return this.userRepository.findByUsername(username);
	}

	@Override
	public void deleteUser(String username) {
		
		
		User deleteuser=this.userRepository.findByUsername(username);
		this.userRepository.delete(deleteuser);
		
	}

	
	//Updating the exsisting  user
	@Override
	public User updateUser(User user) {
		
		this.userRepository.save(user);
		
		return user;
	}
//Fetching all user
	@Override
	public List<User> getAllUser() {
		List<User> alluser=this.userRepository.findAll();
		return alluser;
	}

}
