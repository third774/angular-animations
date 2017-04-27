import {animate, state, style, transition, trigger} from '@angular/animations';

export const selectedState = trigger('selectedState', [
  state('not-selected', style({
    '-webkit-box-shadow': 'none',
    '-moz-box-shadow': 'none',
    'box-shadow': 'none',
    'transform': 'scale(1.00)'
  })),
  state('selected', style({
    '-webkit-box-shadow': '0px 9px 23px 3px rgba(0,0,0,0.33)',
    '-moz-box-shadow': '0px 9px 23px 3px rgba(0,0,0,0.33)',
    'box-shadow': '0px 9px 23px 3px rgba(0,0,0,0.33)',
    '-webkit-transition': 'all 0.3s',
    '-moz-transition': 'all 0.3s',
    '-ms-transition': 'all 0.3s',
    '-o-transition': 'all 0.3s',
    'transition': 'all 0.3s',
    'transform': 'scale(1.03)'
  })),
  transition('not-selected => selected', animate('300ms ease-in')),
  transition('selected => not-selected', animate('300ms ease-out'))
]);

export const projectListStateTrigger = trigger('projectListState', [
  transition(':leave', [
    animate(100, style({
      transform: 'translateY(8px) scale(1.03)',
    })),
    animate('230ms ease-in', style({
      transform: 'translateY(8px) translateX(-400px)',
      opacity: 0
    }))
  ]),
  transition(':enter', [
    style({
      transform: 'translateY(400px)',
      opacity: 0
    }),
    animate('230ms ease-out')
  ]),
  transition('slidUp => slidDown', [
    style({
      transform: 'translateY(-180%)'
    }),
    animate('300ms ease-out', style({
      transform: 'translateY(0)'
    }))
  ]),
  transition('slidDown => slidUp', [
    style({
      transform: 'translateY(0)'
    }),
    animate('300ms ease-in', style({
      transform: 'translateY(-180%)'
    }))
  ])
]);

export const statusChanged = trigger('statusChanged', [
  transition('* => *', [
    style({
      transform: 'scale(1)'
    }),
    animate(150, style({
      transform: 'scale(1.45)'
    })),
    animate(150)
  ])
]);

export const creatingProjectState = trigger('creatingProject', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)'
    }),
    animate('300ms ease-out', style({
      transform: 'translateY(0)'
    }))
  ]),
  transition(':leave', [
    style({
      transform: 'translateY(0)'
    }),
    animate('300ms ease-in', style({
      transform: 'translateY(-100%)'
    }))
  ])
]);
