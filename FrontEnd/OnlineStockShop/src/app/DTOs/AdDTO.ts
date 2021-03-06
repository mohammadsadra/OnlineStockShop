import DateTimeFormat = Intl.DateTimeFormat;

export class AdDTO {
  public Title: string;
  public City: string;
  public Region: string;
  public Status: string;
  public Address: string;
  public Description: string;
  public PictureLink: string;
  public PhoneNumber: string;
  public ExpireDate: Date;
  public UserId = '1';
  public CategoryId: string;
  public Price: number;

  constructor(Title: string,
              City: string,
              Region: string,
              Status: string,
              Address: string,
              Description: string,
              PictureLink: string,
              PhoneNumber: string,
              ExpireDate: Date,
              CategoryId: string,
              Price: number
  ) {
    this.Title = Title;
    this.City = City;
    this.Region = Region;
    this.Status = Status;
    this.Address = Address;
    this.Description = Description;
    this.PictureLink = PictureLink;
    this.PhoneNumber = PhoneNumber;
    this.ExpireDate = ExpireDate;
    this.CategoryId = CategoryId;
    this.Price = Price;
  }
}
