package com.TaskApp.Task.service;

import com.TaskApp.Task.model.Task;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Arrays;

@Service
public class TaskService {

    public List<Task> getTasks() {

        return Arrays.asList(
                new Task(1, "Learn Angular"),
                new Task(2, "Understand Angular Project Structure"),
                new Task(3, "Interpolation in Angular"),
                new Task(4, "Angular CLI"),
                new Task(5,"Components in Angular"),
                new Task(6,"Events in Angular"),
                new Task(7,"Data types in Angular"),
                new Task(8,"Property Binding in Angular")
        );
    }
}
