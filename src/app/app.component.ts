import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dashboard';

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle(this.title);
    this.meta.addTags([
      { name: 'description', content: 'Dashboard application for monitoring data and analytics' },
      { name: 'keywords', content: 'dashboard, angular, analytics' }
    ]);
  }
}
