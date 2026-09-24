/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Project, Language, CategoryType } from './types/portfolio';
import { getStoredProjects, saveProjectsToStorage } from './services/storage';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoCarousel } from './components/VideoCarousel';
import { GraphicCarousel } from './components/GraphicCarousel';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { GraphicModal } from './components/GraphicModal';
import { ProjectUploadModal } from './components/ProjectUploadModal';
import { WorkflowSection } from './components/WorkflowSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { GitHubGuideModal } from './components/GitHubGuideModal';
import { Footer } from './components/Footer';

export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [language, setLanguage] = useState<Language>('en');
  
  // Modals state
  const [activeVideoProject, setActiveVideoProject] = useState<Project | null>(null);
  const [activeGraphicProject, setActiveGraphicProject] = useState<Project | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadCategory, setUploadCategory] = useState<CategoryType>('video');
  const [isGitHubGuideOpen, setIsGitHubGuideOpen] = useState(false);

  // Load projects from persistent storage
  useEffect(() => {
    const loaded = getStoredProjects();
    setProjects(loaded);
  }, []);

  const handleAddProject = (newProject: Project) => {
    const updated = [newProject, ...projects];
    setProjects(updated);
    saveProjectsToStorage(updated);
  };

  const handleDeleteProject = (id: string) => {
    const updated = projects.filter((p) => p.id !== id);
    setProjects(updated);
    saveProjectsToStorage(updated);
  };

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'bn' ? 'en' : 'bn'));
  };

  const handleOpenUpload = (defaultCategory: CategoryType = 'video') => {
    setUploadCategory(defaultCategory);
    setIsUploadModalOpen(true);
  };

  // Find the featured project for hero showreel trigger
  const featuredVideoProject = projects.find((p) => p.category === 'video' && p.featured) || projects.find((p) => p.category === 'video');

  return (
    <div className="min-h-screen bg-[#08090D] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        language={language}
        onToggleLanguage={handleToggleLanguage}
        onOpenUpload={handleOpenUpload}
        onOpenGitHubGuide={() => setIsGitHubGuideOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          language={language}
          onOpenFeaturedVideo={(proj) => setActiveVideoProject(proj || featuredVideoProject || null)}
          onOpenUpload={() => handleOpenUpload('video')}
          featuredProject={featuredVideoProject}
        />

        {/* Video Editing Carousel Showcase */}
        <VideoCarousel
          projects={projects}
          language={language}
          onSelectVideo={(proj) => setActiveVideoProject(proj)}
          onOpenUpload={(cat) => handleOpenUpload(cat)}
          onDeleteProject={handleDeleteProject}
        />

        {/* Graphic Design Carousel Showcase */}
        <GraphicCarousel
          projects={projects}
          language={language}
          onSelectGraphic={(proj) => setActiveGraphicProject(proj)}
          onOpenUpload={(cat) => handleOpenUpload(cat)}
          onDeleteProject={handleDeleteProject}
        />

        {/* 4-Stage Creative Production Workflow */}
        <WorkflowSection language={language} />

        {/* About Me Section */}
        <AboutSection
          language={language}
          onOpenContact={() => {
            const el = document.getElementById('contact-section');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Contact & Inquiry Section */}
        <ContactSection language={language} />
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onOpenGitHubGuide={() => setIsGitHubGuideOpen(true)}
      />

      {/* Cinema Mode Video Player Modal */}
      <VideoPlayerModal
        project={activeVideoProject}
        language={language}
        onClose={() => setActiveVideoProject(null)}
      />

      {/* High-Resolution Graphic Lightbox Modal */}
      <GraphicModal
        project={activeGraphicProject}
        language={language}
        onClose={() => setActiveGraphicProject(null)}
      />

      {/* Project Upload & Manager Modal */}
      <ProjectUploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onAddProject={handleAddProject}
        language={language}
        defaultCategory={uploadCategory}
      />

      {/* GitHub Deployment & Backup Guide Modal */}
      <GitHubGuideModal
        isOpen={isGitHubGuideOpen}
        onClose={() => setIsGitHubGuideOpen(false)}
        projects={projects}
        language={language}
      />

    </div>
  );
}
