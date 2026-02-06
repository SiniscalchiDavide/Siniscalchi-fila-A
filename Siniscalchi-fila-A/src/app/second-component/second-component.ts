import { Component } from '@angular/core';
import { ThirdComponent } from '../third-component/third-component';

@Component({
  selector: 'app-second-component',
  standalone: true,
  imports: [ThirdComponent],
  templateUrl: './second-component.html',
  styleUrl: './second-component.css',
})
export class SecondComponent {

}