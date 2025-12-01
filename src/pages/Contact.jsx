import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useCourses } from '../context/CourseContext';

const Contact = () => {
    const { courses } = useCourses();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: '', email: '', phone: '', course: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-brand-light">
            <div className="bg-brand-navy text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Get in touch with us for expert guidance and consultation.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-brand-navy mb-6">Get in Touch</h2>
                            <p className="text-gray-600 mb-8">
                                Have questions about pilot training? Our team of experienced pilots is here to help you navigate your aviation career.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-brand-orange" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-brand-navy mb-1">Visit Us</h3>
                                    <p className="text-gray-600">
                                        PANKH PILOT PLATFORM<br />
                                        Pearls Plaza, 4th Floor, Facility B-420<br />
                                        Near Andheri Railway Station, Andheri West<br />
                                        Mumbai 400058
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-brand-orange" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-brand-navy mb-1">Call Us</h3>
                                    <p className="text-gray-600">+91 9173214549</p>
                                    <p className="text-gray-600">+91 8369329059</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-brand-orange" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-brand-navy mb-1">Email Us</h3>
                                    <p className="text-gray-600">info@pankhpilot.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Consultation Form */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold text-brand-navy mb-2">Consultation Form</h2>
                        <p className="text-gray-500 mb-6 text-sm">An actual pilot will guide you and clear all your queries.</p>

                        {submitted ? (
                            <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg flex items-center">
                                <Send className="w-5 h-5 mr-2" />
                                <span>Thank you! An actual pilot will reach out to you soon.</span>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/50"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/50"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile No.</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/50"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Course Interested</label>
                                    <select
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/50"
                                    >
                                        <option value="">Select a course</option>
                                        {courses.map(c => (
                                            <option key={c.id} value={c.title}>{c.title}</option>
                                        ))}
                                        <option value="Other">Other / General Inquiry</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                                    <textarea
                                        name="message"
                                        rows="3"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/50 resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-brand-orange text-white font-bold rounded-lg hover:bg-brand-accent transition-colors shadow-md"
                                >
                                    Request Consultation
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
