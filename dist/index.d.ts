/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
export declare let baseUrl: string;
export declare function createAccount(username: string, password: string, email: string): Promise<any>;
export declare function deleteAccount(username: string, password: string): Promise<any>;
export declare function createToken(username: string, password: string, permissions?: string[]): Promise<any>;
export declare function deleteToken(username: string, password: string, token: string): Promise<any>;
export declare function login(token: string): Promise<any>;
export declare function refreshToken(token: string): Promise<any>;
export declare function updateUsername(token: string, newUsername: string): Promise<any>;
export declare function updatePassword(token: string, oldPassword: string, newPassword: string): Promise<any>;
export declare function updateEmail(token: string, newEmail: string): Promise<any>;
export declare function createData(token: string, data: object | string): Promise<any>;
export declare function updateData(token: string, data: object): Promise<any>;
export declare function getData(token: string, id: string): Promise<any>;
export declare function deleteData(token: string, id: string): Promise<any>;
export declare function setPermissions(token: string, dataId: string, permissions: string[], user: string): Promise<any>;
export declare function removeUser(token: string, dataId: string, user: string): Promise<any>;
