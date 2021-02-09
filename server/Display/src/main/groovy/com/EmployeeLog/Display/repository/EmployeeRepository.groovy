package com.EmployeeLog.Display.repository

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Query
import org.springframework.stereotype.Repository

import com.EmployeeLog.Display.model.EmployeeDetails
import com.EmployeeLog.Display.model.EmployeeWorkLog
@Repository
interface EmployeeRepository extends MongoRepository<EmployeeWorkLog,String> {

	
	
}
