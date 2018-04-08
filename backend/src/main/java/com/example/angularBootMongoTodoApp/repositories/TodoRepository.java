package com.example.angularBootMongoTodoApp.repositories;

import com.example.angularBootMongoTodoApp.models.Todo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends MongoRepository<Todo, String> {

}