import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  

  constructor(private router:Router){

  }
  onHome(){
    const skillSelection=document.getElementById('home-selector');
    if(skillSelection)
      {
        skillSelection.scrollIntoView({behavior:'smooth',block:'start'});
      }
    this.router.navigate(['./port-website/home']);
  }
  onAbout(){
    const skillSelection=document.getElementById('about-selector');
    if(skillSelection)
      {
        skillSelection.scrollIntoView({behavior:'smooth',block:'start'});
      }
    this.router.navigate(['./port-website/about-us']);
  }
  onContact(){
    const skillSelection=document.getElementById('contact-selector');
    if(skillSelection)
      {
        skillSelection.scrollIntoView({behavior:'smooth',block:'start'});
      }
    this.router.navigate(['./port-website/contact']);
  }
  onEducation(){
    const skillSelection2=document.getElementById('about-selector');
      if(skillSelection2)
        {
          skillSelection2.scrollIntoView({behavior:'smooth',block:'start'});
        }
    this.router.navigate(['./port-website/about-us']);
  }
  onExperience(){
    const skillSelection=document.getElementById('experience-selector');
    if(skillSelection)
      {
        skillSelection.scrollIntoView({behavior:'smooth',block:'start'});
      }
      this.router.navigate(['./port-website/experience']);
  }
  onSkills(){
      const skillSelection=document.getElementById('skill-selector');
      if(skillSelection)
        {
          skillSelection.scrollIntoView({behavior:'smooth',block:'start'});
        }
        this.router.navigate(['./port-website/skills']);
  }
  onProjects(){
    const skillSelection=document.getElementById('project-selector');
    if(skillSelection)
      {
        skillSelection.scrollIntoView({behavior:'smooth',block:'start'});
      }
  this.router.navigate(['./port-website/projects']);
  }



  
}
