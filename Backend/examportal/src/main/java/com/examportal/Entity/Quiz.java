package com.examportal.Entity;


import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "quiz")
public class Quiz {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long qId;
	private String title;
	@Column(length = 5000)
	private String description;
	private String marks;
	private String numberofQuestions;
	private boolean active=false;
	
	
	
	@ManyToOne(fetch = FetchType.EAGER)
	private Category category;
	
	
	@OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY,mappedBy = "quiz")
	@JsonIgnore
	private Set<Question> questions=new HashSet<>();
	
	public Quiz(String title, String description, String marks, String numberofQuestions, boolean active) {
		super();
		this.title = title;
		this.description = description;
		this.marks = marks;
		this.numberofQuestions = numberofQuestions;
		this.active = active;
	}
	
	
	
	
	

}
