package com.examportal.Controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.examportal.Entity.Role;
import com.examportal.Entity.User;
import com.examportal.Entity.UserRole;
import com.examportal.Service.UserService;

@RestController
@RequestMapping("/api/examserver/")
@CrossOrigin("*")
public class UserController {
	
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	private UserService userService;
	
	//Creating user
	
	@PostMapping("/create")
	public User creteUser(@RequestBody User user) throws Exception
	{
		
		//encoding password with bcryptpasswordencoder
		
		user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
	    user.setProfile("default.png");
		Set<UserRole>  roles=new HashSet<>();
		
		
		Role role=new Role();
		role.setRoleId(45L);
		role.setRoleName("ADMIN");
		
		UserRole userrole=new UserRole();
		userrole.setRole(role);
		userrole.setUser(user);
		roles.add(userrole);
		
	   return this.userService.createUser(user, roles);
		
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
	public User updateUser(@RequestBody User user)
	{
		
		return this.userService.updateUser(user);
	}
	//fetching all user
	@GetMapping("/alluser")
	public List<User> getalluser()
	{
		return this.userService.getAllUser();
	}
}
