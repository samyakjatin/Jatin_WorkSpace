package com.Durgesh.Durgesh.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Durgesh.Durgesh.entities.Course;

public interface CourseDao extends JpaRepository<Course , Long> {

	
}
