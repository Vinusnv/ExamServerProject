package com.examportal.ServiceImpl;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examportal.Entity.Category;
import com.examportal.Repository.CategoryRepository;
import com.examportal.Service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;

	// Creating Category
	@Override
	public Category createCategory(Category category) {

		return this.categoryRepository.save(category);
	}

//Updating category
	@Override
	public Category updateCategory(Category category) {

		return this.categoryRepository.save(category);
	}

//Fetching single user
	@Override
	public Category singleCategory(Long cid) {

		return this.categoryRepository.findById(cid).get();
	}

//Fetching all users
	@Override
	public Set<Category> allCategory() {

		Set<Category> categories = new HashSet<>(this.categoryRepository.findAll());
		return categories;
	}

//Deleting user
	@Override
	public void deleteCategory(Long cid) {
		Category category = this.categoryRepository.findById(cid).get();
		this.categoryRepository.delete(category);

	}
//Deleting category by title
	@Override
	public void deleteCategorybytitle(String categorytitle) {
		
	Category category=	this.categoryRepository.findByTitle(categorytitle);
	
	this.categoryRepository.delete(category);
		
	}

}
