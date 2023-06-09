import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/auth/data.inetrface';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

    user!: Data | null;

    constructor(private authSrv: AuthService) {}

    ngOnInit(): void {
        this.authSrv.user$.subscribe((_user) => {
            this.user = _user;
        });
    }

    logout() {
        this.authSrv.logout();
    }
}
