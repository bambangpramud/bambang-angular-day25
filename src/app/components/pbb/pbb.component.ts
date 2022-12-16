import { Component } from '@angular/core';

@Component({
  selector: 'app-pbb',
  templateUrl: './pbb.component.html',
  styleUrls: ['./pbb.component.css']
})
export class PbbComponent {
lt:number=0;
lb:number=0;
njopt:number=0;
njopb:number=0;
ht:number=0;
hb:number=0;
pbb:number=0;
result:string='';


constructor(){

}


hitungPbb(){
  this.ht = this.lt * this.njopt;
    this.hb = this.lb * this.njopb;

    this.pbb = ((((this.ht + this.hb) - 12_000_000) * 20 / 100) * 5 / 1000) - 15000

this.result="Harga Tanah : " + this.ht + " <br/> Harga Bangunan : " + this.hb + " <br/> dan total PBB : " + this.pbb;

}

}
