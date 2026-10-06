import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Skill } from '../../models/skill.interface';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  // 1. Estado de Origem: Categoria selecionada pelo usuário
  readonly filtroAtivo = signal<string>('Todos');

  // 2. Base de Dados: Suas habilidades reais cadastradas
  readonly skills = signal<Skill[]>([
    {
      nome: 'Delphi 7',
      categoria: 'FullStack',
      nivel: 'Domino',
      descricao: 'Desenvolvimento de sistemas desktop robustos, regras de negócio e componentes visuais.',
    },
    {
      nome: 'SQL Server',
      categoria: 'Banco de Dados',
      nivel: 'Domino',
      descricao: 'Modelagem relacional, criação de queries performáticas, views, triggers e rotinas de banco.',
    },
    {
      nome: 'HTML5 & CSS / SCSS',
      categoria: 'FullStack',
      nivel: 'Uso no dia a dia',
      descricao: 'Criação de interfaces semânticas, Design Tokens, Flexbox, CSS Grid e mixins reutilizáveis.',
    },
    {
      nome: 'Git & Versionamento',
      categoria: 'FullStack',
      nivel: 'Uso no dia a dia',
      descricao: 'Controle de versão de código, branches, commits estruturados e fluxo de trabalho em equipe.',
    },
    {
      nome: 'Angular 21/22 & TypeScript',
      categoria: 'FullStack',
      nivel: 'Praticando',
      descricao: 'Desenvolvimento de Single Page Applications modernas com Standalone Components e Signals.',
    },
  ]);

  // 3. Estado Derivado: Lista de categorias disponíveis nos botões
  readonly categorias = computed(() => {
    return ['Todos', 'FullStack', 'Banco de Dados'];
  });

  // 4. Estado Derivado Reativo: Habilidades filtradas conforme a seleção atual
  readonly skillsFiltradas = computed(() => {
    const filtro = this.filtroAtivo();
    if (filtro === 'Todos') {
      return this.skills();
    }
    return this.skills().filter((skill) => skill.categoria === filtro);
  });

  // 5. Ação do Usuário: Altera o filtro ativo
  setFiltro(categoria: string): void {
    this.filtroAtivo.set(categoria);
  }
}
