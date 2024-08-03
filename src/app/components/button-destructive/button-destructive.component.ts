import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-button-destructive',
  standalone: true,
  imports: [HlmButtonDirective],
  templateUrl: './button-destructive.component.html',
  styleUrl: './button-destructive.component.scss'
})
export class ButtonDestructiveComponent {
  @Input() text: string = '';
  @Output() buttonClick = new EventEmitter();

  onClick() {
    this.buttonClick.emit();
  }
}
