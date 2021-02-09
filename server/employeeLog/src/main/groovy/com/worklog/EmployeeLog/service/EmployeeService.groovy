package com.worklog.EmployeeLog.service

import java.security.PrivateKey

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

import com.worklog.EmployeeLog.model.EmployeeDetails
import com.worklog.EmployeeLog.model.EmployeeWorkLog
import com.worklog.EmployeeLog.repository.EmployeeRepository

@Service
class EmployeeService {
	@Autowired
	private EmployeeRepository repository;
	
	def addLog(EmployeeWorkLog details) {
	     repository.save(details)
		
	}
	
	@Transactional
    def findEmployee(EmployeeDetails details) {
		repository.findUserByName(details.getName(),details.getProject())
	}
	
	 def getAllLog() {
		 repository.findAll();
	 }
 }
