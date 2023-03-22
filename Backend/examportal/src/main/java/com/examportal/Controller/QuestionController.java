package com.examportal.Controller;

import java.util.ArrayList;
import java.util.Collections;
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

import com.examportal.Entity.Question;
import com.examportal.Entity.Quiz;
import com.examportal.Service.QuizService;
import com.examportal.ServiceImpl.QuestionServiceImpl;



@RestController()
@RequestMapping("/question")
@CrossOrigin("*")
public class QuestionController {

	@Autowired
	private QuestionServiceImpl service;
	
	@Autowired
	private QuizService quizService;

//Creating question
	@PostMapping("/create")
	public Question createQuestion(@RequestBody Question question) {

		return this.service.createQuestion(question);
	}

//updating question
	@PutMapping("/update")
	public Question updateQuestion(@RequestBody Question question) {
		return this.service.updateQuestion(question);
	}

//Fetching single question
	@GetMapping("/single")
	public Question singleQuestion(@RequestParam("quesid") Long quesid) {

		return this.service.singleQuestion(quesid);
	}

//Fetching all question
	@GetMapping("/all")
	public Set<Question> allQuestion() {

		return this.service.allQuestion();
	}

//Deleting question
	@DeleteMapping("/delete")
	public void deleteQuestion(@RequestParam("quesid") Long quesid) {

		this.service.deleteQuestion(quesid);

	}

//fetching questions from quiz
	@GetMapping("/quiz")
	public List<?> getQuestionsOfQuiz(@RequestParam("qid") Long qid) {

		Quiz quiz =this.quizService.singleQuiz(qid);
		
		Set<Question> questionsofquiz=this.service.getQuestionsOfQuiz(quiz);
		List list=new ArrayList<>(questionsofquiz);
		
		if(list.size()>Integer.parseInt(quiz.getNumberofQuestions()))
		{
			list=list.subList(0, Integer.parseInt(quiz.getNumberofQuestions()+1));
		}
		
		
	   Collections.shuffle(list);
		return list;
	}
	
	
	//fetching questions from quiz
		@GetMapping("/quiz/all")
		public List<?> getQuestionsOfQuizAdmin(@RequestParam("qid") Long qid) {

			Quiz quiz =this.quizService.singleQuiz(qid);
			
			Set<Question> questionsofquiz=this.service.getQuestionsOfQuiz(quiz);
			List list=new ArrayList<>(questionsofquiz);
			return list;
		}


}
