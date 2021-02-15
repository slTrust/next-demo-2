import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column('varchar')
    title: string;
    @Column('text')
    content: string;

    // Partial 代表不用把Post的所有属性传进来
    constructor(attributes: Partial<Post>) {
        Object.assign(this, attributes);
    }
}

/*
@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column('varchar')
    title: string;
    @Column('text')
    content: string;
    // 啰嗦的方式
    constructor(title:string,content:string) {
        this.title = title;
        this.content = content;
    }
}

// 另一种方式:这个会有问题
@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn('increment')
    id: number;

    constructor(
        @Column('varchar') public title:string,
        @Column('text') public content:string
        ) {
    }
}
*/
