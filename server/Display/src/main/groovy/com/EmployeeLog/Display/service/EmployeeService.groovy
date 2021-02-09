package com.EmployeeLog.Display.service





import org.slf4j.Logger
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
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	 def getAllLog() {
		 logger.info('in EmployeeService')
		 logger.debug('in getAllLog')
		 repository.findAll();
	 }
 }
