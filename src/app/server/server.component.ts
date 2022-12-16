import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
//   templateUrl: './server.component.html',
template:`
<h1>{{name}}</h1>
`,
  styleUrls: ['./server.component.css']
})
export class serverComponent {
  name="Server Uhuy Gaming";
}
