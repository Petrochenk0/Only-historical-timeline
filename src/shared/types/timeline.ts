export interface TimelineEvent {
  id: number;
  year: number;
  description: string;
}

export interface TimelinePeriod {
  id: number;
  startYear: number;
  endYear: number;
  events: TimelineEvent[];
}

export interface TimelineData {
  periods: TimelinePeriod[];
}
