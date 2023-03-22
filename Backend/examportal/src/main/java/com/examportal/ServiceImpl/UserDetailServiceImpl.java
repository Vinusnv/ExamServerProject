package com.examportal.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.examportal.Entity.User;
import com.examportal.Repository.UserRepository;


@Service
public class UserDetailServiceImpl implements UserDetailsService {
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		
		User user=this.userRepository.findByUsername(username);
		
		if(user==null)
		{
			System.out.println("User Not Found Exception");
			throw new UsernameNotFoundException("User Not Found Exception");
		}
		
		return user;
	}
    
}
