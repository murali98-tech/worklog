package com.worklog.EmployeeLog.controller



import org.slf4j.Logger
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.cloud.context.config.annotation.RefreshScope
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
@RefreshScope
class EmployeeLogController {
	@Autowired
	private EmployeeService service;
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	   @ResponseBody
	   @PostMapping("/RegisterLog")
	   def setEmployeeDetails(@RequestBody EmployeeDetails employeedetails) {
		   logger.info('in EmployeeController')
		   logger.info('in setEmployeeDetails')
		   WorkLog work=new WorkLog(employeedetails.getTimeSpent(),employeedetails.getDescription())
		   ArrayList <WorkLog> list=new ArrayList() ;
		   list.add(work)
		
		   EmployeeWorkLog employeeWorkLog= new EmployeeWorkLog();
		   employeeWorkLog.setName(employeedetails.getName());
		   employeeWorkLog.setProject(employeedetails.getProject());
		   employeeWorkLog.setWorkLog(list);
		
		  EmployeeWorkLog workLog= service.findEmployee(employeedetails);
		   
		   if( workLog) {
			   logger.info('worklog present')
			   workLog.getWorkLog().add(work);
			   service.addLog(workLog);
			   
		   }
		   else {
			   logger.info('worklog not present')
			   service.addLog(employeeWorkLog);
		   }
		 
	   }
	  
	   @ResponseBody
	   @GetMapping("/getDetails")
	   def getEmployeeDetails() {
		   service.getAllLog();
		   
	   }
	   
	
}
