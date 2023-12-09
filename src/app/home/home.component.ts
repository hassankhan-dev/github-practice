import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngOnInit(){
    let obj:any = {
      token:"jdfhdljslfkjsdl"
    }

    localStorage.setItem("token",JSON.stringify(obj));

    let getToken:any = localStorage.getItem("token");
    let parseToken = JSON.parse(getToken);
    console.log(parseToken);
  }
}
