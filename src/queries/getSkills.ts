// queries/getSkills.ts
import { Skill } from '../types';
import skillsData from '../data/skills.json';

export async function getSkills(): Promise<Skill[]> {
  return Promise.resolve(skillsData as Skill[]);
}
