import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
    summonNinjas(): string {
        return 'Converge!!!';
    }

    assembleNinjas(): string {
        return 'Assemble Ninjas';
    }
}
