
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

export interface IMutation {
    createUser(email: string, password: string, name: string): Nullable<User> | Promise<Nullable<User>>;
    login(email: string, password: string): Nullable<string> | Promise<Nullable<string>>;
    logout(): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export interface IQuery {
    currentUser(): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
