import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check localStorage for persisted user
        const storedUser = localStorage.getItem('pankh_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Mock login - accept any non-empty credentials
        const mockUser = {
            id: 'u1',
            name: 'Student Pilot',
            email: email,
            role: 'student'
        };
        setUser(mockUser);
        localStorage.setItem('pankh_user', JSON.stringify(mockUser));
        return true;
    };

    const register = (data) => {
        // Mock register
        const mockUser = {
            id: 'u1',
            name: data.name,
            email: data.email,
            role: 'student'
        };
        setUser(mockUser);
        localStorage.setItem('pankh_user', JSON.stringify(mockUser));
        return true;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('pankh_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
