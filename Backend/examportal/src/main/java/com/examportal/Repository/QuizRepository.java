package com.examportal.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examportal.Entity.Category;
import com.examportal.Entity.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Long>{

	
	
	public List<Quiz>  findBycategory(Category category);
	
	public List<Quiz> findByActive(Boolean active);
	public List<Quiz> findByCategoryAndActive(Category category,Boolean active);
}
