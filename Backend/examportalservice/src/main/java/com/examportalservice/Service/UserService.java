package com.examportalservice.Service;

import com.examportalservice.Entity.User;
import com.examportalservice.Payload.LoginMessage;
import com.examportalservice.Entity.Login;



public interface UserService {
	
	    //Creating the User
		public User createUser(User user) throws Exception ;
		//Fetch Single User
		public User getSingleUser(String  username);
		//Delete User
		public void deleteUser(String username);
		//Update User
		public User updateUser(User user,String username);
		
		//Login Employee
		
		public LoginMessage loginMessage(Login Login);
		
		//custom method to check
		public User finduser(String username,String password);

}
