import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import EngineeringIdentity from "../components/EngineeringIdentity";
import TechConstellation from "../components/TechConstellation";
import ProjectsUniverse from "../components/ProjectsUniverse";
import EngineeringLab from "../components/EngineeringLab";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Achievements from "../components/Achievements";
import EducationCertifications from "../components/EducationCertifications";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main style={{ position: "relative", overflowX: "hidden" }}>
      {/* 01. Hero with 3D Core */}
      <Hero />

      {/* 02. About Section / Dossier */}
      <AboutSection />

      {/* 03. Engineering Identity */}
      <EngineeringIdentity />

      {/* 04. Technology Constellation */}
      <TechConstellation />

      {/* 05. Project Universe */}
      <ProjectsUniverse />

      {/* 06. Engineering Lab (Architecture Diagrams) */}
      <EngineeringLab />

      {/* 07. Experience Timeline */}
      <ExperienceTimeline />

      {/* 08. Verified Achievements */}
      <Achievements />

      {/* 09. Education & Certifications */}
      <EducationCertifications />

      {/* 10. Contact & Resume */}
      <ContactSection />
    </main>
  );
}
