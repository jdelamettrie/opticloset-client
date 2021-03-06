import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpdateItemPage } from './update-item.page';

const routes: Routes = [
  // {
  //   path: '/home/tabs/tab4/update-item/item',
  //   component: UpdateItemPage
  // }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UpdateItemPage]
})
export class UpdateItemPageModule {}
