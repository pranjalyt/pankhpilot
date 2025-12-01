import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCourses } from '../context/CourseContext';
import { PlayCircle, CheckCircle, FileText, HelpCircle, ArrowLeft } from 'lucide-react';

const WatchPage = () => {
    const { id } = useParams();
    const { courses, updateProgress } = useCourses();
    const [activeTab, setActiveTab] = useState('overview');
    const [notes, setNotes] = useState('');

    const course = courses.find(c => c.id === id);

    if (!course) return <div>Course not found</div>;

    // Flatten syllabus for easy navigation
    const allLessons = course.syllabus.flatMap(module => module.lessons);
    const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

    const handleNextLesson = () => {
        if (currentLessonIndex < allLessons.length - 1) {
            setCurrentLessonIndex(prev => prev + 1);
            // Update progress mock
            const progress = Math.round(((currentLessonIndex + 1) / allLessons.length) * 100);
            updateProgress(id, progress);
        }
    };

    return (
        <div className="min-h-screen bg-brand-navy flex flex-col lg:flex-row">
            {/* Main Content Area */}
            <div className="flex-grow flex flex-col h-screen overflow-y-auto">
                {/* Header */}
                <div className="bg-brand-charcoal text-white p-4 flex items-center justify-between border-b border-gray-800">
                    <div className="flex items-center space-x-4">
                        <Link to="/dashboard" className="text-gray-400 hover:text-white">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div>
                            <h1 className="font-bold text-lg">{course.title}</h1>
                            <p className="text-xs text-gray-400">Lesson {currentLessonIndex + 1}: {allLessons[currentLessonIndex]}</p>
                        </div>
                    </div>
                </div>

                {/* Video Player Mock */}
                <div className="aspect-video bg-black flex items-center justify-center relative group">
                    <div className="text-center">
                        <PlayCircle className="w-20 h-20 text-white/50 group-hover:text-brand-orange transition-colors cursor-pointer" />
                        <p className="text-gray-500 mt-4">Video Placeholder</p>
                    </div>
                    {/* Controls Bar Mock */}
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/80 to-transparent flex items-center px-4 space-x-4">
                        <div className="w-full h-1 bg-gray-600 rounded-full overflow-hidden">
                            <div className="w-1/3 h-full bg-brand-orange"></div>
                        </div>
                    </div>
                </div>

                {/* Tabs & Content */}
                <div className="flex-grow bg-brand-light">
                    <div className="bg-white border-b border-gray-200 px-6">
                        <div className="flex space-x-6">
                            {['overview', 'notes', 'faq'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`py-4 text-sm font-medium border-b-2 transition-colors capitalize ${activeTab === tab
                                            ? 'border-brand-orange text-brand-orange'
                                            : 'border-transparent text-gray-500 hover:text-brand-navy'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-6">
                        {activeTab === 'overview' && (
                            <div className="space-y-4">
                                <h2 className="text-xl font-bold text-brand-navy">About this lesson</h2>
                                <p className="text-gray-600">
                                    In this lesson, we will cover the fundamentals of {allLessons[currentLessonIndex]}.
                                    Make sure to take notes and complete the quiz at the end.
                                </p>
                                <div className="flex items-center justify-between pt-4">
                                    <button
                                        onClick={handleNextLesson}
                                        className="px-6 py-2 bg-brand-navy text-white rounded-lg hover:bg-brand-charcoal transition-colors"
                                    >
                                        Mark as Complete & Next
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'notes' && (
                            <div className="space-y-4">
                                <h2 className="text-xl font-bold text-brand-navy">My Notes</h2>
                                <textarea
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                    placeholder="Type your notes here..."
                                    className="w-full h-48 p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/50 resize-none"
                                ></textarea>
                                <p className="text-xs text-gray-500">Notes are saved locally in your browser.</p>
                            </div>
                        )}

                        {activeTab === 'faq' && (
                            <div className="space-y-4">
                                <h2 className="text-xl font-bold text-brand-navy">Common Questions</h2>
                                <div className="space-y-2">
                                    <details className="bg-white border border-gray-200 rounded-lg p-4">
                                        <summary className="font-medium cursor-pointer text-brand-navy">Is this content downloadable?</summary>
                                        <p className="mt-2 text-sm text-gray-600">Currently, video content is only available for streaming.</p>
                                    </details>
                                    <details className="bg-white border border-gray-200 rounded-lg p-4">
                                        <summary className="font-medium cursor-pointer text-brand-navy">How do I ask a doubt?</summary>
                                        <p className="mt-2 text-sm text-gray-600">You can use the contact form to reach out to your instructor.</p>
                                    </details>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Sidebar Lesson List */}
            <div className="w-full lg:w-96 bg-white border-l border-gray-200 h-screen overflow-y-auto flex-shrink-0">
                <div className="p-4 border-b border-gray-100 bg-gray-50">
                    <h2 className="font-bold text-brand-navy">Course Content</h2>
                </div>
                <div className="divide-y divide-gray-100">
                    {course.syllabus.map((module, mIdx) => (
                        <div key={mIdx}>
                            <div className="px-4 py-2 bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wider">
                                Module {mIdx + 1}: {module.title}
                            </div>
                            {module.lessons.map((lesson, lIdx) => {
                                // Calculate global index
                                const globalIndex = course.syllabus.slice(0, mIdx).reduce((acc, m) => acc + m.lessons.length, 0) + lIdx;
                                const isActive = globalIndex === currentLessonIndex;
                                const isCompleted = globalIndex < currentLessonIndex;

                                return (
                                    <button
                                        key={lIdx}
                                        onClick={() => setCurrentLessonIndex(globalIndex)}
                                        className={`w-full text-left px-4 py-3 flex items-start space-x-3 hover:bg-gray-50 transition-colors ${isActive ? 'bg-brand-orange/10 border-r-4 border-brand-orange' : ''
                                            }`}
                                    >
                                        <div className="mt-0.5">
                                            {isActive ? (
                                                <PlayCircle className="w-4 h-4 text-brand-orange" />
                                            ) : isCompleted ? (
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                            ) : (
                                                <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                                            )}
                                        </div>
                                        <span className={`text-sm ${isActive ? 'font-semibold text-brand-navy' : 'text-gray-600'}`}>
                                            {lesson}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WatchPage;
