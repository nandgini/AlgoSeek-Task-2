import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { RegistrationComponent } from '../../components/registration/registration.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, RegistrationComponent, FooterComponent],
  template: `
    <main class="home-container">
      <app-header></app-header>
      <app-hero></app-hero>
      <app-registration></app-registration>
      <app-footer class="footer-container"></app-footer>
    </main>
  `,
  styles: [`
    .home-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    .footer-container{
    line-height: 140px;
    }
  `]
})
export class HomeComponent {}