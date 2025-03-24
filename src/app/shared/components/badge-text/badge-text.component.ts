import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { BadgeColor } from '../../types/badge.type';

@Component({
  selector: 'app-badge-text',
  imports: [CommonModule],
  templateUrl: './badge-text.component.html',
  styleUrl: './badge-text.component.scss',
})
export class BadgeTextComponent {
  badgeName = input.required<string>();
  badgeColor = input.required<BadgeColor>();
}
