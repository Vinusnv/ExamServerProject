package com.examportalservice.Contrroller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.examportalservice.Entity.Login;
import com.examportalservice.Entity.User;
import com.examportalservice.Payload.LoginMessage;
import com.examportalservice.Service.UserService;



@RestController
@RequestMapping("/api/examserver/")
@CrossOrigin("*")
public class UserController {
	

	@Autowired
	private UserService userService;
	
	//Creating user
	
	@PostMapping("/create")
	public User creteUser(@RequestBody User user) throws Exception 
	{
		
		
	   return this.userService.createUser(user);
		
	}
	
	//fetching single user
	@GetMapping("/singleuser")
	public User  getSingleUser(@RequestParam("username") String username)
	{
		return this.userService.getSingleUser(username);
	}
	
	@DeleteMapping("/deleteuser")
	public String deleteUser(@RequestParam("username") String username)
	{
		this.userService.deleteUser(username);
		
		return "User with UserName "+ username +" Deleted Successfully";
	}

	
	//Updating the exsisting user
	@PutMapping("/updateuser")
	public User updateUser(@RequestBody User user,@RequestParam("username") String username)
	{
		
		return this.userService.updateUser(user, username);
	}

	
	
	@PostMapping("/login")
	
	public ResponseEntity<?> loginUser(@RequestBody Login login)
	{
		LoginMessage loginMessage=this.userService.loginMessage(login);
	return	ResponseEntity.ok(loginMessage);
	}
	
	@GetMapping("/check")
	public User finduser(@RequestParam("username") String username,@RequestParam("password") String password)
	{
		return this.userService.finduser(username,password);
	}

}
