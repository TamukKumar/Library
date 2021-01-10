import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     return this.getCoordinates().then(x => {
      if(x.coords.latitude < 8 || x.coords.latitude > 37) {
        return false;
      }

      if(x.coords.longitude < 68 || x.coords.longitude > 97){
        return false;
      }

      return true;
     })
  }

  getCoordinates(){
    return new Promise<any>(function(resolve, reject){
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }
}
