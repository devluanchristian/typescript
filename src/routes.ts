import { Request, Response } from "express";
import CreateCourseServices from "./CreateCourseServices";

export function createCourse(request: Request, response: Response) {
  CreateCourseServices.execute({
    name: "NodeJS",
    duration: 10,
    educator: "Luan",
  });

  CreateCourseServices.execute({
    name: "ReactJS",
    educator: "Carlos",
  });

  return response.send();
}
