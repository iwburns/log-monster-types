export enum Level {
  Trace = 1,
  Debug = 2,
  Info = 3,
  Warn = 4,
  Error = 5,
  Fatal = 6,
}

export interface Entry {
  level: Level,
  group: string,
  occurred: Date,
  text: string,
}

export function createEntry(level: Level, group: string, occurred: Date, text: string): Entry {
  return {
    level,
    group,
    occurred,
    text,
  };
}

export interface LoggingStrategy {
  log: (entry: Entry) => boolean;
  findLogs: (level: Level, group: string) => Array<Entry>;
}
