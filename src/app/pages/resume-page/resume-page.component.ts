import { DOCUMENT, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-resume-page',
  standalone: true,
  imports: [NgFor, NgIf, ButtonModule],
  templateUrl: './resume-page.component.html',
  styleUrl: './resume-page.component.scss'
})
export class ResumePageComponent {
  document = inject(DOCUMENT);

  personalInfo = {
    name: 'JORGE ANDRÉS FERNÁNDEZ MEDINA',
    title: 'Unity Video Game Developer',
    phone: '+57 311-868-3827',
    email: 'jorgeandresfernandezmedina@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jorge-fernandez-fullstack-unity-developer/?locale=en_US',
    portfolio: '',
    location: 'Bogotá, Colombia',
    about: 'I am a Unity video game developer with extensive experience as a Full Stack web and mobile developer, mainly using .NET (C#), Angular, and Flutter, creating quality applications and providing an excellent user experience through attention to detail and good practices. My passion for learning allows me to quickly adapt to new projects, contribute ideas, and provide innovative solutions. I am currently seeking to be part of a team with challenging goals and to focus my professional career on the video game industry.'
  };

  education = [
    {
      institution: 'Generation Colombia, Bogotá, Colombia',
      dates: '06/2024 - Ongoing',
      degree: 'Unity Developer'
    },
    {
      institution: 'National Experimental University of Táchira, San Cristóbal, Venezuela',
      dates: '05/2011 - 08/2018',
      degree: 'Electronic Engineer'
    }
  ];

  workExperience = [
    {
      company: 'Unosquare',
      location: 'Bogotá, Colombia',
      dates: '08/2023 - 06/2024',
      position: 'Full Stack .NET Developer',
      achievements: [
        'I was part of various development teams as a full stack mainly using .NET (C#) in SCRUM methodology for external clients, generating excellent quality software.',
        'I developed programming tasks in internal projects to practice my skills in various recent technologies focused on Web Development, AI, and DevOps.'
      ]
    },
    {
      company: 'Parserr',
      location: 'Bogotá, Colombia',
      dates: '12/2022 - 08/2023',
      position: 'Full Stack .NET Developer',
      achievements: [
        'I contributed to the migration of a web application to React, completing up to 80% of the existing pages and implementing a functional and user-friendly interface for mobile devices.',
        'I participated as a backend developer with .NET (C#), in implementing APIs, fixing bugs, and refactoring with a 33% participation, improving code quality.'
      ]
    },
    {
      company: 'Datapeers SAS',
      location: 'Manizales, Colombia',
      dates: '11/2021 - 12/2022',
      position: 'Full Stack MEAN Developer',
      achievements: [
        'I developed user interfaces with Angular for a CRM web application and the development of its mobile application using Flutter, improving accessibility.',
        'I optimized database queries improving performance up to ten (10) times for various administration and reporting applications.'
      ]
    },
    {
      company: 'Freelance',
      location: 'Venezuela',
      dates: '11/2018 - 11/2021',
      position: 'Developer',
      achievements: [
        'I implemented frontend development in web applications using Angular and fixed bugs in existing web pages developed with JavaScript, jQuery, and Bootstrap.',
        'I developed backend projects with Express.js, indicators for MetaTrader 4, and generated automation solutions for various tasks in Excel according to client requirements.'
      ]
    }
  ];

  projects = [
    {
      experience: 'Generation Colombia, Game Jam 1 "You are your enemy"',
      experienceUrl: 'https://itch.io/jam/1-day-gamejam',
      projectUrl: 'https://ttavojimenez.itch.io/black-and-withe',
      name: 'Black and White',
      dates: '07/2024',
      role: 'Unity Game Programmer',
      achievements: [
        'I developed movement scripts, UI navigation, audio handling, collisions and animations.',
      ]
    }
  ];

  skills = [
    'Unity3D', 'Unreal', 'Blender', 'Figma', '3D Modeling', 'UI/UX', 'C#', '.NET', 'JavaScript', 'Angular', 'React', 'Vue', 'Flutter', 'SQL', 'NoSQL', 'Docker', 'DevOps'
  ];

  languages = [
    { label: 'English (C1)', url: 'https://cert.efset.org/yBUPj7' },
    { label: 'Spanish (Native)', url: '' }
  ];

  constructor() {
    this.personalInfo.portfolio = this.document.location.origin;
  }

  printPage() {
    window.print();
  }
}
