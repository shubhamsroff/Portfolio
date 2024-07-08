import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  emailAddress='shubhamsroff321@gmail.com';
  githubLink="https://github.com/shubhamsroff";
  linkedInLink="https://www.linkedin.com/in/shubham-soni-122bb7249";
  instagramLink="https://www.instagram.com/shubham_soni_3_2_1/";
  facebookLink="https://www.facebook.com/profile.php?id=100025405191222";
  
  constructor(private router:Router){
    
  }
  onHome(){
    window.scrollTo({top:0,behavior:'smooth'});
    // this.router.navigate(['./port-website/home']);
  }
  onAbout(){
    this.router.navigate(['./port-website/about-us']);
  }
  onContact(){
    this.router.navigate(['./port-website/contact']);
  }

  onGithub(){

  }
  onLinkedin(){

  }
  onFacebook(){

  }
  onInstagram(){
    
  }
}
