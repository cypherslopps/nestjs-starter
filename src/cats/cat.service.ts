import { Injectable } from "@nestjs/common";

@Injectable()
export class CatService {
    createNewCat(): string {
        return 'This action adds a new cat';
    }

    getAll(): string {
        return "This action returns all cats";
    }
}