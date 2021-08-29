declare namespace Express {
    export interface Request {
        firstName?: string;
        dateOfBirth?: string;
        dateOfMarred?: string;
        sex?: string;
        children?: string;
        role?: { role1: string, role2: string };
    }
}