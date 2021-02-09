package com.worklog.EmployeeLog.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
class EmployeeWorkLog {
	@Id
	private String id;
	private String name 
	private String project
	private ArrayList<WorkLog>workLog=new ArrayList();
	
	public EmployeeWorkLog() {
		super();
	}





	public EmployeeWorkLog(String id, String name, String project, ArrayList<WorkLog> workLog) {
		super();
		this.id = id;
		this.name = name;
		this.project = project;
		this.workLog = workLog;
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


   List<WorkLog> getWorkLog() {
		return workLog;
	}


	public void setWorkLog(List<WorkLog> workLog) {
		this.workLog = workLog;
	}


	
}
