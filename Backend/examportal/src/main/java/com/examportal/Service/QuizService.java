package com.examportal.Service;

import java.util.Set;

import com.examportal.Entity.Quiz;

public interface QuizService {

	public Quiz createQuiz(Quiz quiz);

	public Quiz updateQuiz(Quiz quiz);

	public Quiz singleQuiz(Long qid);

	public Set<Quiz> allQuiz();

	public void deleteQuiz(Long qid);

}
