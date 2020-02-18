export class InvoiceItem {
  public date: string;
  public description: string;
  public applicant: string;
  public amount: string;

  constructor(date: string,
    description: string,
    applicant: string,
    amount: string) {
    this.date = date;
    this.description = description;
    this.applicant = applicant;
    this.amount = amount
  }
  
}