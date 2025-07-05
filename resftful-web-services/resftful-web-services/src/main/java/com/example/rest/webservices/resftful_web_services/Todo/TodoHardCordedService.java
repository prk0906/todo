package com.example.rest.webservices.resftful_web_services.Todo;

import java.util.*;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCordedService {

	private static List<Todo> todos = new ArrayList<Todo>();
	private static long idcounter = 0;
	static {
		todos.add(new Todo(++idcounter, "Praveen", "Java", new Date(), false));
		todos.add(new Todo(++idcounter, "Praveen", "SQL2", new Date(), false));
		todos.add(new Todo(++idcounter, "Praveen", "ANGULAR", new Date(), false));
	}
	
	public List<Todo> findAll(){
		return todos;
	}
	
	public Todo save(Todo todo) {
		if(todo.getId()==-1 || todo.getId()==0) {
			todo.setId(++idcounter);
			todos.add(todo);
		}else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if(todo==null)
			return null;
		if(todos.remove(todo)) 
		{
			return todo;
		}
		return null;
	}

	public Todo findById(long id) {
		for(Todo todo : todos) {
			if(todo.getId()==id) {
				return todo;
			}
		}
		return null;
	}
	
}
