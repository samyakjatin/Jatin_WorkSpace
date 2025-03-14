package com.Durgesh.Durgesh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Durgesh.Durgesh.entities.Course;
import com.Durgesh.Durgesh.services.CourseService;

@CrossOrigin("*")
@RestController //entry point ---taking order
public class MyController {

	@Autowired //this will create a object of the class CourseServiceImpl and inject it into the courseservice
	public CourseService courseservice;
	
	@GetMapping("/home")
	public String home() {
		return "this is home page";
	}
	
	@GetMapping("/courses")
	//will return the list of type Course
	public List<Course> getCourses()
	{
		return this.courseservice.getCourses();
		
	}
	
	@GetMapping("/courses/{courseId}")
	public Course getCourse(@PathVariable String courseId) { //Retrun type is Course
		return this.courseservice.getCourse(Long.parseLong(courseId));
	}
	
	@PostMapping("/courses")//@PostMapping("path=/courses",consumes="application.json)
	public Course addCourse(@RequestBody Course course) {
		return this.courseservice.addCourse(course);
	}
	
	@PutMapping("/courses")
	public Course updateCourse(@RequestBody Course course) {
		return this.courseservice.updateCourse(course);
	}
	@DeleteMapping("courses/{courseId}")
		public ResponseEntity<HttpStatus>deleteCourse(@PathVariable String courseId){
			try {
				this.courseservice.deleteCourse(Long.parseLong(courseId));
				return new ResponseEntity<>(HttpStatus.OK);
			}catch (Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
	}
	
	

