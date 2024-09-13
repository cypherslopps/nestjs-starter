import { Controller, Get } from '@nestjs/common';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjaService: NinjasService) {}

    @Get() 
    summonNinjas(): string {
        return this.ninjaService.summonNinjas();
    }

    @Get("assemble")
    assembleNinjas(): string {
        return this.ninjaService.assembleNinjas();
    }
}
