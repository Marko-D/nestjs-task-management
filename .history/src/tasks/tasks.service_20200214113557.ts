import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import * as uuid from 'uuid/v1'
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTaskas(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    let task = this.tasks.find(task => task.id === id);
    console.log('getTaskById', task);
    return task;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN
    }

    this.tasks.push(task);
    return task;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    console.log('updateTaskStatus', task);
    task['status'] = status;
    return task;
  }

}
