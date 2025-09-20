import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Course from '../models/course.model';
import Enrollment from '../models/enrollment.model';

// @desc    Get all courses (public info)
// @route   GET /api/courses
// @access  Public
const getAllCourses = asyncHandler(async (req: Request, res: Response) => {
  const courses = await Course.find({})
    .select('-modules') // Exclude modules and lessons from this public view
    .populate('instructor', 'name'); // Populate instructor's name

  res.status(200).json(courses);
});

// @desc    Get a single course by ID (public info)
// @route   GET /api/courses/:courseId
// @access  Public
const getCourseById = asyncHandler(async (req: Request, res: Response) => {
  const course = await Course.findById(req.params.courseId)
    .select('-modules')
    .populate('instructor', 'name');

  if (course) {
    res.status(200).json(course);
  } else {
    res.status(404);
    throw new Error('Course not found');
  }
});

// @desc    Get course content (for enrolled students)
// @route   GET /api/courses/:courseId/content
// @access  Private
const getCourseContent = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.user?._id;
  const { courseId } = req.params;

  // Check if the user is enrolled in the course
  const enrollment = await Enrollment.findOne({
    student: userId,
    course: courseId,
  });

  if (!enrollment && req.user?.role !== 'admin') {
    res.status(403);
    throw new Error('You are not enrolled in this course');
  }

  // If enrolled, fetch the full course content
  const course = await Course.findById(courseId).populate('instructor', 'name');

  if (course) {
    res.status(200).json(course);
  } else {
    res.status(404);
    throw new Error('Course not found');
  }
});

export { getAllCourses, getCourseById, getCourseContent };
