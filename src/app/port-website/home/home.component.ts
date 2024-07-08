import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,NavbarComponent,FooterComponent,MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent { //class
    //Properties  
    // name:string;
  
    // Template form:---
  
  
    // // Constructor
    // constructor(){
    //   this.name="Shubham";
    // }

    // greet(){
    //     this.name+="Soni";
    //     console.log(this.name);
    // }
    // onSubmit(form:any){
    //   console.log("Form Submitted:",form.value);
    // }




}


// Accessing Outside of class
// const shubh=new HomeComponent();

// // Associate Properties
// console.log(shubh.name);

// // Accessing Method
// shubh.greet();