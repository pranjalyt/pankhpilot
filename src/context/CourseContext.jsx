import React, { createContext, useContext, useState, useEffect } from 'react';

const CourseContext = createContext();

export const useCourses = () => useContext(CourseContext);

const MOCK_COURSES = [
    {
        id: 'c1',
        title: 'Airline Pilot Foundation Course',
        description: 'A comprehensive foundation course designed for students from 9th to 11th grade, or anyone interested in starting their aviation journey.',
        level: 'Beginner',
        duration: '6 Months',
        price: '₹45,000',
        tags: ['Foundation', 'Beginner'],
        subjects: ['Aviation Basics', 'Physics', 'Maths', 'English'],
        syllabus: [
            { title: 'Introduction to Aviation', lessons: ['History of Flight', 'Parts of an Airplane'] },
            { title: 'Basic Aerodynamics', lessons: ['Forces of Flight', 'Airfoils'] }
        ]
    },
    {
        id: 'c2',
        title: 'IGRUA Entrance Prep',
        description: 'Specialized coaching for IGRUA entrance examination covering Written Test, WOMBAT, and Interview preparation.',
        level: 'Intermediate',
        duration: '3 Months',
        price: '₹35,000',
        tags: ['Entrance', 'IGRUA'],
        subjects: ['General English', 'Mathematics', 'Physics', 'Reasoning'],
        syllabus: [
            { title: 'Written Test Prep', lessons: ['Maths Shortcuts', 'Physics Concepts'] },
            { title: 'Interview Skills', lessons: ['Mock Interview 1', 'Mock Interview 2'] }
        ]
    },
    {
        id: 'c3',
        title: 'RTR-A (Aeronautical)',
        description: 'Radio Telephony Restricted (Aeronautical) license preparation. Essential for all pilots.',
        level: 'Advanced',
        duration: '2 Months',
        price: '₹25,000',
        tags: ['RTR', 'License'],
        subjects: ['Part I - Transmission', 'Part II - Regulations'],
        syllabus: [
            { title: 'Transmission Techniques', lessons: ['Callsigns', 'Phraseology'] },
            { title: 'Regulations', lessons: ['ITU Regulations', 'Indian Wireless Act'] }
        ]
    },
    {
        id: 'c4',
        title: 'DGCA Air Regulation',
        description: 'In-depth study of Air Law and Regulations as per DGCA syllabus.',
        level: 'Professional',
        duration: '1 Month',
        price: '₹15,000',
        tags: ['DGCA', 'Ground Class'],
        subjects: ['Aircraft Rules', 'Civil Aviation Requirements'],
        syllabus: [
            { title: 'Aircraft Act 1934', lessons: ['Key Provisions', 'Amendments'] },
            { title: 'Personnel Licensing', lessons: ['Medical Requirements', 'Logbooks'] }
        ]
    },
    {
        id: 'c5',
        title: 'DGCA Air Navigation',
        description: 'Master the art of navigation. Covers General Navigation, Radio Aids, and Instruments.',
        level: 'Professional',
        duration: '2 Months',
        price: '₹20,000',
        tags: ['DGCA', 'Ground Class'],
        subjects: ['General Navigation', 'Radio Aids', 'Instrumentation'],
        syllabus: [
            { title: 'Earth and Charts', lessons: ['Latitude/Longitude', 'Projections'] },
            { title: 'Flight Planning', lessons: ['Fuel Planning', 'Point of No Return'] }
        ]
    },
    {
        id: 'c6',
        title: 'DGCA Air Meteorology',
        description: 'Understand weather patterns, reports, and forecasts essential for safe flying.',
        level: 'Professional',
        duration: '1.5 Months',
        price: '₹15,000',
        tags: ['DGCA', 'Ground Class'],
        subjects: ['Atmosphere', 'Climatology', 'Met Reports'],
        syllabus: [
            { title: 'The Atmosphere', lessons: ['Composition', 'Layers'] },
            { title: 'Met Reports', lessons: ['METAR', 'TAF'] }
        ]
    },
    {
        id: 'c7',
        title: 'DGCA Technical General',
        description: 'Detailed study of aircraft systems, engines, and electrics.',
        level: 'Professional',
        duration: '2 Months',
        price: '₹20,000',
        tags: ['DGCA', 'Ground Class'],
        subjects: ['Airframes', 'Engines', 'Electrics'],
        syllabus: [
            { title: 'Airframes', lessons: ['Construction', 'Loads'] },
            { title: 'Powerplant', lessons: ['Piston Engines', 'Jet Engines'] }
        ]
    },
    {
        id: 'c8',
        title: 'DGCA Technical Specific',
        description: 'Study of specific aircraft types (Cessna 152/172, Multi-engine).',
        level: 'Professional',
        duration: '1 Month',
        price: '₹15,000',
        tags: ['DGCA', 'Ground Class'],
        subjects: ['Cessna 172', 'Cessna 152', 'Multi-engine'],
        syllabus: [
            { title: 'Cessna 172', lessons: ['Limitations', 'Performance'] },
            { title: 'Emergency Procedures', lessons: ['Engine Failure', 'Fire'] }
        ]
    }
];

export const CourseProvider = ({ children }) => {
    const [courses, setCourses] = useState(MOCK_COURSES);
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    useEffect(() => {
        // Load enrolled courses from local storage
        const storedEnrollments = localStorage.getItem('pankh_enrollments');
        if (storedEnrollments) {
            setEnrolledCourses(JSON.parse(storedEnrollments));
        }
    }, []);

    const enroll = (courseId) => {
        const course = courses.find(c => c.id === courseId);
        if (course && !enrolledCourses.find(c => c.id === courseId)) {
            const newEnrollments = [...enrolledCourses, { ...course, progress: 0 }];
            setEnrolledCourses(newEnrollments);
            localStorage.setItem('pankh_enrollments', JSON.stringify(newEnrollments));
            return true;
        }
        return false;
    };

    const updateProgress = (courseId, progress) => {
        const newEnrollments = enrolledCourses.map(c =>
            c.id === courseId ? { ...c, progress } : c
        );
        setEnrolledCourses(newEnrollments);
        localStorage.setItem('pankh_enrollments', JSON.stringify(newEnrollments));
    };

    return (
        <CourseContext.Provider value={{ courses, enrolledCourses, enroll, updateProgress }}>
            {children}
        </CourseContext.Provider>
    );
};
