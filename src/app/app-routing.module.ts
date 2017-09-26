import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NounsComponent } from './noun.component';
import { VerbsComponent } from './verbs.component';
import { AdjustiveComponent } from './adjustives.component';
import { WordDetailComponent } from './word-detail.component';

const routes: Routes = [
    {
        path: 'nouns',
        component: NounsComponent
    },
    {
        path: 'verbs',
        component: VerbsComponent
    },
    {   // 重定向，默认情况下定位到nouns
        path: '',
        redirectTo: '/nouns',
        pathMatch: 'full'
    },
    {
        path: 'adjustive',
        component: AdjustiveComponent
    },
    {
        path: 'detail/:id',
        component: WordDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
