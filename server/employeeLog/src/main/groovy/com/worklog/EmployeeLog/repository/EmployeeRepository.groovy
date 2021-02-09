package com.worklog.EmployeeLog.repository

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Query
import org.springframework.stereotype.Repository

import com.worklog.EmployeeLog.model.EmployeeDetails
import com.worklog.EmployeeLog.model.EmployeeWorkLog
@Repository
interface EmployeeRepository extends MongoRepository<EmployeeWorkLog,String> {
	@Query("{ 'name' : ?0 ,'project': ?1}")
	EmployeeWorkLog findUserByName(String name, String project)
	
	
}
