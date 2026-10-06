import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  // Dados Pessoais Reativos usando Signals
  readonly nome = signal('Mateus Eduardo de Lima Nascimento');
  readonly papel = signal('Dev');
  readonly bio = signal(
    'Desenvolvedor focado em soluções robustas, unindo solidez de banco de dados com a agilidade do ecossistema Angular.'
  );
  
  // Avatar tech estilizado gerado via Dicebear API
  readonly avatarUrl = signal(
    'https://api.dicebear.com/8.x/bottts-neutral/svg?seed=MateusDev&backgroundColor=0a0e17'
  );
}
