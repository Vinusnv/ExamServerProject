package com.examportal.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examportal.Entity.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Long>{

}
