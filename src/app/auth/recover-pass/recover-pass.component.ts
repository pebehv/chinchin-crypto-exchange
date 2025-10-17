import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-pass',
  imports: [MatCardModule, MatChipsModule,MatProgressBarModule, 
    MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatIconModule],
  
  templateUrl: './recover-pass.component.html',
  styleUrl: './recover-pass.component.scss'
})
export class RecoverPassComponent {

  valForm!: FormGroup;

  constructor(private router: Router) { }

  save(): void {
    if (this.valForm.valid) {
      console.log(this.valForm.value);
    }
    this.router.navigate(['']);
  }
}
