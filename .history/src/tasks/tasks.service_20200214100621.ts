import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [
'1'
  ];

  getAllTaskas() {
    return this.tasks;
  }
}
