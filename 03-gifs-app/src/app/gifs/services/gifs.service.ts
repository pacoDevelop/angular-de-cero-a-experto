import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = "vngIvDRS2OILWpDqSqYH3QRYN2Ys9jEr"
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs'

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory]
  }

  public organizeHistory(tag: string) {
    tag = tag.toLocaleLowerCase();
    if (this.tagsHistory.includes(tag)) {
      this._tagsHistory = this.tagsHistory.filter(oldTag => oldTag.toLocaleLowerCase() !== tag)
    }
    this._tagsHistory.unshift(tag)
    this._tagsHistory = this.tagsHistory.splice(0, 10)
    this.saveLocalStorage();
  }


  public searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=vngIvDRS2OILWpDqSqYH3QRYN2Ys9jEr&q=valorant&limit=10')
    //   .then(res => res.json()).then(data => console.log(data))
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe(res => {
        this.gifList = res.data
      })
  }

  public getGifsByTag(index: number) {
    const tag: string = this.tagsHistory[index]
    this.searchTag(tag)
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }

  private loadLocalStorage(): void {
    const data = localStorage.getItem("history")
    if (!data) return;
    this._tagsHistory = JSON.parse(data);
    if (this._tagsHistory.length === 0) return;
    this.searchTag(this.tagsHistory[0]);
  }
}
