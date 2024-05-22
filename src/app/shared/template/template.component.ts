import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss',
})
export class TemplateComponent {
  @Input({
    required: true,
  })
  page_name!: string;
}
