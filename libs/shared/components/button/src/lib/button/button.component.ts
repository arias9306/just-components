import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cmp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {}
