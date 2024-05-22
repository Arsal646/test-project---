import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  onSubmit(form: NgForm) {
    this.authService.login(form.value).subscribe((res: any) => {
      this.authService.setToken(res.refresh);
      this.router.navigate(['/home']);
    });
  }
}
