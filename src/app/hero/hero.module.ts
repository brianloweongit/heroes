import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf  }                    from '@angular/core';
import { CommonModule }          from '@angular/common';

import { Hero }                  from './hero';
import { HeroDetailComponent }   from './hero-detail.component';
import { HeroesComponent }       from './heroes.component';
import { HeroSearchComponent }   from './hero-search.component';
import { HeroSearchService }     from './hero-search.service';

@NgModule({
  imports: [],
  exports: [HeroDetailComponent,HeroesComponent,HeroSearchComponent],
  declarations: [HeroDetailComponent,HeroesComponent,HeroSearchComponent],
  providers: [HeroSearchService],
})
export class HeroModule { }
