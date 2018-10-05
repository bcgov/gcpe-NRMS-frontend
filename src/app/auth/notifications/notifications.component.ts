import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
    ngOnInit() {}

    constructor(private router: Router) {
    }

    done() {
        this.router.navigate(['/signup-complete']);
    }
}
