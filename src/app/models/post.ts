export class Post {
    id: number;
    title: string;
    body: string;
    isPublished: boolean;
    imageUrl:string;

    constructor(id: number,
        title: string,
        body: string,
        isPublished: boolean,imageUrl:string) {

        this.id = id;
        this.title = title;
        this.body = body;
        this.isPublished = isPublished;
        this.imageUrl=imageUrl;

    }
}
