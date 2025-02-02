package com.Durgesh.Durgesh.services;

import java.util.ArrayList;
import java.util.List;import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Durgesh.Durgesh.dao.CourseDao;
import com.Durgesh.Durgesh.entities.Course;

@Service //service layer
public class CourseServiceImpl implements CourseService {

	
//	List<Course>list;
	@Autowired
	private CourseDao courseDao;
	
	public CourseServiceImpl() {
		
		//list =new ArrayList<>();
		//list.add(new Course(145,"java Spring Boot","this course is about spring boot"));
	}
	
	@Override
	public List<Course> getCourses() {
		
		return courseDao.findAll();
	}

	@Override
	public Course getCourse(long courseId) {
		
//		Course c=null;
//		for(Course course:list) {
//			if(course.getId()==courseId) {
//				c=course;
//				break;
//			}
		//}
		return courseDao.getOne(courseId);

	}

	@Override
	public Course addCourse(Course course) {
		//list.add(course);
		courseDao.save(course);
		return course;
	}

	@Override
	public Course updateCourse(Course course) {
	 
//		list.forEach(e->{
//			if(e.getId()==course.getId()) {
//				e.setTitle(course.getTitle());
//				e.setDescriptionl(course.getDescriptionl());
//			}
//		}
		
			courseDao.save(course);	
			//	);
		return course;
	}

	@Override
	public void deleteCourse(long parselong) {
		//list=this.list.stream().filter(e->e.getId()!=parselong).collect(Collectors.toList());
		Course entity=courseDao.getOne(parselong);
		courseDao.delete(entity);
	}
	
	

}
