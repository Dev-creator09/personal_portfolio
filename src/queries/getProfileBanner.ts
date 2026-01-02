// queries/getProfileBanner.ts
import { ProfileBanner } from '../types';
import profileBannerData from '../data/profileBanner.json';

export async function getProfileBanner(): Promise<ProfileBanner> {
  return Promise.resolve(profileBannerData as ProfileBanner);
}
