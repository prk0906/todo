package com.example.rest.webservices.resftful_web_services.Todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.web.util.UriComponents;

import com.example.rest.webservices.resftful_web_services.Todo.Todo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoResource {

	@Autowired
	private TodoHardCordedService service;
	
	@GetMapping(path="/users/{username}/todos")  
	public List<Todo> getAllTodos(@PathVariable String username){
		return service.findAll();  
	} 
	
	@GetMapping(path="/users/{username}/todos/{id}")  
	public Todo getTodo(@PathVariable String username,@PathVariable long id){
		return service.findById(id); 
	} 
	
	@DeleteMapping(path="/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable String username,@PathVariable  long id) {
		Todo todo = service.deleteById(id);
		if(todo!=null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();	
	}
	
	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username,@PathVariable long id
			,@RequestBody Todo todo){
		todo.setId(id);
		Todo todoUpdated = service.save(todo);
		return new ResponseEntity<Todo>(todo,HttpStatus.OK);
		
	}
	
	@PostMapping("/users/{username}/todos")
	public ResponseEntity<Void> createTodo(@PathVariable String username
			,@RequestBody Todo todo){
		Todo createdTodo = service.save(todo);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").
				buildAndExpand(createdTodo.getId()).toUri();
			
		return ResponseEntity.created(uri).build();
		
	}
}
