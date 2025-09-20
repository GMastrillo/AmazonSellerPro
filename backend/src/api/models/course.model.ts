import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user.model';

export interface ILesson extends Document {
  title: string;
  videoUrl: string;
  durationInMinutes: number;
}

export interface IModule extends Document {
  title: string;
  lessons: ILesson[];
}

export interface ICourse extends Document {
  title: string;
  description: string;
  price: number;
  instructor: IUser['_id'];
  modules: IModule[];
}

const LessonSchema: Schema = new Schema({
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },
  durationInMinutes: { type: Number, required: true },
});

const ModuleSchema: Schema = new Schema({
  title: { type: String, required: true },
  lessons: [LessonSchema],
});

const CourseSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  instructor: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  modules: [ModuleSchema],
}, {
  timestamps: true,
});

const Course = mongoose.model<ICourse>('Course', CourseSchema);
export default Course;
