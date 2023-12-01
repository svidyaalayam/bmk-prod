import { CanActivateFn } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

 const aService = inject(AuthService);

 switch (state.url) {
  case '/logout':
  case '/studentdata':
    return aService.userLogged();


  case '/adminpanel':
  case '/checkuser':
  case '/classlist':
    return aService.getUserType() == 2;

  case '/varnamaala':
  case '/identify':
  case '/colorgame':
  case '/numbergame':
  case '/weekdaygame':
  case '/fruitsgame':
  case '/sabdams':
  case '/worksheets':
  case '/grammer':
  case '/books':
  case '/telwords':
  case '/padamulu':
        return aService.getUserType() == 0 || aService.getUserType() == 1 ;



 }
  


  return true;
};
