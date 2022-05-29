package com.Crud.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Crud.model.Employee;
import com.Crud.repository.Repository;




@RestController
@CrossOrigin
public class Controller {
	
	@Autowired
	private Repository repository;

	@RequestMapping("/home")
	public String sayHi() {
		return "Hello";
		
	}
	
	
	@GetMapping("/Employee")
	public List<Employee> getEmp() {
		return repository.findAll();
		
	}
	
	@GetMapping("/Employee/{id}")
	public Optional<Employee> getEmpbyid(@PathVariable("id") int id) {
		return repository.findById(id);
		
	}
	
	@PostMapping("/Employee")
	public List<Employee> insertEmp(@RequestBody Employee employee) {
		repository.save(employee);
		return null;	
	
	}
	
	@PutMapping("/Employee/{id}")
	public Employee updateEmp(@PathVariable("id") int id,@RequestBody Employee employee) {
		repository.save(employee);
		return employee;
	
	}
	
	@DeleteMapping("/Employee/{id}")
	public List<Employee> deleteEmpbyid(@PathVariable("id") int id) {
				
	Employee emp=repository.getById(id);
		 repository.delete(emp);
		 return repository.findAll();	
	}


}
