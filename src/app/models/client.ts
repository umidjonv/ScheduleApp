export interface Client {
    id: number;
    name: string;
    secret: string;
    isApproved: boolean;
    hookUrl: string;
}
