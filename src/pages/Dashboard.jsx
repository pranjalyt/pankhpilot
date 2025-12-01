import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCourses } from '../context/CourseContext';
import { PlayCircle, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
    const { user, loading } = useAuth();
    const { enrolledCourses, courses } = useCourses();

    if (loading) return null;
    if (!user) return <Navigate to="/login" />;

    const recommendedCourses = courses.filter(
        c => !enrolledCourses.find(ec => ec.id === c.id)
    ).slice(0, 3);

    return (
        <div className="min-h-screen bg-brand-light pb-20">
            {/* Welcome Header */}
            <div className="bg-brand-navy text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
                    <p className="text-gray-300">Continue your journey to the skies.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">

                {/* Enrolled Courses */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-brand-navy mb-6">My Courses</h2>
                    {enrolledCourses.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {enrolledCourses.map((course) => (
                                <motion.div
                                    key={course.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                                >
                                    <div className="p-6">
                                        <h3 className="font-bold text-brand-navy text-lg mb-2">{course.title}</h3>
                                        <div className="flex items-center text-sm text-gray-500 mb-4">
                                            <Clock className="w-4 h-4 mr-1" />
                                            <span>{course.duration}</span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="mb-4">
                                            <div className="flex justify-between text-xs font-semibold mb-1">
                                                <span className="text-gray-500">Progress</span>
                                                <span className="text-brand-orange">{course.progress || 0}%</span>
                                            </div>
                                            <div className="w-full bg-gray-100 rounded-full h-2">
                                                <div
                                                    className="bg-brand-orange h-2 rounded-full transition-all duration-1000"
                                                    style={{ width: `${course.progress || 0}%` }}
                                                ></div>
                                            </div>
                                        </div>

                                        <Link
                                            to={`/courses/${course.id}/watch`}
                                            className="block w-full py-2 bg-brand-navy text-white text-center rounded-lg font-semibold hover:bg-brand-charcoal transition-colors flex items-center justify-center"
                                        >
                                            <PlayCircle className="w-4 h-4 mr-2" />
                                            Continue Watching
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl p-8 text-center border border-gray-100 shadow-sm">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-700 mb-2">No courses enrolled yet</h3>
                            <p className="text-gray-500 mb-6">Start your training by enrolling in a course.</p>
                            <Link to="/courses" className="inline-block px-6 py-3 bg-brand-orange text-white font-bold rounded-full hover:bg-brand-accent transition-colors">
                                Browse Courses
                            </Link>
                        </div>
                    )}
                </div>

                {/* Recommended */}
                {recommendedCourses.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold text-brand-navy mb-6">Recommended for You</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {recommendedCourses.map((course) => (
                                <div key={course.id} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-brand-navy mb-2">{course.title}</h3>
                                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">{course.description}</p>
                                    <Link
                                        to={`/courses/${course.id}`}
                                        className="text-sm font-semibold text-brand-orange hover:underline"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Dashboard;
