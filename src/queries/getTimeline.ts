// queries/getTimeline.ts
import { TimelineItem } from '../types';
import timelineData from '../data/timeline.json';

export async function getTimeline(): Promise<TimelineItem[]> {
  return Promise.resolve(timelineData as TimelineItem[]);
}
