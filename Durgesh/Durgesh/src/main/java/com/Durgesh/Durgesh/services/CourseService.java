package com.Durgesh.Durgesh.services;

import java.util.List;

import com.Durgesh.Durgesh.entities.Course;

public interface CourseService {

	//This will use RuntimePolymorphism
	public List<Course> getCourses();
	public Course getCourse(long courseId);
		
	public Course addCourse(Course course);
	public Course updateCourse(Course course);
	public void deleteCourse(long parselong);
}
