import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit, OnDestroy {



  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer.pipe(
      debounceTime(700),
      distinctUntilChanged()
    ).subscribe(val => {
      this.onDebounce.emit(val);
    });
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }


  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  @Input()
  public placeholder: string = "";

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string): void {
    this.debouncer.next(searchTerm);
  }
}
