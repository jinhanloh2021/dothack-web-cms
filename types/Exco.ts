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
