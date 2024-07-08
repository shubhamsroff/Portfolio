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
    this.router.navigate(['./port-website/home']);
  }
  onAbout(){
    this.router.navigate(['./port-website/about-us']);
  }
  onContact(){
    this.router.navigate(['./port-website/contact']);
  }
  onEducation(){
    const skillSelection2=document.getElementById('education-skiil');
      if(skillSelection2)
        {
          skillSelection2.scrollIntoView({behavior:'smooth',block:'start'});
        }
    this.router.navigate(['./port-website/about-us']);
  }
  onExperience(){
    this.router.navigate(['./port-website/experience']);
  }
  onSkills(){
      const skillSelection=document.getElementById('skill-selector');
      if(skillSelection)
        {
          skillSelection.scrollIntoView({behavior:'smooth',block:'start'});
        }

  }
  onProjects(){
   
  this.router.navigate(['./port-website/projects']);
  }



  
}
