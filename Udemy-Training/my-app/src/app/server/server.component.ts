import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    serverId = 10;
    serverStatus = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }
}