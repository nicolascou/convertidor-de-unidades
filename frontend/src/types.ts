interface UnitProps {
  symbol: string;
  name?: string;
}
export interface ConversionProps {
  id: number;
  from_unit: UnitProps;
  to_unit: UnitProps;
  input: number;
  output: number;
}