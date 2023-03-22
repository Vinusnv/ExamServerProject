package com.examportal.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examportal.Entity.Category;
@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
	
	
	public Category findByTitle(String title);

}
