import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    ngOnInit() {}

    constructor(private router: Router) {}

    createAccount() {
        this.router.navigate(['/ministry-signup']);
    }
}
