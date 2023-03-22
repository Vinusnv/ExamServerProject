package com.examportal.Service;

import java.util.Set;

import com.examportal.Entity.Category;

public interface CategoryService {

	public Category createCategory(Category category);
	
	
	public Category updateCategory(Category category);
	
	public Category singleCategory(Long cid);
	
	public Set<Category> allCategory();
	
	
	public void deleteCategory(Long cid);
	
	public void deleteCategorybytitle(String categorytitle);
	
	
	
	

}
