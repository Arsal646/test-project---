import { Component } from '@angular/core';
import { TemplateComponent } from '../../shared/template/template.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TemplateComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
