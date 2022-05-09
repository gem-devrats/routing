import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ErrorComponent } from './error/error.component';
import { OneComponent } from './one/one.component';
import { ParamComponent } from './param/param.component';

// const routes: Routes = [{path:'param/:id', component:ParamComponent,canActivate:[AuthGuard]},
// { path: 'college', loadChildren: () => import('./college/college.module').then(m => m.CollegeModule) },
// {path:'**',component:ErrorComponent}];

const routes: Routes = [{path:'', redirectTo:'/college',pathMatch:'full'},
  {path:'param/:id', component:ParamComponent,children:[
  {path:'one',component:OneComponent}
]},
{ path: 'college', loadChildren: () => import('./college/college.module').then(m => m.CollegeModule) },
{path:'**',component:ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
