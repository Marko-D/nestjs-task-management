import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor (
    private taskService: TasksService
  ){}

  @Get()
  getAllTasks() {
    return this.taskService.getAllTaskas();
  }

  @Post()
  createTask(@Body() body) {
    console.log('body', body)
  }
} 