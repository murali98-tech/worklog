package com.worklog.EmployeeLog.controller



import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.ResponseBody

import com.worklog.EmployeeLog.model.EmployeeDetails
import com.worklog.EmployeeLog.model.EmployeeWorkLog
import com.worklog.EmployeeLog.model.WorkLog
import com.worklog.EmployeeLog.service.EmployeeService
@CrossOrigin(origins="*")
@Controller
class EmployeeLogController {
	@Autowired
	private EmployeeService service;
	   @ResponseBody
	   @PostMapping("/RegisterLog")
	   def setEmployeeDetails(@RequestBody EmployeeDetails employeedetails) {
		   WorkLog work=new WorkLog(employeedetails.getTimeSpent(),employeedetails.getDescription())
		   ArrayList <WorkLog> list=new ArrayList() ;
		   list.add(work)
		   println(list.get(0).getDescription())
		   EmployeeWorkLog employeeWorkLog= new EmployeeWorkLog();
		   employeeWorkLog.setName(employeedetails.getName());
		   employeeWorkLog.setProject(employeedetails.getProject());
		   employeeWorkLog.setWorkLog(list);
		
		  EmployeeWorkLog workLog= service.findEmployee(employeedetails);
		   
		   if( workLog) {
			   workLog.getWorkLog().add(work);
			   service.addLog(workLog);
			   
		   }
		   else {
			   service.addLog(employeeWorkLog);
		   }
		 
	   }
	  
	
	
}
