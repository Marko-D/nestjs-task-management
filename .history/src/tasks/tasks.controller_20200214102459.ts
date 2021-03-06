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
  createTask(
    @Body('title') title: string,
    @Body('description') description: string
  ) {
    console.log('title', title,'description', description )
  }
} 