package com.examportal.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examportal.Entity.Role;

public interface RoleRepo extends JpaRepository<Role, Long> {

}
