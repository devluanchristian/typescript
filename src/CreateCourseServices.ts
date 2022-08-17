interface Course {
  name: string;
  duration?: number;//opcional
  educator: string;
}

class CreateCourseServices {
  execute({duration = 8, educator, name}:Course) {
    console.log(name, duration, educator);
  }
}

export default new CreateCourseServices();
