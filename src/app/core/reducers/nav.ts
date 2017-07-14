import {MenuItem} from "primeng/primeng";
import {LOGIN, LOGGED_OUT, LOGGED_IN, LOGOUT} from "../actions/auth";
import {Action} from "@ngrx/store";

export interface NavState {
  items: MenuItem[];
}

const menuItems_loggedOut: MenuItem[] = [
  {
    label: 'Home',
    icon: 'fa-home',
    routerLink: ['/']
  },
  {
    label: 'Login',
    icon: 'fa-sign-in',
    routerLink: ['/login/']
  }
];

const menuItems_loggedIn: MenuItem[] = [
  {
    label: 'Home',
    icon: 'fa-home',
    routerLink: ['/']
  },
  {
    label: 'Events',
    icon: 'fa-calendar',
    routerLink: ['/events/']
  },
  {
    label: 'Profile',
    icon: 'fa-user-o',
    routerLink: ['/profile/'],
    items: [
      {
        label: 'Edit',
        routerLink: ['/profile/edit/']
      }
    ]
  },
  {
    label: 'Logout',
    icon: 'fa-sign-out',
    routerLink: ['/logout/']
  }
];

export const initialNavState: NavState = {
  items: menuItems_loggedOut
};

export function navReducer(state: NavState, action: Action): NavState {
  switch (action.type) {
    case LOGGED_IN:
      return Object.assign({}, state, {
        items: menuItems_loggedIn
      });

    case LOGGED_OUT:
      return Object.assign({}, state, {
        items: menuItems_loggedOut
      });

    default:
      return state;
  }
}
