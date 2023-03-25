package com.examportal.Controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.annotation.RequestScope;

import com.examportal.Entity.Category;
import com.examportal.Entity.Quiz;
import com.examportal.ServiceImpl.QuizServiceImpl;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizController {

	@Autowired
	private QuizServiceImpl service;

	// creating quiz

	@PostMapping("/create")
	public Quiz createQuiz(@RequestBody Quiz quiz) {

		return this.service.createQuiz(quiz);
	}

	// updating quiz
	@PutMapping("/update")
	public Quiz updateQuiz(@RequestBody Quiz quiz) {

		return this.service.createQuiz(quiz);
	}

	// Fetching single quiz
	@GetMapping("/single")
	public Quiz singleQuiz(@RequestParam("qid") Long qid) {

		return this.service.singleQuiz(qid);
	}

	// Fetching all quiz
	@GetMapping("/all")
	public Set<Quiz> allQuiz() {

		return this.service.allQuiz();
	}
	
	
	//Fetching Quizes Based on the category
	
	@GetMapping("/category")
	public List<Quiz> allQuizoncategory(@RequestParam("cid")Long cid)
	{   
		
		Category category=new Category();
		category.setCId(cid);
		return this.service.getqizesofcategory(category);
	}

	// Deleting Quiz
	@DeleteMapping("/delete")
	public void deleteQuiz(@RequestParam("qid") Long qid) {

		this.service.deleteQuiz(qid);

	}

}
