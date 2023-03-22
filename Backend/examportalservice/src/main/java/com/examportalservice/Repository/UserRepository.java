package com.examportalservice.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examportalservice.Entity.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	public  User findByUsername(String username);

	public User findOneByUsernameAndPassword(String username,String password);

}
