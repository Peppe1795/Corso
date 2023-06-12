import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Data } from 'src/app/auth/data.interface';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
user!: Data
  constructor(private authSrv: AuthService) { }

  ngOnInit(): void {
    const userString = localStorage.getItem('user');
  if (userString) {
    this.user = JSON.parse(userString);
  }
  }

  }


