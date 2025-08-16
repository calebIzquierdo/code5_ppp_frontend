import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SidebarComponent {
  @Input() collapsed: boolean = false;

  constructor(private router: Router) {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

