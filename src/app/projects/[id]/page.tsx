'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

interface Project {
    _id: string;
    title: string;
    type: string;
    languages: string[];
    image: string;
    liveLink: string;
    githubClient: string;
    githubServer: string;
}

const ProjectDetails = () => {
    const router = useRouter();
    const params = useParams();
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
        const fetchProject = async () => {
            if (!params?.id) return;
            try {
                const response = await fetch(`https://tonmoy-portfolio-server-rosy.vercel.app/projects/${params.id}`);
                const data: Project = await response.json();
                setProject(data);
            } catch (error) {
                console.error('Error fetching project:', error);
            }
        };
        fetchProject();
    }, [params?.id]);

    return (
        <div className="min-h-screen bg-[#1D1730] text-white px-6 py-10">
            <div className="max-w-4xl mx-auto bg-[#292148] p-6 rounded-lg shadow-lg">
                <img src={project?.image} alt={project?.title} className="w-full h-64 object-cover rounded-lg" />
                <h1 className="text-3xl font-bold mt-4">{project?.title}</h1>
                <p className="mt-2 text-gray-300">{project?.type}</p>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">Technologies Used:</h2>
                    <ul className="flex flex-wrap gap-2 mt-2">
                        {project?.languages.map((tech) => (
                            <li key={tech} className="bg-[#F95353] px-3 py-1 rounded-full text-sm">
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-6 flex space-x-4">
                    <a href={project?.liveLink} target="_blank" rel="noopener noreferrer" className="bg-[#F95353] px-4 py-2 rounded-lg hover:bg-red-600 transition">Live Demo</a>
                    <a href={project?.githubClient} target="_blank" rel="noopener noreferrer" className="bg-[#F95353] px-4 py-2 rounded-lg hover:bg-red-600 transition">Client Code</a>
                    <a href={project?.githubServer} target="_blank" rel="noopener noreferrer" className="bg-[#F95353] px-4 py-2 rounded-lg hover:bg-red-600 transition">Server Code</a>
                </div>
                <button onClick={() => router.back()} className="mt-6 bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-500 transition">Go Back</button>
            </div>
        </div>
    );
};

export default ProjectDetails;
