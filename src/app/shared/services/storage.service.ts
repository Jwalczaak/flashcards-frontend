import { inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE } from '../tokens';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storage: Storage = inject(LOCAL_STORAGE) as Storage;

  setItem<T>(key: string, value: T): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string): T | null {
    const storedValue = this.storage.getItem(key);
    return storedValue ? (JSON.parse(storedValue) as T) : null;
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }
}
