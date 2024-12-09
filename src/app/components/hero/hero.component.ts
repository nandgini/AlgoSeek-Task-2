import { Component } from '@angular/core';
import { HERO_CONTENT } from './hero.constants';
import { HeroContent } from './hero.types';


@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  content: HeroContent = HERO_CONTENT;

  onCtaClick(): void {
    console.log('CTA clicked');
  }
}