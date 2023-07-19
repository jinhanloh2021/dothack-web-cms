// tightly coupled to groq query and Exco Schema
export interface ExcoQuery {
  name: string;
  position: string;
  term: string;
  imageSrc?: string;
  lqip?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    _type: string;
    width: number;
  };
}

export enum Position {
  President = 'President',
  VicePresidentInternal = 'Vice President (internal)',
  VicePresidentExternal = 'Vice President (external)',
  HonoraryGeneralSecretary = 'Honorary General Secretary',
  GeneralExecutive = 'General Executive',
  HonoraryFinanceSecretary = 'Honorary Finance Secretary',
  FinanceExecutive = 'Finance Executive',
  MarketingDirector = 'Marketing Director',
  MarketingExecutive = 'Marketing Executive',
  ProfessionalDevelopmentDirector = 'Professional Development Director',
  ProfessionalDevelopmentExecutive = 'Professional Development Executive',
  TechDirector = 'Tech Director',
  TechExecutive = 'Tech Executive',
  TrainingDirector = 'Training Director',
  TrainingExecutive = 'Training Executive',
  PublicRelationsDirector = 'Public Relations Director',
  PublicRelationsExecutive = 'Public Relations Executive',
  Other = 'Other',
}

export const excoSortOrder: { [position: string]: number } = {
  'President': 0,
  'Vice President (internal)': 10,
  'Vice President (external)': 20,
  'Honorary General Secretary': 30,
  'Honorary Finance Secretary': 40,
  'Marketing Director': 50,
  'Professional Development Director': 60,
  'Tech Director': 70,
  'Training Director': 80,
  'Public Relations Director': 90,
  'General Executive': 100,
  'Finance Executive': 110,
  'Marketing Executive': 120,
  'Professional Development Executive': 130,
  'Tech Executive': 140,
  'Training Executive': 150,
  'Public Relations Executive': 160,
  'Other': 170,
};