import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { YoutubeResponse } from '../models/youtube.models';

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

  getVideos(){
    const url = `${this.youtubeUrl}/playlistItems?`;
    const params =  new HttpParams()
    .set('part', 'snippet')
    .set('maxResults', '10')
    .set('playlistId', this.playList)
    .set('key', this.apikey)
    .set('pageToken', this.nextPageToken);
    return this.http.get<YoutubeResponse>(url, {params})
    .pipe(
      map(
        data => {
          this.nextPageToken = data.nextPageToken;
          return data.items;
        }
      ),
      map(
        items => items.map(video => video.snippet)
      )
    );
  }
}
