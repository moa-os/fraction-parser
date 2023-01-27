export interface NumberLookupMapStructure {
  [key: string]: {
    vulgar: string;
    fraction: string;
  };
}

export interface ToFractionOptions {
  useUnicodeVulgar?: boolean;
}
