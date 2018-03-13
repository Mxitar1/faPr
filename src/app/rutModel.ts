import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { HomComponent } from './components/hom/hom.component';
import { AbautComponent } from './components/abaut/abaut.component';
import { ContactComponent } from './components/contact/contact.component';
import { ImijsComponent } from './components/imijs/imijs.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import {MapComponent} from './components/map/map.component';
import { Pej1Component } from './components/pej1/pej1.component';

const appRoutes: Routes = [

    { path: 'pej1', component: Pej1Component },
    { path: 'peg', component: HomComponent },
    { path: 'abut',     component: AbautComponent },
    { path: 'cont',     component: ContactComponent },
    { path: 'img',     component: ImijsComponent },
    { path: 'Sub',     component: SubscribeComponent },
    { path: 'Test',     component: TestimonialsComponent },
    { path: 'map',     component: MapComponent },
    { path: '',   redirectTo: '/hom', pathMatch: 'full' },
    { path: '**', component: HomComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
