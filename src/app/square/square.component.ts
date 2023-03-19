import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      {{value}}
    </p>
  `,
  styles: [`
    p {
      font-size: 50px;
    }
  `]
})
export class SquareComponent {

  @Input() value: 'X' | 'O' = 'O';

}
