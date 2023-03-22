package com.examportal.Repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examportal.Entity.Question;
import com.examportal.Entity.Quiz;

public interface QuestionRepository extends JpaRepository<Question, Long> {
	
	
	public Set<Question> findByQuiz(Quiz quiz);

}
