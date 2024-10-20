export interface ProfileUser {
    id: string;
    firstName: string;
    lastName?: string | null;
    username: string;
    gender?: string | null;
    age?: number | null;
    country?: string | null;
    email: string;
};