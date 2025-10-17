import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {MatIconModule} from '@angular/material/icon';
import { FormControl, FormGroupDirective, NgForm, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements MyErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  imports: [MatCardModule, MatChipsModule,MatProgressBarModule, 
    MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  implements OnInit {
  valForm!: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder,
             private router: Router
  ) { 
    this.loadForm();
    
  }

  ngOnInit(): void {

  }
  loadForm(): void {
    this.valForm = this.fb.group({
      email : [null, [Validators.required]],
      pass: [null, [Validators.required]],
    });  
  }

  save(): void {
    if (this.valForm.valid) {
      console.log(this.valForm.value);
    }
    this.router.navigate(['/market']); // O la ruta que tengas para registro

  }

  goToRegister(): void {
    this.router.navigate(['/register']); // O la ruta que tengas para registro
  }

  goToRecover(): void {
    this.router.navigate(['/recover']); // O la ruta que tengas para registro
  }
}
