import { Injectable, Inject } from '@angular/core';
import { RoomList } from '../rooms';
import { environment } from 'src/environtment/enironment';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/AppConfig.service';
import { AppConfig } from 'src/app/AppConfig/AppConfig.interface';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
  //root: it means that service is actually registered in the app.module.ts
  // singleton instance
})
export class RoomsService {
  roomList: RoomList[] = [];
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log(this.config.apiEndpoint);
    console.log('Rooms Service is initialised!');
  }

  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms');
  } //get method to fetch data/

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  } //post methods..to create data

  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  } //put method-- to update the data

  delete(id: string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  } // does not return anything..

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      { reportProgress: true }
    );

    return this.http.request(request);
  } // HttpRequest - to request data from an API
}
