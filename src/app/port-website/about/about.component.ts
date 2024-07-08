import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ReactiveFormsModule,NavbarComponent,FooterComponent,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  showProjects:boolean=true;
  showEducation:boolean=true;

  

  



























  // Reactive Form:-

    // userForm:any;
    // constructor(private formbuilder:FormBuilder){

    // }

    // ngOnInit(){
    //   this.userForm=this.formbuilder.group({
    //     name:[''],
    //     email:['']
    //   })
    // }

    // onSubmit(){
    //   console.log("Form Submitedd..",this.userForm.value);
    // }
  
}
