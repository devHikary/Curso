import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoModule } from '../photo/photo-module';
import { CardModule } from '../shared/component/card/card.module';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { ButtonComponent } from './button/button.component';
import { PhotoListComponent } from './photo-list.component';
import { FilterByDescription } from './photos/filter-by-description';
import { PhotosComponent } from './photos/photos.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations:[
    PhotoListComponent,
    PhotosComponent,
    ButtonComponent,
    FilterByDescription,
    SearchComponent

  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkenOnHoverModule

  ]
})
export class PhotoListModule{}
