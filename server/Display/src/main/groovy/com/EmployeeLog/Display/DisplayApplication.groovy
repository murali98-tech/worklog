package com.EmployeeLog.Display

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.cloud.netflix.eureka.EnableEurekaClient

@SpringBootApplication
@EnableEurekaClient
class DisplayApplication {

	static void main(String[] args) {
		SpringApplication.run(DisplayApplication, args)
	}

}
