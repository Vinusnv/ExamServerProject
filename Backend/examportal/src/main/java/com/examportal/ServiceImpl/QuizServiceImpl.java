package com.examportal.ServiceImpl;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examportal.Entity.Category;
import com.examportal.Entity.Quiz;
import com.examportal.Repository.QuizRepository;
import com.examportal.Service.QuizService;

@Service
public class QuizServiceImpl implements QuizService {

	@Autowired
	private QuizRepository repo;

	// creating quiz
	@Override
	public Quiz createQuiz(Quiz quiz) {

		return this.repo.save(quiz);
	}

	// updating quiz
	@Override
	public Quiz updateQuiz(Quiz quiz) {

		return this.repo.save(quiz);
	}

	// Fetching single quiz
	@Override
	public Quiz singleQuiz(Long qid) {

		return this.repo.findById(qid).get();
	}

	// Fetching all quiz
	@Override
	public Set<Quiz> allQuiz() {

		Set<Quiz> quizs= new LinkedHashSet<>(this.repo.findAll());
		return quizs;
	}

	// Deleting Quiz
	@Override
	public void deleteQuiz(Long qid) {
		
		this.repo.deleteById(qid);

	}
  //Fetching Quizes of category
	@Override
	public List<Quiz> getqizesofcategory(Category category) {
		
		return this.repo.findBycategory(category);
	}

	
	//fetching  only active quizes
	@Override
	public List<Quiz> getActivequizes()  {
		
		return this.repo.findByActive(true);
	}

	
	//fetching only active quizes of category
	@Override
	public List<Quiz> getActiveQuizesofcategory(Category category) {
		
		return this.repo.findByCategoryAndActive(category, true);
	}

}
