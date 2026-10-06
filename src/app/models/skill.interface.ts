// src/app/models/skill.interface.ts
// Contrato de dados para uma Habilidade Técnica

export type CategoriaSkill = 'FullStack' | 'Banco de Dados';
export type NivelSkill = 'Domino' | 'Uso no dia a dia' | 'Praticando';

export interface Skill {
  nome: string;
  categoria: CategoriaSkill;
  nivel: NivelSkill;
  descricao: string;
}
