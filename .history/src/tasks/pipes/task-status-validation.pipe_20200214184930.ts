import { PipeTransform, ArgumentMetadata } from "@nestjs/common";

export class TaskStatusValidationPipe implements PipeTransform {
  transform(value: any, metaData: ArgumentMetadata) {
    console.log('value', value);
    console.log('metaData', metaData);
    return value;
  }
}