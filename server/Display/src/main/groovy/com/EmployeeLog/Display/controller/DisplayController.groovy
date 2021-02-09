package com.EmployeeLog.Display.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.cloud.context.config.annotation.RefreshScope
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.slf4j.Logger
import org.slf4j.LoggerFactory

import com.EmployeeLog.Display.service.EmployeeService

@Controller
@CrossOrigin(origins = "*")
@RefreshScope
class DisplayController {
	@Autowired
	private EmployeeService service;
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	@ResponseBody
	@GetMapping("/")
	def getg() {
		'hello'
	}
	
	@ResponseBody
	@GetMapping("/getDetails")
	def getEmployeeDetails() {
		logger.info("in displayController")
		logger.debug('in getEmployeeDetails')
		service.getAllLog();
		
		
	}
	
}
