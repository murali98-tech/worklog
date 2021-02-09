package com.worklog.EmployeeLog

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.cloud.netflix.eureka.EnableEurekaClient

@SpringBootApplication
@EnableEurekaClient
class EmployeeLogApplication {

	static void main(String[] args) {
		SpringApplication.run(EmployeeLogApplication, args)
	}

}
