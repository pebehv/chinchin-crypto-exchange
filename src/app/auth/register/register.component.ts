import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatCardModule, MatChipsModule,MatProgressBarModule, 
    MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatIconModule],
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

 valForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router,
              private fb: FormBuilder
  ) {this.loadForm();  }


  loadForm(): void {
    this.valForm = this.fb.group({
      email : [null, [Validators.required]],
      pass: [null, [Validators.required]],
      repi_pass: [null, [Validators.required]],
    });  
  }

  save(): void {
    if (this.valForm.valid) {
      console.log(this.valForm.value);
      this.onRegister();

    }  
  }  
  onRegister() {
    this.authService.register(this.valForm.value['email'], this.valForm.value['pass']).subscribe({
      next: () => this.router.navigate(['']),
      error: (err) => alert(err.error.message)
    });
  }
}
