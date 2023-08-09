export interface Person {
    layer?: number;
    name: string;
    gender?: string;
    id?: number;
    firstParent?: number;
    secondParent?: number;
    marriedTo?: number;
    birthDate?: Date;
    deathDate?: Date;
}