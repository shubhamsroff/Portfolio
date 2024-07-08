import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  showProjects:boolean =true;
  projects=[
    {name: 'Project1',description:'Description of Project1'},
    {name: 'Project2',description:'Description of Project2'},
    {name: 'Project3',description:'Description of Project3'},
    {name: 'Project4',description:'Description of Project4'},
    {name: 'Project5',description:'Description of Project5'},
    {name: 'Project6',description:'Description of Project6'},
    {name: 'Project7',description:'Description of Project7'},
    {name: 'Project8',description:'Description of Project8'},
  ];
}
