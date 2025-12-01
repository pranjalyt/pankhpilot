import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, BookOpen, Clock, BarChart } from 'lucide-react';
import { useCourses } from '../context/CourseContext';
import { motion } from 'framer-motion';

const Courses = () => {
    const { courses } = useCourses();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('All');

    const filters = ['All', 'Foundation', 'DGCA', 'Entrance', 'RTR'];

    const filteredCourses = useMemo(() => {
        return courses.filter(course => {
            const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesFilter = selectedFilter === 'All' || course.tags.some(tag => tag.includes(selectedFilter));
            return matchesSearch && matchesFilter;
        });
    }, [courses, searchQuery, selectedFilter]);

    return (
        <div className="min-h-screen bg-brand-light pb-20">
            {/* Header */}
            <div className="bg-brand-navy text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Comprehensive ground training programs designed to help you clear DGCA exams and become a skilled pilot.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                {/* Search and Filter Bar */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
                    <div className="flex flex-col md:flex-row gap-6 items-center justify-between">

                        {/* Search */}
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search courses..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all"
                            />
                        </div>

                        {/* Filters */}
                        <div className="flex flex-wrap gap-2 justify-center">
                            {filters.map(filter => (
                                <button
                                    key={filter}
                                    onClick={() => setSelectedFilter(filter)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedFilter === filter
                                            ? 'bg-brand-orange text-white shadow-md transform scale-105'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col"
                            >
                                <div className="p-6 flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange text-xs font-bold rounded-full uppercase tracking-wider">
                                            {course.level}
                                        </span>
                                        <span className="text-brand-navy font-bold">{course.price}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-brand-navy mb-3">{course.title}</h3>
                                    <p className="text-gray-600 text-sm mb-6 line-clamp-3">{course.description}</p>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center text-sm text-gray-500">
                                            <Clock className="w-4 h-4 mr-2 text-brand-orange" />
                                            <span>{course.duration}</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <BookOpen className="w-4 h-4 mr-2 text-brand-orange" />
                                            <span>{course.subjects.length} Subjects</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 pt-0 mt-auto">
                                    <div className="grid grid-cols-2 gap-4">
                                        <Link
                                            to={`/courses/${course.id}`}
                                            className="px-4 py-2 border border-brand-navy text-brand-navy font-semibold rounded-lg text-center hover:bg-brand-light transition-colors"
                                        >
                                            View Details
                                        </Link>
                                        <Link
                                            to={`/courses/${course.id}`}
                                            className="px-4 py-2 bg-brand-navy text-white font-semibold rounded-lg text-center hover:bg-brand-charcoal transition-colors shadow-md"
                                        >
                                            Enroll Now
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
                            <button
                                onClick={() => { setSearchQuery(''); setSelectedFilter('All'); }}
                                className="mt-4 text-brand-orange font-semibold hover:underline"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Courses;
