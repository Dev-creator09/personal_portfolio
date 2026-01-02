// queries/getWorkPermit.ts
import { WorkPermit } from '../types';
import workPermitData from '../data/workPermit.json';

export async function getWorkPermit(): Promise<WorkPermit> {
  const data = {
    ...workPermitData,
    expiryDate: new Date(workPermitData.expiryDate)
  };
  return Promise.resolve(data as WorkPermit);
}
