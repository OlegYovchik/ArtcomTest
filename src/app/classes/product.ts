export class Product {
  constructor(
    public ProductId: number,
    public ColorIdx: number,
    public ProductCode: number,
    public ProductDescription: string,
    public Price: number,
    public VoDatum: any,
    public IsHeavy: boolean,
    public RestrictedLands: any,
    public IsFsk: boolean,
    public IsOrdergruppeC: boolean
     ) { }
}
