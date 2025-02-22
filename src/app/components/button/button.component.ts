import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, HlmButtonDirective],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() color: string = '';

  @Output() buttonClick = new EventEmitter();

  onClick() {
    this.buttonClick.emit();
  }
}
