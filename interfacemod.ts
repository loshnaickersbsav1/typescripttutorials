import { CategoryMod } from "./enummod";


interface Books  {

    id: number;
    title: string;
    author: string;
    available: boolean;
    category: CategoryMod;

}

export {Books};