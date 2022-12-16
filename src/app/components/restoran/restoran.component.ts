import { Component } from '@angular/core';
import { IMenu } from 'src/app/interfaces/i-menu';

@Component({
  selector: 'app-restoran',
  templateUrl: './restoran.component.html',
  styleUrls: ['./restoran.component.css']
})
export class RestoranComponent {
  menus: IMenu[] = [];
  menu: IMenu;
  pajakPPN: number = 11 / 100;
  totalHarga: number = 0;
grandTotal:number=0;
  uang:number=0;
  kembalian:number=0;
  resultBayar:string="";
  constructor() {
    this.menu = {
      namaMakanan: "",
      jumlahMakanan: 0,
      hargaMakanan: 0,
      harga:0
    }

  }


  addMakanan() {
    this.menu.harga=this.menu.hargaMakanan * this.menu.jumlahMakanan;
    let temp: IMenu={
      namaMakanan:this.menu.namaMakanan,
      jumlahMakanan:this.menu.jumlahMakanan,
      hargaMakanan:this.menu.hargaMakanan,
      harga:this.menu.harga
    }
   
    this.menus.push(temp);
    
    this.totalHarga += this.menu.harga;
    this.grandTotal=this.totalHarga+(this.totalHarga*this.pajakPPN);
  }

  remove(index:number){
  this.totalHarga -= this.menus[index].harga
  this.grandTotal=this.totalHarga+(this.totalHarga*this.pajakPPN);
this.menus.splice(index,1)
  }

  bayar(){
    this.kembalian=this.uang-this.grandTotal;
    if (this.kembalian>0) {
      this.resultBayar="terimakasih telah makan di warung uhuy , kembalian anda : IDR"+this.kembalian
      this.menus.length=0;
      this.grandTotal=0;
    } else {
      this.resultBayar="maaf uang anda kurang, silahkan cuci piring "
    }
  }

}