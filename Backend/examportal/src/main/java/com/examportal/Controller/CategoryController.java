package com.examportal.Controller;

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

import com.examportal.Entity.Category;
import com.examportal.Service.CategoryService;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController {

	@Autowired
	private CategoryService service;

	// Creating Category
	@PostMapping("/create")
	public Category createCategory(@RequestBody Category category) {

		return this.service.createCategory(category);
	}

//Updating category
	@PutMapping("/update")
	public Category updateCategory(@RequestBody Category category) {

		return this.service.updateCategory(category);
	}

//Fetching single user
	@GetMapping("/single")
	public Category singleCategory(@RequestParam("cid") Long cid) {

		return this.service.singleCategory(cid);
	}

//Fetching all users
	@GetMapping("/all")
	public Set<Category> allCategory() {

		return this.service.allCategory();
	}

//Deleting user
	@DeleteMapping("/delete")
	public void deleteCategory(@RequestParam("cid") Long cid) {

		this.service.deleteCategory(cid);
	}
	
	//Deleting category by title
	@DeleteMapping("/deletebytitle")
	public void deleteByTitle(@RequestParam("title") String title)
	{
		this.service.deleteCategorybytitle(title);
	}

}
