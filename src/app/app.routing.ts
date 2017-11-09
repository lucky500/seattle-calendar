import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent} from './about/about.component';
import { NavComponent} from './nav/nav.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'nav',
    component: NavComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'events/:id',
    component: DetailComponent
  },
  {
    path: 'user',
    component: AdminComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
