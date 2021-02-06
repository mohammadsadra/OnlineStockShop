export class ReportDTO {
  public Title: string;
  public Description: string;
  public AdvertismentId: string;

  constructor(Title: string,
              Description: string,
              AdvertismentId: string
  ) {
    this.Title = Title;
    this.Description = Description;
    this.AdvertismentId = AdvertismentId;
  }
}
