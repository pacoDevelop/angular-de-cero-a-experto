import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _tagsHistory: string[] = [];

  constructor() { }

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
  }


  public searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);
  }
}
