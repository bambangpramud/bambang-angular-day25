import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Product } from './models/product';
import { IPost } from './interfaces/i-post';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  posts:IPost[]=[];
 products:Product[];
 productService:ProductsService;
  constructor(private postService : PostService){
    this.products=[];
    this.productService= new ProductsService();
  }

ngOnInit(): void {
  // this.products = this.productService.getProducts();
  this.posts = this.postService.getAllPost();
}

getProducts(){
  // this.products = this.productService.getProducts();
}
}


