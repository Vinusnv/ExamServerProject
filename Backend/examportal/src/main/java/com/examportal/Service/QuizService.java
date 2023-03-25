package com.examportal.Service;

import java.util.List;
import java.util.Set;

import com.examportal.Entity.Category;
import com.examportal.Entity.Quiz;

public interface QuizService {

	public Quiz createQuiz(Quiz quiz);

	public Quiz updateQuiz(Quiz quiz);

	public Quiz singleQuiz(Long qid);

	public Set<Quiz> allQuiz();

	public void deleteQuiz(Long qid);
	
	public List<Quiz>  getqizesofcategory(Category category);

	
	 public List<Quiz> getActivequizes();
	 
	 public List<Quiz> getActiveQuizesofcategory(Category category);
}
