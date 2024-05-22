import { Component } from '@angular/core';
import { TemplateComponent } from '../../shared/template/template.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TemplateComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
