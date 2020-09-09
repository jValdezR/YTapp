import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private apikey = 'AIzaSyBBYYqCet-_bOe3vZ3p_LqI2obTvM3XzmA';
  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private playList = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken = '';


  constructor(private http: HttpClient) { 

    

  }

  getVideos(): Observable<any>{
    const url = `${this.youtubeUrl}/playlistItems?`;
    const params =  new HttpParams()
    .set('part','snippet')
    .set('maxResults','10')
    .set('playlistId',this.playList)
    .set('key',this.apikey)
    return this.http.get(url, {params});
  }
}
