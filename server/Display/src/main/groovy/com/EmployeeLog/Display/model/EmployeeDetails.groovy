package com.EmployeeLog.Display.model

import org.springframework.data.mongodb.core.mapping.Document

@Document
class EmployeeDetails {
	private String name;
	private String project;
	private String description;
	private String timeSpent;
	
	
	
	public EmployeeDetails() {
		super();
	}
	public EmployeeDetails(String name, String project, String description, String timeSpent) {
		super();
		this.name = name;
		this.project = project;
		this.description = description;
		this.timeSpent = timeSpent;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getProject() {
		return project;
	}
	public void setProject(String project) {
		this.project = project;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getTimeSpent() {
		return timeSpent;
	}
	public void setTimeSpent(String timeSpent) {
		this.timeSpent = timeSpent;
	}
	
	
}
