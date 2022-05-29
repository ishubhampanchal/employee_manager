package com.Crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Crud.model.Employee;

public interface Repository extends JpaRepository<Employee, Integer>{
	

}
