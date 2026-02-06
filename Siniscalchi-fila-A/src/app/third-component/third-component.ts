import { Component } from '@angular/core';
import { FourthComponent } from '../fourth-component/fourth-component';
@Component({
  selector: 'app-third-component',
  standalone: true,
  imports: [FourthComponent],
  templateUrl: './third-component.html',
  styleUrl: './third-component.css',
})
export class ThirdComponent {
  Siniscalchi='terzo';
}
