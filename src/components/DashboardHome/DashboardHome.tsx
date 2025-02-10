'use client';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { FaUser } from 'react-icons/fa';

interface DashboardCardProps {
    title: string;
    count: number;
    icon: React.ReactNode;
}

const DashboardHome = () => {
    const [alldata, setAllData] = useState([]);
    const [blogsdata, setBlogs] = useState([]);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:8000/users`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setAllData(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);
    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:8000/projects`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);
    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:8000/blogs`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-full">Loading...</div>
        );
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold text-center mb-6 text-[#F43F5E]">
                Welcome to Your Dashboard
            </h1>

            <div className="flex flex-wrap justify-center gap-8 z-0">
                <DashboardCard
                    title="Total Users"
                    count={alldata.length}
                    icon={<FaUser className="text-[#F43F5E] text-4xl" />}
                />
                <DashboardCard
                    title="Total Projects"
                    count={projects.length}
                    icon={<FaUser className="text-[#F43F5E] text-4xl" />}
                />
                <DashboardCard
                    title="Total Projects"
                    count={blogsdata.length}
                    icon={<FaUser className="text-[#F43F5E] text-4xl" />}
                />
            </div>
        </div>
    );
};

const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
    return (
        <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg py-8 px-6 w-full md:w-80 z-0 flex items-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
            <div className="mr-4 text-5xl">{icon}</div>
            <div>
                <h2 className="text-4xl font-bold text-[#F43F5E]">
                    <CountUp start={0} end={count} duration={2.75} />
                </h2>
                <p className="text-gray-600 mt-2">{title}</p>
            </div>
        </div>
    );
};

export default DashboardHome;
