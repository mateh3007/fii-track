export interface IAlphaVantageRequest {
  alphaVantage(fii: string): Promise<any>;
}
