package com.EmployeeLog.Display.model

import org.springframework.data.mongodb.core.mapping.Document

@Document
class WorkLog {
	private String timeSpent
	private String description
	
	public WorkLog() {
		super();
	}
	public WorkLog(String timeSpent, String description) {
		super();
		this.timeSpent = timeSpent;
		this.description = description;
	}
	public String getTimeSpent() {
		return timeSpent;
	}
	public void setTimeSpent(String timeSpent) {
		this.timeSpent = timeSpent;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
}

