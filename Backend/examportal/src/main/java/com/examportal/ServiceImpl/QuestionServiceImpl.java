package com.examportal.ServiceImpl;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examportal.Entity.Question;
import com.examportal.Entity.Quiz;
import com.examportal.Repository.QuestionRepository;
import com.examportal.Repository.QuizRepository;
import com.examportal.Service.QuestionService;

@Service
public class QuestionServiceImpl implements QuestionService {

	@Autowired
	private QuestionRepository repo;
	
	

//Creating question
	@Override
	public Question createQuestion(Question question) {

		return this.repo.save(question);
	}

//updating question
	@Override
	public Question updateQuestion(Question question) {
		return this.repo.save(question);
	}

//Fetching single question
	@Override
	public Question singleQuestion(Long quesid) {
	
		return this.repo.findById(quesid).get();
	}

//Fetching all question
	@Override
	public Set<Question> allQuestion() {

		Set<Question> questions = new HashSet<>(this.repo.findAll());
		return questions;
	}

//Deleting question
	@Override
	public void deleteQuestion(Long quesid) {

		Question question = this.repo.findById(quesid).get();
		this.repo.delete(question);

	}

//fetching questions from quiz
	@Override
	public Set<Question> getQuestionsOfQuiz(Quiz quiz) {

		return this.repo.findByQuiz(quiz);
	}

}
