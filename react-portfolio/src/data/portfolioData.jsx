import React from "react";
import { Github, CodeXml, FileTerminal } from "lucide-react";

export const portfolioData = [
  {
    id: 1,
    title: "Weber State Cybersecurity Club GitHub",
    description:
      "WSU Cyber Club projects, including interactive labs, challenges, and a GitHub Pages site.",
    icon: <Github size={80} />,
    technologies: ["GitHub", "Git", "GitHub Pages", "Hugo"],
    fullDescription:
      "As president of the WSU Cybersecurity Club, I contribute to and help manage our GitHub repository of projects, scripts, and learning resources. This work includes collaborating with club members on hands-on exercises, documenting solutions to cybersecurity challenges, and building tools that support practical learning. These projects reflect my growth in cybersecurity and network management, as well as my commitment to teamwork and sharing knowledge within a student community.",
    features: [
      "Hands-on security concept labs",
      "Security concept challenges to apply skills gained in labs",
      "GitHub Pages site built using static website generator Hugo",
      "Practical focus on utilizing tools and techniques",
      "Beginner-friendly guidance without losing technical depth",
    ],
    links: "https://github.com/Weber-Cyber-Club",
  },
  {
    id: 2,
    title: "Webpage Replication",
    description:
      "A close replication of an existing webpage, focusing on layout structure an assessing HTML/CSS competency.",
    icon: <CodeXml size={80} />,
    technologies: ["HTML", "CSS", "Web Design", "Front-End"],
    fullDescription:
      "This project is a hand-coded HTML and CSS rebuild of an existing webpage. The recreation captures the core layout, styling patterns, and visual structure of the original. The goal was to practice analyzing a design, translating it into semantic markup, and implementing a responsive layout with modern CSS techniques. The final result maintains the overall look and feel of the source design while emphasizing code clarity, organization, and front-end fundamentals.",
    features: [
      "Structural recreation of the original page's layout",
      "Semantic HTML for clean, modern, organized markup",
      "Consistent styling that reflects the look and feel of the source design",
      "Clear and maintainable class structure",
      "Practical design-to-code interpretation",
    ],
    links: "https://web1430-module1-challenge.netlify.app/",
  },
  {
    id: 3,
    title: "Dotfiles Project",
    description:
      "A collection of configuration files and installation scripts, to help you quickly set up your development environment on a new machine.",
    icon: <FileTerminal size={80} />,
    technologies: ["Bash", "Python", "Conda", "Linux"],
    fullDescription:
      "This project is a centralized dotfiles setup containing configuration files, custom shell tweaks, and installation scripts designed to quickly spin up a personalized development environment on any new machine. It streamlines tool configuration, automates software and package installation, and provides clear documentation so the entire setup can be replicated consistently through version control.",
    features: [
      "Local bin script setup",
      "Python Miniconda environment setup",
      "Additional package installation specified in packages.txt file",
      "One-click rollback functionality",
      "Clear documentation for setup, usage, and customization",
    ],
    links: "https://github.com/SOC-CS3030-FLEX/cs3030-flex-dotfiles-skrompel",
  },
];
