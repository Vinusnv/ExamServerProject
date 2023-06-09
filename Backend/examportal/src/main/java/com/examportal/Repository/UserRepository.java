package com.examportal.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examportal.Entity.User;

public interface UserRepository extends JpaRepository<User, Long>  {

	
	public  User findByUsername(String username);
}
