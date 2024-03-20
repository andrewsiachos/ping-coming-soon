import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'ping-coming-soon';
  constructor(){}

  ngOnInit(): void {

  }

  onSubmit(){
    console.log('form submitted successfully');
  }
}
