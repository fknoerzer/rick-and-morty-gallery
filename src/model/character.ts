import {Origin} from "./origin";
import {Location} from "./location";

export type Character = {
    id: number
    name: string
    species: string
    image: string
    status: string;
    origin:Origin;
    gender: string;
    location:{name:string};

}
