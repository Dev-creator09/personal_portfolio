// queries/getProjects.ts
import { Project } from '../types';
import projectsData from '../data/projects.json';

export async function getProjects(): Promise<Project[]> {
  return Promise.resolve(projectsData as Project[]);
}
