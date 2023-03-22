package com.examportal.Controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examportal.Config.JWTUtils;
import com.examportal.Entity.JWTRequest;
import com.examportal.Entity.JWTResponse;
import com.examportal.Entity.User;
import com.examportal.ServiceImpl.UserDetailServiceImpl;

import helper.UserNotFoundException;

@RestController
@RequestMapping("/api/examserver")
@CrossOrigin("*")
public class AuthenticationController {
	@Autowired
	private UserDetailServiceImpl userDetailServiceImpl;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JWTUtils jwtUtils;
	
	
	//Generate token
	@PostMapping("/generate-token")
	public ResponseEntity<?> generateToken(@RequestBody JWTRequest jwtRequest)throws Exception
	{
		
		try {
			
			authenticate(jwtRequest.getUsername(), jwtRequest.getPassword());
			
		}
		
		catch (UserNotFoundException e) {
			
			e.printStackTrace();
			throw new Exception("User Not Found");
			
		}
		
		//authenticate
	UserDetails userDetails=this.userDetailServiceImpl.loadUserByUsername(jwtRequest.getUsername());
		
		String token=this.jwtUtils.generateToken(userDetails);
		
		return ResponseEntity.ok(new JWTResponse(token));
			
	}
	
	
	
	
	
	private void authenticate(String username,String password) throws Exception
	{
		
		try {
			
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
			
		} catch (DisabledException e) {
			
			
			throw new Exception("User Disabled");
		}
		catch (BadCredentialsException e) {
			throw new Exception("Invalid Credentials" + e.getMessage());
		}
		
	}
	//Returns the details of current user
	@GetMapping("/current-user")
	public User getCurrentUser(Principal principal)
	{
		return (User)this.userDetailServiceImpl.loadUserByUsername(principal.getName());
	}

}
