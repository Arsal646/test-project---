import { Component, OnInit, inject } from '@angular/core';
import { TemplateComponent } from '../../shared/template/template.component';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TemplateComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.authService.getBooking().subscribe((res) => {
      console.log(res);
    });
  }
  authService = inject(AuthService);
}
