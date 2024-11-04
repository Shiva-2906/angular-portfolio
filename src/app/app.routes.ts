import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Home page
  { path: 'home', component: HomeComponent },  // Home path
  { path: 'about', component: AboutComponent },  // About page
  { path: 'projects', component: ProjectsComponent },  // Projects page
  { path: 'skills', component: SkillsComponent },  // Skills page
  { path: 'education', component: EducationComponent },  // Education page
  { path: 'contact', component: ContactComponent },  // Contact page
  { path: '**', redirectTo: '' }  // Wildcard route to redirect to home
];