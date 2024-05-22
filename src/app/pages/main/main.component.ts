import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { TemplateComponent } from '../../shared/template/template.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, TemplateComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
