export interface Student {
    id: number;
    name: string;
    lastname: string;
    average: number;
    classe?: string;
    successRate?: number;     // Pour percent
    scholarship?: number;      // Pour currency
    birthdate?: Date;          // Pour date
}