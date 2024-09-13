import { Controller, Get, HttpCode, Post, Req, Redirect } from "@nestjs/common";
import { CatService } from "./cat.service";
import { Request } from "express";

@Controller("cats")
export class CatController {
    constructor(private readonly catService: CatService) {}

    @Post()
    @HttpCode(204)
    create(): string {
        return this.catService.createNewCat();
    }

    @Get()
    findAll(@Req() request: Request): string {
        console.log(request);
        return this.catService.getAll();
    }

    @Get("redirect")
    @Redirect("https://docs.nestjs.com/controllers", 301)
    redirect(): string {
        return "Redirecting";
    }
}