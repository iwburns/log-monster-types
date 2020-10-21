
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
  group: String,
  occurred: Date,
  text: String,
}

export function createEntry(level: Level, group: String, occurred: Date, text: String): Entry {
  return {
    level,
    group,
    occurred,
    text,
  };
}

export interface LoggingStrategy {
  log: (entry: Entry) => boolean;
  find_logs: (level: String, group: String) => Array<Entry>;
}
