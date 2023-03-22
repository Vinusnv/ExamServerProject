package com.examportal.Service;

import java.util.Set;

import com.examportal.Entity.Question;
import com.examportal.Entity.Quiz;

public interface QuestionService {

	public Question createQuestion(Question question);

	public Question updateQuestion(Question question);

	public Question singleQuestion(Long quesid);

	public Set<Question> allQuestion();

	public void deleteQuestion(Long quesid);
	
	public Set<Question> getQuestionsOfQuiz(Quiz quiz);

}
