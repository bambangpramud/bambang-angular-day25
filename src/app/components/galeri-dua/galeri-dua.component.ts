import { Component } from '@angular/core';

@Component({
  selector: 'app-galeri-dua',
  templateUrl: './galeri-dua.component.html',
  styleUrls: ['./galeri-dua.component.css']
})
export class GaleriDuaComponent {
images: string[]=[
  // "https://picsum.photos/300/300?random=1",
  // "https://picsum.photos/300/300?random=2",
  // "https://picsum.photos/300/300?random=3",
  // "https://picsum.photos/300/300?random=4",
]

  addImage(){
    let randomNumber : number = Math.floor(Math.random()*60)
this.images.push( `https://picsum.photos/300/300?random=${randomNumber}`)
  }
}
