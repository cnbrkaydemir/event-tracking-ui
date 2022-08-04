import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { EventComponent } from 'src/app/pages/event/event.component';
import { EventCreatorComponent } from 'src/app/pages/event-creator/event-creator.component';
import { EventListComponent } from 'src/app/pages/event-list/event-list.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'event/:id',           component: EventComponent },
    { path: 'event-creator',           component: EventCreatorComponent },
    { path: 'event-list',           component: EventListComponent },
    
];
