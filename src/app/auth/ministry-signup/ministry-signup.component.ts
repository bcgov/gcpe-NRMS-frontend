import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ministry-signup',
    templateUrl: './ministry-signup.component.html',
    styleUrls: ['./ministry-signup.component.scss']
})
export class MinistrySignupComponent implements OnInit {
    ngOnInit() {}

    constructor(private router: Router) {}

    createAccount() {
        this.router.navigate(['/follow']);
    }
}
