import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contato {
  readonly githubUrl = signal('https://github.com/Mateus-Ed');
  readonly email = signal('mateus.eduardo.dev@exemplo.com');
  readonly copiado = signal(false);

  // Copia o e-mail para a área de transferência com feedback visual de 2s
  async copiarEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email());
      this.copiado.set(true);
      setTimeout(() => this.copiado.set(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar e-mail:', err);
    }
  }
}
