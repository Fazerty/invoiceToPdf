import { Invoice } from '@/models/invoice';
import { InvoiceItem } from '@/models/invoiceItem';


export class InvoiceService {

  private invoices: Invoice[] = new Array<Invoice>();


  public getInvoices(): Invoice[] {
    const inv1Items: InvoiceItem[] = new Array<InvoiceItem>();
    inv1Items.push(new InvoiceItem("Dec 2 2019", "Background Check", "Rebecca Steel", "14.95"));
    inv1Items.push(new InvoiceItem("Dec 2 2019", "Background Check", "Jeremiah Hartsock", "14.95"));
    inv1Items.push(new InvoiceItem("Dec 2 2019", "Background Check", "Dave Neal", "14.95"));
    inv1Items.push(new InvoiceItem("Dec 3 2019", "Background Check", "Jared Conley", "14.95"));
    inv1Items.push(new InvoiceItem("Dec 3 2019", "Background Check", "Isaiah Harris", "14.95"));
    inv1Items.push(new InvoiceItem("Dec 4 2019", "Background Check", "Taylor Doxy", "14.95"));
    inv1Items.push(new InvoiceItem("Dec 4 2019", "Background Check", "Christopher Jensen jensen", "14.95"));
    inv1Items.push(new InvoiceItem("Dec 5 2019", "Background Check", "STEPHEN MILLS", "14.95"));
    inv1Items.push(new InvoiceItem("Dec 5 2019", "Background Check", "Scott Chase", "14.95"));
    inv1Items.push(new InvoiceItem("Dec 5 2019", "Background Check", "Gilbert Sanchez", "14.95"));
    inv1Items.push(new InvoiceItem("Dec 5 2019", "Background Check", "Yanabah Wood", "14.95"));
    inv1Items.push(new InvoiceItem("Dec 9 2019", "Background Check", "Backen Hudson", "14.95"));
    inv1Items.push(new InvoiceItem("Dec 12 2019", "Background Check", "William Johnstun", "14.95"));
    inv1Items.push(new InvoiceItem("Dec 14 2019", "Background Check", "Warner Jarman", "14.95"));
    inv1Items.push(new InvoiceItem("Dec 16 2019", "Background Check", "Christopher Clune", "14.95"));
    inv1Items.push(new InvoiceItem("Dec 16 2019", "Background Check", "Trent Miller", "14.95"));
    inv1Items.push(new InvoiceItem("Dec 16 2019", "Background Check", "Adam Raty", "14.95"));
    inv1Items.push(new InvoiceItem("Dec 16 2019", "Background Check", "Alan Sheffer", "14.95"));
    inv1Items.push(new InvoiceItem("Dec 17 2019", "Background Check", "Daniel Colyar", "14.95"));
    const inv1: Invoice = new Invoice("Vineyard City","125 S Main St.", "UT", "Vineyard", "84058","787", "2020-01-14", "2019-12-31", 284.5, 200, 84.5, inv1Items )
    return [inv1];
  }

}