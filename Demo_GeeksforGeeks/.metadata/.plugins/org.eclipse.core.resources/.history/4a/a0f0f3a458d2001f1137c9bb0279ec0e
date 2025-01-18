package com.Registration.Registration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import Model_JPA_Entity.Form;
import Repository_SpringJPA.FormRepository;


@EntityScan("Model_JPA_Entity")
@EnableJpaRepositories("Repository_SpringJPA") // Enable scanning for JPA repositories
@SpringBootApplication(scanBasePackages = {"Controller_SpringMVC_Controller", "Model_JPA_Entity", "Repository_SpringJPA"})


public class RegistrationApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(RegistrationApplication.class, args);
	}
	
	
	@Autowired
	private FormRepository formRepository;

	@Override
	public void run(String... args) throws Exception {
	
		 // This method will execute whenever the application starts for the first time
//	  Form form=new Form();
//	  form.setusername("Balram");
//	  form.setPassword("1234");
//	 form.setconfirmpassword("1234");

	    // Save the form entity to the database
//	    formRepository.save(form);
	}
}
