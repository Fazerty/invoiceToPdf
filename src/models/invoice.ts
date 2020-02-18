import { InvoiceItem } from './invoiceItem';

export class Invoice {

  public customer: string;

  public department!: string;

  public customerAddress: string;

  public customerAddress2!: string;

  public customerState: string;

  public customerCity: string;

  public customerZipCode: string;

  public invoiceNumber: string;
  public invoiceDate: string;
  public billingDate: string;

  public items: InvoiceItem[];

  public invoiceTotal: number;
  public amountPaid: number;
  public amountDue: number;

  constructor(customer: string, customerAddress: string,
    customerState: string
    , customerCity: string
    , customerZipCode: string, invoiceNumber: string,
    invoiceDate: string,
    billingDate: string,
    invoiceTotal: number,
    amountPaid: number,
    amountDue: number,
    items: InvoiceItem[]) {
    this.customer = customer;
    this.customerAddress = customerAddress;
    this.customerState = customerState;
    this.customerCity = customerCity;
    this.customerZipCode = customerZipCode;
    this.invoiceNumber = invoiceNumber,
      this.invoiceDate = invoiceDate,
      this.billingDate = billingDate,
      this.invoiceTotal = invoiceTotal,
      this.amountPaid = amountPaid,
      this.amountDue = amountDue,
      this.items = items
  }
}