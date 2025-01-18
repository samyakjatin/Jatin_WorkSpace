package Controller_SpringMVC_Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import Model_JPA_Entity.Form;
import Repository_SpringJPA.FormRepository;
import jakarta.annotation.PostConstruct;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/Registration")
public class FormController {
	
	@Autowired
	private  FormRepository  formRepository;
	
	 @PostConstruct
	    public void init() {
	        System.out.println("FormController initialized");
	    }

	
	@GetMapping
	public List<Form> getAllData(){
		 System.out.println("API endpoint hit - fetching all data.");
		return formRepository.findAll();
	}
	
	// Build create Form Rest API
	@PostMapping
	public Form createData(@RequestBody Form form) {
		return formRepository.save(form);
	}
	
	  
}
