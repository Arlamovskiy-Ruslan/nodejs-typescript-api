declare namespace Express {
    export interface Request {
        firstName?: string;
        dateOfBirth?: string;
        dateOfMarred?: string;
        sex?: [string , string];
        children?: string;
    }
}