import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [CommonModule]  // Import CommonModule to use *ngFor
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Maxicure Pharma',
      role: 'Full Stack Developer',
      duration: '08/2022 to Present',
      description: 'Worked on building scalable microservices architecture for healthcare applications.',
      details: [
        'Implemented microservices using Java, Spring Boot, and Hibernate.',
        'Engineered solutions using Apache Kafka, Docker, and Kubernetes.',
        'Integrated cloud solutions on Azure and automated CI/CD pipelines using Azure DevOps.',
        'Managed databases like Oracle and MySQL for data storage and retrieval.'
      ]
    },
    {
      title: 'Legato Health Technologies LLP',
      role: 'Software Engineer',
      duration: '09/2020 to 07/2022',
      description: 'Developed healthcare web applications and automated batch processes for claims processing.',
      details: [
        'Developed healthcare web applications using Java, Spring Boot, and Hibernate.',
        'Analyzed COBOL batch jobs for data migration and claims processing.',
        'Automated batch job testing with Java-based test scripts, improving process efficiency.'
      ]
    },
    {
      title: 'NXP Net Solution (Client - PayU)',
      role: 'SDE - Java',
      duration: '07/2019 to 07/2020',
      description: 'Developed payment processing systems and integrated microservices for real-time data synchronization.',
      details: [
        'Developed payment processing systems using Java, Spring Boot, and Hibernate.',
        'Integrated microservices with Kafka for real-time data synchronization.',
        'Provided cloud-based solutions using AWS to ensure scalability and availability.'
      ]
    },
    {
      title: 'University of Cincinnati',
      role: 'Front Desk Application Developer',
      duration: '02/2018 to 05/2019',
      description: 'Developed a front desk management system using Azure Cloud.',
      details: [
        'Automated booking and scheduling tasks, improving efficiency by 25%.',
        'Collaborated with stakeholders to design user-friendly interfaces and system integrations.'
      ]
    }
  ];
}