package com.Durgesh.Durgesh.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Course {
	@Id
  private long id;
  private String title;
  private String descriptionl;
  
@Override
public String toString() {
	return "Course [id=" + id + ", title=" + title + ", descriptionl=" + descriptionl + "]";
}

public long getId() {
	return id;
}

public void setId(long id) {
	this.id = id;
}

public String getTitle() {
	return title;
}

public void setTitle(String title) {
	this.title = title;
}

public String getDescriptionl() {
	return descriptionl;
}

public void setDescriptionl(String descriptionl) {
	this.descriptionl = descriptionl;
}

public Course() {
	super();
	// TODO Auto-generated constructor stub
}

public Course(long id, String title, String descriptionl) {
	super();
	this.id = id;
	this.title = title;
	this.descriptionl = descriptionl;
}
  
  
  
}
