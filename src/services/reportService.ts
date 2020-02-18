import data from './data.json';
import { ReportData } from '@/models/report';
import { JsonConvert, ValueCheckingMode } from 'json2typescript';


export class ReportService{

  public getReports(): ReportData {
    const jsonConvert: JsonConvert = new JsonConvert();
    jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
    jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL; // never allow null
    const reports: ReportData = jsonConvert.deserializeObject(data, ReportData);
    return reports;
  }

}