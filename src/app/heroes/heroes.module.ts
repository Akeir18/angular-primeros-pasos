import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations: [
        HeroComponent,
        ListComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        HeroComponent,
        ListComponent
    ]
})
export class HeroesModule { }