import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Skills } from './components/skills/skills';
import { ExperienciaComponent } from './components/experiencia/experiencia';
import { Contato } from './components/contato/contato';

@Component({
  selector: 'app-root',
  imports: [Hero, Skills, ExperienciaComponent, Contato],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
