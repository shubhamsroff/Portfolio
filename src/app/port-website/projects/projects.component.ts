import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FooterComponent,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  showProjects:boolean =true;
  projects=[
    {name: 'Cipher Connect',technology:'Spring Boot 3, Spring Security 6,Thymeleaf, Java 8, HTML 5, CSS 3, BootStrap 5',description:'Built a scalable contact system using Spring Boot & Spring Security (+30% security boost)'+
      '- Designed an intuitive UI for seamless smart contact management.'},
    {name: 'VeloxChat',technology:'Spring Boot 3, Spring Security 6,Keylock, WebSocket, Java 8, Hibernate, MySQL',description:'eveloped WebSocket-based chat using Angular 19, Spring Boot, and MySQL.'+
      'Optimized data transmission, reducing latency by 25%.'},
    {name: 'HotelOps',technology:'MicroServices, Spring Boot 3, Spring Security 6,Thymeleaf, Java 8, Git, ',description:'A microservices-based hotel management system ensuring modularity, scalability, and efficiency in handling reservations, room allocations, and billing.'
      +'A Spring Boot-powered hotel management system optimized for performance, seamless integrations, and automated backend workflows.'
      +' A powerful HMS that efficiently handles database operations, ensuring optimal performance and data consistency using Hibernate ORM.'
    },
    {name: 'TextMetrics',technology:'Java 8, Collection Framework, MultiThreading',description:'Word & Character Count: Accurately calculates words, characters (with and without spaces), and sentences'+
'✅ Text Analytics: Provides insights like average word length, most frequent words, and readability scores.'},
    {name: 'Student Management',technology:'Spring Boot 3, Spring Security 6, Angular 19, Hibernate, MySQL 8 ', description:' A full-stack CRUD application built using Spring Boot (backend) and Angular (frontend). It provides an intuitive interface for managing student records, allowing users to perform Create, Read, Update, and Delete (CRUD) operations seamlessly.'
+'✅ Student Management: Add, edit, delete, and view student records.'+
'✅ Course Assignment: Assign students to different courses.'+
'✅ Basic Search & Filtering: Quickly find student records.'+
'✅ RESTful APIs: Backend built with Spring Boot for seamless data handling.'+
'✅ Frontend with Angular: User-friendly interface for interacting with the system.'+
'✅ Database Integration: Uses MySQL & Hibernate ORM for data storage.'
    },
  ];
}
