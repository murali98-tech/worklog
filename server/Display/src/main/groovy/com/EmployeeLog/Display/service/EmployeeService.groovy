package com.EmployeeLog.Display.service

import java.security.PrivateKey

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

import com.EmployeeLog.Display.model.EmployeeDetails
import com.EmployeeLog.Display.model.EmployeeWorkLog
import com.EmployeeLog.Display.repository.EmployeeRepository

@Service
class EmployeeService {
	@Autowired
	private EmployeeRepository repository;
	
	
	 def getAllLog() {
		 repository.findAll();
	 }
 }
