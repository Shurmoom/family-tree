export interface Person {
    name: string;
    gender?: string;
    id?: number;
    firstParent?: number;
    secondParent?: number;
    marriedTo?: number;
    birthDate?: Date;
    deathDate?: Date;
}