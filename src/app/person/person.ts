export interface Person {
    id?: number;
    name: string;
    sonOf?: number[];
    marriedTo?: number;
    birthDate?: Date;
    deathDate?: Date;
}