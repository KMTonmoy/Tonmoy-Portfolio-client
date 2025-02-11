"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Project {
  _id: string;
  title: string;
  image: string;
  liveLink?: string;
  githubClient?: string;
  githubServer?: string;
  languages: string[];
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeLanguage, setActiveLanguage] = useState<string>("all");
  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("https://tonmoy-portfolio-server-rosy.vercel.app/projects");
      const data: Project[] = await response.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const filterProjects = (language: string) => {
    if (language === "all") return projects;
    return projects.filter((project) => project.languages.includes(language));
  };

  const filteredProjects = filterProjects(activeLanguage);

  return (
    <div className="py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
        <p className="text-gray-400 mb-10">
          Explore my latest web development projects built with modern technologies.
        </p>
        <div className="flex justify-center space-x-4 mb-10">
          {["all", "react", "next"].map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveLanguage(lang)}
              className={`py-2 px-4 rounded-lg transition-all duration-300 ${activeLanguage === lang ? "bg-[#F95353] text-white" : "bg-[#292148] text-white hover:bg-[#F95353]"
                }`}
            >
              {lang === "all" ? "All" : lang.charAt(0).toUpperCase() + lang.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project._id}
              onClick={() => router.push(`/projects/${project._id}`)}
              className="cursor-pointer bg-[#292148] rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <div className="mt-4 flex space-x-4">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-[#F95353] hover:text-white transition-all duration-300">
                      Live Demo
                    </a>
                  )}
                  {project.githubClient && (
                    <a href={project.githubClient} target="_blank" rel="noopener noreferrer" className="text-[#F95353] hover:text-white transition-all duration-300">
                      Client Code
                    </a>
                  )}
                  {project.githubServer && (
                    <a href={project.githubServer} target="_blank" rel="noopener noreferrer" className="text-[#F95353] hover:text-white transition-all duration-300">
                      Server Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
