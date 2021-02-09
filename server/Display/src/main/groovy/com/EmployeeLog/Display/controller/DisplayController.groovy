package com.EmployeeLog.Display.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ResponseBody

import com.EmployeeLog.Display.service.EmployeeService

@Controller
@CrossOrigin(origins = "*")
class DisplayController {
	@Autowired
	private EmployeeService service;
	@ResponseBody
	@GetMapping("/")
	def getg() {
		'hello'
	}
	
	@ResponseBody
	@GetMapping("/getDetails")
	def getEmployeeDetails() {
		service.getAllLog();
		
	}
	
}
