import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useCourses } from '../../context/CourseContext';

const FeaturedCourses = () => {
    const { courses } = useCourses();
    // Select a few featured courses
    const featured = courses.slice(0, 4);

    return (
        <section className="py-20 bg-brand-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-2">OUR COURSES</h2>
                        <p className="text-gray-600">Start your journey with our specialized programs.</p>
                    </div>
                    <Link to="/courses" className="hidden md:flex items-center text-brand-orange font-semibold hover:text-brand-accent">
                        View All Courses <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featured.map((course) => (
                        <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
                            <div className="h-32 bg-brand-navy p-6 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <h3 className="text-xl font-bold text-white text-center relative z-10">{course.title}</h3>
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{course.description}</p>
                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {course.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="px-2 py-1 bg-brand-light text-xs font-medium text-brand-charcoal rounded-md">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <span className="text-brand-navy font-bold">{course.price}</span>
                                        <Link
                                            to={`/courses/${course.id}`}
                                            className="text-sm font-semibold text-brand-orange hover:text-brand-accent"
                                        >
                                            Know More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link to="/courses" className="inline-flex items-center text-brand-orange font-semibold hover:text-brand-accent">
                        View All Courses <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCourses;
