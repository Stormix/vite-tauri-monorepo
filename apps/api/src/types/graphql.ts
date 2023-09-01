
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface User {
    id: string;
    email: string;
    name: string;
}

export interface IQuery {
    users(): User[] | Promise<User[]>;
}

type Nullable<T> = T | null;
