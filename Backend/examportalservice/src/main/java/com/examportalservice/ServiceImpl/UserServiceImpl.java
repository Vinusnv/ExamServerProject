package com.examportalservice.ServiceImpl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import com.examportalservice.Entity.Login;
import com.examportalservice.Entity.User;
import com.examportalservice.Payload.LoginMessage;
import com.examportalservice.Repository.UserRepository;
import com.examportalservice.Service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

//Creating User
	
       
	public User createUser(User user) throws Exception {
		
		User checkuser=this.userRepository.findByUsername(user.getUsername());
		
		User saveduser=null;
		
		if(checkuser!=null)
		{
			System.out.println("User Already Found");
			
			throw new Exception("User Already Found");
		}
		else {
			saveduser=this.userRepository.save(user);
			
		}
	
		return saveduser;
	}

//fetching single user
	@Override
	public User getSingleUser(String username) {

		return this.userRepository.findByUsername(username);
	}

	@Override
	public void deleteUser(String username) {

		User deleteuser = this.userRepository.findByUsername(username);
		this.userRepository.delete(deleteuser);

	}

//Updating the exsisting  user
	@Override
	public User updateUser(User user, String username) {

		User u = this.userRepository.findByUsername(username);

		u.setEmail(user.getEmail());
		u.setFirstname(user.getFirstname());
		u.setLastname(user.getLastname());
		u.setPassword(user.getPassword());
		u.setProfile(user.getProfile());
		u.setUsername(user.getUsername());

		this.userRepository.save(u);

		return u;
	}

	
	//login User
	@Override
	public LoginMessage loginMessage(Login login) {
		
		String msg="";
		User user=userRepository.findByUsername(login.getUsername());
		
		System.out.println(user);
		
		if(user!=null)
		{
			String password=login.getPassword();
			String encodedpassword=user.getPassword();
			Boolean isPwdRight=password.equals(encodedpassword);
			System.out.println(isPwdRight);

			if(isPwdRight)
			{
				User user1=this.userRepository.findOneByUsernameAndPassword(login.getUsername(), login.getPassword());
				if(user1.isEnable())
				{
					return new LoginMessage("Login Successfull",true,user1.getUsername());
				}
				else
				{
					return new LoginMessage("Login UnSuccessfull",false);
				}
			}
			else
			{
				return new LoginMessage("Wrong Password",false);
			}
		}
		else
		{
			 return new LoginMessage("Email Does Not Exists",false);
		}
		
	}

	@Override
	public User finduser(String username, String password) {
		
		User check=this.userRepository.findOneByUsernameAndPassword(username, password);
		return check;
	}

}
