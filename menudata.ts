import {Item, Menu} from "./menu";


export const MenuData:Menu[] =[new Menu('Claim','pi pi-fw pi-plus',[new Item('Create','',''),
  new Item('Edit','',''),
  new Item('View Status','','')],''),

  new Menu('Policy Dashboard','pi pi-fw pi-plus',[
    new Item('Renew','',''),
    new Item('View Status','','')],''),

  new Menu('Vehicle','pi pi-fw pi-plus',[
    new Item('View','','')],''),



  new Menu('Accounts','pi pi-fw pi-plus',[
    new Item('My Profile','',''),
    new Item('Logout','pi pi-fw pi-sign-out','')
  ],''),



]
