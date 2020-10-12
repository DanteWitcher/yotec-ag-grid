import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EntityMapper } from './mappers/entity.mapper';
import { IEntity } from './interfaces/entity.interface';

@Injectable({providedIn: 'root'})
export class DataService {
    constructor(private httpClient: HttpClient) { }

    public getEntities(): Observable<IEntity[]> {
        // provided domain doesn't work
        // domain = https://www.googleapis.com
        // pathname = youtube/v3/search?key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk&maxResults=50&type=video&part=snippet&q=john
        const domain = 'http://localhost:3000';
        const pathname = 'table';

        return this.httpClient.get(`${domain}/${pathname}`).pipe(
            map((data: any[]) => {
                return data.map(EntityMapper.map);
            })
        );
    }
}
