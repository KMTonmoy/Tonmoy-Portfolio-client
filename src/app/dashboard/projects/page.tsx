'use client';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

interface Project {
    _id?: string;
    title: string;
    type: string;
    languages: string[];
    image: string;
    liveLink: string;
    githubClient: string;
    githubServer: string;
}

const availableTechnologies = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Next', 'Node', 'Express', 'MongoDB',
    'Postman', 'Mongoose', 'Redux', 'Firebase', 'JWT', 'Database', 'Tailwind',
    'TypeScript', 'Git', 'npm', 'icon', 'Picture'
];

const ProjectManagement = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [newProject, setNewProject] = useState<Project>({
        title: '',
        type: '',
        languages: [],
        image: '',
        liveLink: '',
        githubClient: '',
        githubServer: ''
    });
    const [modalOpen, setModalOpen] = useState(false);
    const [editId, setEditId] = useState<string | null>(null);


    const fetchProjects = async () => {
        try {
            const res = await fetch('http://localhost:8000/projects');
            const data = await res.json();
            setProjects(data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewProject({ ...newProject, [e.target.name]: e.target.value });
    };


    const handleTechnologyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        if (checked) {
            setNewProject((prevProject) => ({
                ...prevProject,
                languages: [...prevProject.languages, value]
            }));
        } else {
            setNewProject((prevProject) => ({
                ...prevProject,
                languages: prevProject.languages.filter((lang) => lang !== value)
            }));
        }
    };


    const addProject = async () => {
        try {
            await fetch('http://localhost:8000/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProject),
            });
            fetchProjects();
            setModalOpen(false);
        } catch (error) {
            console.error('Error adding project:', error);
        }
    };


    const updateProject = async () => {
        if (editId) {
            try {
                await fetch(`http://localhost:8000/projectsup/${editId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newProject),
                });
                fetchProjects();
                setModalOpen(false);
            } catch (error) {
                console.error('Error updating project:', error);
            }
        }
    };


    const deleteProject = async (id: string) => {
        try {
            await fetch(`http://localhost:8000/projects/${id}`, { method: 'DELETE' });
            fetchProjects();
            Swal.fire('Deleted!', 'Your project has been deleted.', 'success');
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };


    const openModal = (project?: Project) => {
        if (project) {
            setEditId(project._id || null);
            setNewProject({ ...project });
        } else {
            setNewProject({
                title: '',
                type: '',
                languages: [],
                image: '',
                liveLink: '',
                githubClient: '',
                githubServer: ''
            });
        }
        setModalOpen(true);
    };

    return (
        <div className="p-8 text-gray-800">
            <h1 className="text-3xl font-semibold text-center mb-8">Project Management</h1>
            <button
                className="bg-indigo-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-indigo-700 transition"
                onClick={() => openModal()}
            >
                + Add New Project
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {projects.map((project) => (
                    <div key={project._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-xl font-semibold">{project.title}</h2>
                        <p className="text-sm text-gray-500"><strong>Type:</strong> {project.type}</p>
                        <p className="text-sm text-gray-500"><strong>Technologies:</strong> {project.languages.join(', ')}</p>
                        <div className="flex gap-4 mt-4">
                            <a href={project.liveLink} target="_blank" className="text-blue-500 underline">Live Demo</a>
                            <a href={project.githubClient} target="_blank" className="text-blue-500 underline">Client Code</a>
                            <a href={project.githubServer} target="_blank" className="text-blue-500 underline">Server Code</a>
                        </div>
                        <div className="flex justify-between mt-6">
                            <button
                                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
                                onClick={() => openModal(project)}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                                onClick={() => deleteProject(project._id || '')}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {modalOpen && (
                <div className="fixed z-50 inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-xl w-96">
                        <h2 className="text-2xl font-semibold mb-6">{editId ? 'Edit Project' : 'Add Project'}</h2>
                        <input
                            type="text"
                            name="title"
                            placeholder="Project Title"
                            value={newProject.title}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-3 mb-4 rounded-md"
                        />
                        <input
                            type="text"
                            name="type"
                            placeholder="Project Type"
                            value={newProject.type}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-3 mb-4 rounded-md"
                        />
                        <div className="mb-6">
                            <p className="font-medium mb-2">Select Technologies:</p>
                            <div className="grid grid-cols-3 gap-2">
                                {availableTechnologies.map((tech) => (
                                    <label key={tech} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            value={tech}
                                            checked={newProject.languages.includes(tech)}
                                            onChange={handleTechnologyChange}
                                            className="mr-2"
                                        />
                                        {tech}
                                    </label>
                                ))}
                            </div>
                        </div>
                        <input
                            type="text"
                            name="image"
                            placeholder="Image URL"
                            value={newProject.image}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-3 mb-4 rounded-md"
                        />
                        <input
                            type="text"
                            name="liveLink"
                            placeholder="Live Demo Link"
                            value={newProject.liveLink}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-3 mb-4 rounded-md"
                        />
                        <input
                            type="text"
                            name="githubClient"
                            placeholder="GitHub Client Link"
                            value={newProject.githubClient}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-3 mb-4 rounded-md"
                        />
                        <input
                            type="text"
                            name="githubServer"
                            placeholder="GitHub Server Link"
                            value={newProject.githubServer}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-3 mb-6 rounded-md"
                        />
                        <div className="flex justify-between">
                            <button
                                onClick={editId ? updateProject : addProject}
                                className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setModalOpen(false)}
                                className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectManagement;
