import { Comment } from "./comment";

export class Gadget {
    name: string;
    id: string;
    image: string;
    description: string;
    mrp: string;
    dealprice: string;
    comments: Comment[];
}