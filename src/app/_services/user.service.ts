﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { User } from '../_models/index';

@Injectable()
export class UserService {

  public selectedUser: User;

    constructor(private http: HttpClient) { }


        getAll() {
            return this.http.get<User[]>(environment.apiEndpoint + '/user');
        }

        getById(id: number) {
            return this.http.get('/api/user/' + id);
        }

        create(user: User) {
            return this.http.post(environment.apiEndpoint + '/user', user);
        }

        update(user: User) {
            return this.http.put(environment.apiEndpoint + '/user/' + user.id, user);
        }

        delete(id: number) {
            return this.http.delete(environment.apiEndpoint + '/user/' + id);
        }
}
