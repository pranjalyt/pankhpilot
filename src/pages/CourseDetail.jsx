import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCourses } from '../context/CourseContext';
import { useAuth } from '../context/AuthContext';
import { Clock, BookOpen, BarChart, CheckCircle, PlayCircle, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const CourseDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { courses, enroll, enrolledCourses } = useCourses();
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState('overview');

    const course = courses.find(c => c.id === id);
    const isEnrolled = enrolledCourses.some(c => c.id === id);

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-brand-navy mb-4">Course Not Found</h2>
                    <Link to="/courses" className="text-brand-orange hover:underline">Back to Courses</Link>
                </div>
            </div>
        );
    }

    const handleEnroll = () => {
        if (!user) {
            // Redirect to login with return url logic (simplified here)
            navigate('/login', { state: { from: `/courses/${id}` } });
            return;
        }

        if (isEnrolled) {
            navigate('/dashboard');
            return;
        }

        // Simulate enrollment
        const success = enroll(id);
        if (success) {
            // Show success modal or toast (simplified)
            alert('Enrollment Successful! Redirecting to Dashboard...');
            navigate('/dashboard');
        }
    };

    return (
        <div className="min-h-screen bg-brand-light pb-20">
            {/* Hero Header */}
            <div className="bg-brand-navy text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-orange/10 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="flex items-center space-x-4 mb-6">
                            <span className="px-3 py-1 bg-brand-orange text-white text-xs font-bold rounded-full uppercase tracking-wider">
                                {course.level}
                            </span>
                            <span className="flex items-center text-gray-300 text-sm">
                                <Clock className="w-4 h-4 mr-1" /> {course.duration}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.title}</h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            {course.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={handleEnroll}
                                className="px-8 py-4 bg-brand-orange text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-brand-accent transition-all transform hover:-translate-y-1"
                            >
                                {isEnrolled ? 'Go to Dashboard' : `Enroll Now - ${course.price}`}
                            </button>
                            {!isEnrolled && (
                                <Link
                                    to={`/courses/${id}/watch`}
                                    className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all flex items-center"
                                >
                                    <PlayCircle className="w-5 h-5 mr-2" />
                                    Watch Demo
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Tabs */}
                        <div className="bg-white rounded-xl shadow-sm p-2 flex space-x-2">
                            {['overview', 'syllabus', 'reviews'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex-1 py-3 text-sm font-bold rounded-lg capitalize transition-all ${activeTab === tab
                                            ? 'bg-brand-navy text-white shadow-md'
                                            : 'text-gray-500 hover:bg-gray-50'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="bg-white rounded-2xl shadow-sm p-8 min-h-[400px]">
                            {activeTab === 'overview' && (
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-brand-navy mb-4">What you'll learn</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {course.subjects.map((subject, idx) => (
                                                <div key={idx} className="flex items-start space-x-3">
                                                    <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                                                    <span className="text-gray-700">{subject}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-brand-navy mb-4">Description</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            This comprehensive course is designed to provide you with in-depth knowledge and practical understanding required for the subject.
                                            Whether you are a beginner or looking to refresh your concepts, our expert instructors have curated the content to meet DGCA standards.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'syllabus' && (
                                <div className="space-y-6">
                                    {course.syllabus.map((module, idx) => (
                                        <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                                            <div className="bg-gray-50 p-4 border-b border-gray-200 flex justify-between items-center">
                                                <h4 className="font-bold text-brand-navy">Module {idx + 1}: {module.title}</h4>
                                                <span className="text-xs text-gray-500">{module.lessons.length} Lessons</span>
                                            </div>
                                            <div className="divide-y divide-gray-100">
                                                {module.lessons.map((lesson, lIdx) => (
                                                    <div key={lIdx} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                                        <div className="flex items-center space-x-3">
                                                            <PlayCircle className="w-4 h-4 text-gray-400" />
                                                            <span className="text-sm text-gray-700">{lesson}</span>
                                                        </div>
                                                        {isEnrolled ? (
                                                            <span className="text-xs text-brand-orange font-medium">Start</span>
                                                        ) : (
                                                            <Lock className="w-4 h-4 text-gray-300" />
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeTab === 'reviews' && (
                                <div className="text-center py-12">
                                    <p className="text-gray-500">No reviews yet. Be the first to review!</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                            <h3 className="font-bold text-brand-navy mb-4">Course Features</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600 flex items-center"><Clock className="w-4 h-4 mr-2" /> Duration</span>
                                    <span className="font-semibold text-brand-navy">{course.duration}</span>
                                </li>
                                <li className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600 flex items-center"><BookOpen className="w-4 h-4 mr-2" /> Lectures</span>
                                    <span className="font-semibold text-brand-navy">{course.syllabus.reduce((acc, m) => acc + m.lessons.length, 0)}</span>
                                </li>
                                <li className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600 flex items-center"><BarChart className="w-4 h-4 mr-2" /> Level</span>
                                    <span className="font-semibold text-brand-navy">{course.level}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-brand-charcoal rounded-2xl p-6 text-white">
                            <h3 className="font-bold mb-2">Need Help?</h3>
                            <p className="text-sm text-gray-400 mb-4">
                                Contact our support team for any queries regarding this course.
                            </p>
                            <Link to="/contact" className="block w-full py-3 bg-brand-orange text-center rounded-lg font-bold hover:bg-brand-accent transition-colors">
                                Contact Us
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
