import { studentModel } from './student.model';

const createStudentIntoDB = async (student: string) => {
  const result = await studentModel.create(student);
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
};
