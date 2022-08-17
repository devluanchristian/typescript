"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseServices {
    execute({ duration = 8, educator, name }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseServices();
