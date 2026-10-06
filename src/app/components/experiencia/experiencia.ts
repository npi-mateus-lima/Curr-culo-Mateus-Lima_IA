import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Experiencia } from '../../models/experiencia.interface';

@Component({
  selector: 'app-experiencia',
  imports: [],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienciaComponent {
  readonly experiencias = signal<Experiencia[]>([
    {
      id: 1,
      periodo: '2023 — 2025',
      cargo: 'Ensino Médio Técnico',
      instituicao: 'EEEP Mário de Alencar',
      descricao:
        'Formação profissionalizante com base sólida em lógica de programação, algoritmos e fundamentos da computação.',
      tipo: 'formacao',
      destaques: ['Lógica de Programação', 'Algoritmos', 'Fundamentos de TI'],
    },
    {
      id: 2,
      periodo: '2025 — Presente',
      cargo: 'Programador Júnior',
      instituicao: 'Atuação Profissional',
      descricao:
        '1 ano de experiência no desenvolvimento e sustentação de sistemas desktop em Delphi 7, regras de negócio corporativas e consultas relacionais no SQL Server.',
      tipo: 'trabalho',
      destaques: ['Delphi 7', 'SQL Server', 'Regras de Negócio', 'Desktop'],
    },
    {
      id: 3,
      periodo: '2026 — Presente',
      cargo: 'Análise e Desenvolvimento de Sistemas (Graduação)',
      instituicao: 'UniAteneu',
      descricao:
        'Ensino superior em andamento focado em engenharia de software, modelagem de sistemas e expansão para a Web moderna com Angular, TypeScript e SCSS.',
      tipo: 'evolucao',
      destaques: ['Engenharia de Software', 'Angular', 'TypeScript', 'Web Moderna'],
    },
  ]);
}
