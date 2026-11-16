export type CaseStudySummary = {
  slug: string;
  client: string;
  title: string;
  summary: string;
  tags: string[];
  /** Hidden studies keep their page and URL but are left out of every listing. */
  hidden?: boolean;
};

const allCaseStudies: CaseStudySummary[] = [
  {
    slug: 'aewa',
    client: 'Aewa · with Amanda',
    title: 'Building Aewa, an AI accent coach',
    summary:
      'Working with Amanda to turn her accent-coaching expertise into an AI product that helps people practise and improve their Australian accent.',
    tags: ['Product build', 'Speech AI', 'Web app'],
  },
  {
    slug: 'instant-scripts',
    client: 'InstantScripts',
    title: 'Quent at InstantScripts',
    summary:
      'Testing and quality at PR level: AI test generation, CI feedback on every pull request, and keeping tests current on GitHub.',
    tags: ['Quent test agent', 'CI', 'Mobile QA'],
    hidden: true,
  },
];

export const caseStudies = allCaseStudies.filter((s) => !s.hidden);
