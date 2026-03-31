import { signal, WritableSignal } from '@angular/core';

export class Tile {
  private _position: number = 0;
  private _style: WritableSignal<string>;
  private _value: number | undefined;

  constructor() {
    this._style = signal("");
  }

  description(): string {
    return '';
  }

  get value(): number | undefined {
    return this._value;
  }

  set value(newValue: number | undefined) {
    this._value = newValue;
  }

  get style(): WritableSignal<string> {
    return this._style;
  }

  set position(index: number) {
    this._position = index;
  }
}
