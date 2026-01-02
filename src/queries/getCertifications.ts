// queries/getCertifications.ts
import { Certification } from '../types';
import certificationsData from '../data/certifications.json';

export async function getCertifications(): Promise<Certification[]> {
  return Promise.resolve(certificationsData as Certification[]);
}
