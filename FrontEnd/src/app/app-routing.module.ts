import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TripsComponent } from './trips/trips.component';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';


// const routes: Routes =[{
// path: '', component : HomeComponent,
//         children: [
//                   {path: 'users', component: UserComponent},
//                   {path: 'trips', component: TripsComponent},
//                   {path: 'expensedetails', component: ExpenseDetailsComponent},
//                 ]
//             },
//         ];


const routes: Routes =[
    {path: '', component: HomeComponent},
    {path: 'trips', component: TripsComponent},
    {path: 'expensedetails', component: ExpenseDetailsComponent},
    { path: 'users', loadChildren: './user/user.module#UserModule' },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
