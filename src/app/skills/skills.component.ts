import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: true,  // Standalone component
  imports: [CommonModule]  // Import CommonModule here to use *ngFor
})
export class SkillsComponent {
  skillCategories = [
    {
      name: 'Languages & Frameworks',
      skills: ['Java', 'Spring Boot', 'Hibernate', 'JavaScript', 'HTML/CSS', 'TypeScript']
    },
    {
      name: 'Cloud & DevOps',
      skills: ['Microsoft Azure', 'AWS', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD Pipelines']
    },
    {
      name: 'Data & Databases',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Oracle', 'Apache Kafka']
    },
    {
      name: 'Tools & Miscellaneous',
      skills: ['Visual Studio Code', 'Git', 'Power BI', 'MS Excel', 'SQL', 'Apache Maven']
    }
  ];

  constructor() {}
}