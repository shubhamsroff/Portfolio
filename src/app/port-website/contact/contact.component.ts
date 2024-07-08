import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
// Reactive Form:-

    userForm:any;
    constructor(private formbuilder:FormBuilder){

    }

    ngOnInit(){
      this.userForm=this.formbuilder.group({
        name:[''],
        email:[''],
        message:[''],
      })
    }

    onSubmit(){
      console.log("Form Submitedd..",this.userForm.value);
    }
}
