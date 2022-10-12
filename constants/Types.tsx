export interface UserProps {
    id?: number;
    email: string;
    first_name: string;
    last_name: string;
    about?: string;
}

export interface WinProps {
    id?: number;
    winText: string;
    user: UserProps;
    respectCount?: number;
    respectedBy?: string[];

}