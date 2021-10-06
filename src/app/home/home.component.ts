import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Lĩnh';
  public age = 25;
  public traiCay = ['Táo', 'Nho', 'Cam', 'Quýt'];

  constructor() { }

  public ngOnInit(): void {
    console.log('Trái cây = ', this.traiCay);
    
  }

}
