export interface AuthToken {
    token: string;
    username: string;
}

export interface Register {
    response: string;
}

export interface GetRecords {
    response: Record[];
}

export interface Record {
    user_id: number;
    date: string;
    weight: number;
    record_date: string;
}

