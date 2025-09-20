import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user.model';
import { ICourse } from './course.model';

export interface IEnrollment extends Document {
  student: IUser['_id'];
  course: ICourse['_id'];
  enrolledAt: Date;
}

const EnrollmentSchema: Schema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  enrolledAt: {
    type: Date,
    default: Date.now,
  },
});

// Ensure a student can only enroll in a course once
EnrollmentSchema.index({ student: 1, course: 1 }, { unique: true });

const Enrollment = mongoose.model<IEnrollment>('Enrollment', EnrollmentSchema);
export default Enrollment;
