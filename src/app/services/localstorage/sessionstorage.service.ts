import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  private storage: Storage;
  constructor(storagemethod: Storage) {
    this.storage = storagemethod;
   }
   set(key: string, value: any): boolean{
    if (this.storage){
      this.storage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
   }

   get(key: string): any{
    if (this.storage){
      return this.storage.getItem(key);
    }
    return null;
   }

   remove(key: string): boolean{
    if (this.storage){
      this.storage.removeItem(key);
      return true;
    }
    return false;
   }

   clear(): boolean{
    if (this.storage){
      this.storage.clear();
      return true;
    }
    return false;
   }
}
