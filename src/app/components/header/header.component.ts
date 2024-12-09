import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { NavItem } from '../../shared/types/navigation.types';
import { NAV_ITEMS } from '../../shared/constants/navigation.constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  navItems: NavItem[] = NAV_ITEMS;
}