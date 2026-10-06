// src/app/models/experiencia.interface.ts
// Contrato de dados para itens da Linha do Tempo (Trajetória)

export type TipoExperiencia = 'formacao' | 'trabalho' | 'evolucao';

export interface Experiencia {
  id: number;
  periodo: string;
  cargo: string;
  instituicao: string;
  descricao: string;
  tipo: TipoExperiencia;
  destaques?: string[];
}
