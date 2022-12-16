import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/i-post';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor() { }

  getAllPost(): IPost[] {
    return [

      new Post(1, 'uhuy uhuy gaming', 'uhuy ohoy uhuy uhuy ternyata uhuy gaming uhuy ehey ohoy', true, 'https://picsum.photos/seed/picsum/200/300'),
      new Post(2, 'uhuy uhuy gaming', 'uhuy uhusdsay uhuy uhuy ternyata uhuy gaming uhuy ehey ohoy', true, 'https://picsum.photos/seed/picsum/200/300'),
      new Post(3, 'uhuy uhuy gaming', 'uhuy uhuy 3232 uhuy ternyata uhuy gaming uhuy ehey ohoy', true, 'https://picsum.photos/seed/picsum/200/300'),
      new Post(4, 'uhuy uhuy gaming', 'uhuy uhuy uhuy uhuy uhuwayww uhuy gaming uhuy ehey ohoy', true, 'https://picsum.photos/seed/picsum/200/300')

    ]

  }
}
