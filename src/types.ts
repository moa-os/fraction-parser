export interface numberLookupMapStructure {
  [key: string]: {
    vulgar: string;
    fraction: string;
  };
}

export interface toFracionParams {
  value: number;
  options: toFractionOptions;
}

export interface toFractionOptions {
  useUnicodeVulgar: boolean;
}
