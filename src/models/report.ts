import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("Dob")
export class Dob {
  @JsonProperty("-year", String, true)
  year?: string = undefined;
  @JsonProperty("-month", String, true)
  month?: string = undefined;
  @JsonProperty("-day", String, true)
  day?: string = undefined;
}

@JsonObject("Ssn")
export class Ssn {
  @JsonProperty("number", String, true)
  number?: string = undefined;
  @JsonProperty("status", String, true)
  status?: string = undefined;
}

@JsonObject("Inputs")
export class Inputs {
  @JsonProperty("firstname", String, true)
  firstname?: string = undefined;
  @JsonProperty("lastname", String, true)
  lastname?: string = undefined;
  @JsonProperty("dob", Dob, true)
  dob?: Dob = undefined;
  @JsonProperty("ssn", Ssn, true)
  ssn?: Ssn = undefined;
}

@JsonObject("Requestinformation")
export class Requestinformation {
  @JsonProperty("-code", String, true)
  code?: string = undefined;
  @JsonProperty("codemessage", String, true)
  codemessage?: string = undefined;
  @JsonProperty("inputs", Inputs, true)
  inputs?: Inputs = undefined;
}

@JsonObject("Address")
export class Address {
  @JsonProperty("address1", String, true)
  address1?: string = undefined;
  @JsonProperty("city", String, true)
  city?: string = undefined;
  @JsonProperty("state", String, true)
  state?: string = undefined;
  @JsonProperty("zip", String, true)
  zip?: string = undefined;
}

@JsonObject("Addresses")
export class Addresses { // Rem: address, address (copy),... should be in an array
  @JsonProperty("-count", String, true)
  count?: string = undefined;
  @JsonProperty("address", Address, true)
  address?: Address = undefined;
  getAddresses() {
    return [this.address]
  }
}

@JsonObject("Offense")
export class Offense {
  @JsonProperty("offensedescription", String, true)
  offensedescription?: string = undefined;
  @JsonProperty("arrestdate", String, true)
  arrestdate?: string = undefined;
  @JsonProperty("casetype", String, true)
  casetype?: string = undefined;
  @JsonProperty("chargefilingdate", String, true)
  chargefilingdate?: string = undefined;
  @JsonProperty("offensedate", String, true)
  offensedate?: string = undefined;
  @JsonProperty("offensecode", String, true)
  offensecode?: string = undefined;
  @JsonProperty("court", String, true)
  court?: string = undefined;
  @JsonProperty("comments", String, true)
  comments?: string = undefined;
  @JsonProperty("nciccode", String, true)
  nciccode?: string = undefined;
  @JsonProperty("statute", String, true)
  statute?: string = undefined;
  @JsonProperty("convictiondate", String, true)
  convictiondate?: string = undefined;
}

@JsonObject("Offenses")
export class Offenses { // Rem: offense and offense (copy) should be in an array
  @JsonProperty("-count", String, true)
  count?: string = undefined;
  @JsonProperty("offense", Offense)
  offense?: Offense = undefined;
  @JsonProperty("offense (copy)", Offense, true)
  offenseCopy?: Offense = undefined;
  getOffenses() {
    return [this.offense, this.offenseCopy]
  }
}

@JsonObject("Alias")
export class Alias {
  @JsonProperty("fullname", String, true)
  fullname?: string = undefined;
  @JsonProperty("fulldob", String, true)
  fulldob?: string = undefined;
}

@JsonObject("Aliases")
export class Aliases {
  @JsonProperty("-count", String, true)
  count?: string = undefined;
  @JsonProperty("alias", Alias, true)
  alias?: Alias = undefined;
}

@JsonObject("Record")
export class Record {
  @JsonProperty("-id", String, true)
  id?: string = undefined;
  @JsonProperty("category", String, true)
  category?: string = undefined;
  @JsonProperty("sourceorjurisdiction", String, true)
  sourceorjurisdiction?: string = undefined;
  @JsonProperty("countycleansed", String, true)
  countycleansed?: string = undefined;
  @JsonProperty("fipscode", String, true)
  fipscode?: string = undefined;
  @JsonProperty("state", String, true)
  state?: string = undefined;
  @JsonProperty("fullname", String, true)
  fullname?: string = undefined;
  @JsonProperty("firstname", String, true)
  firstname?: string = undefined;
  @JsonProperty("lastname", String, true)
  lastname?: string = undefined;
  @JsonProperty("fulldob", String, true)
  fulldob?: string = undefined;
  @JsonProperty("sex", String, true)
  sex?: string = undefined;
  @JsonProperty("race", String, true)
  race?: string = undefined;
  @JsonProperty("casenumber", String, true)
  casenumber?: string = undefined;
  @JsonProperty("countyorjurisdiction", String, true)
  countyorjurisdiction?: string = undefined;
  @JsonProperty("addresses", Addresses, true)
  addresses?: Addresses = undefined;
  @JsonProperty("offenses", Offenses, true)
  offenses?: Offenses = undefined;
  @JsonProperty("middlename", String, true)
  middlename?: string = undefined;
  @JsonProperty("birthstate", String, true)
  birthstate?: string = undefined;
  @JsonProperty("haircolor", String, true)
  haircolor?: string = undefined;
  @JsonProperty("eyecolor", String, true)
  eyecolor?: string = undefined;
  @JsonProperty("weight", String, true)
  weight?: string = undefined;
  @JsonProperty("height", String, true)
  height?: string = undefined;
  @JsonProperty("aliases", Aliases, true)
  aliases?: Aliases = undefined;
 @JsonProperty("comments", String, true)
  comments?: string = undefined;
}

@JsonObject("Records")
export class Records {
  @JsonProperty("-count", String, true)
  count?: string = undefined;
  @JsonProperty("record", [Record], true)
  record?: Record[] = undefined;
}

@JsonObject("Criminalinformation")
export class Criminalinformation {
  @JsonProperty("records", Records, true)
  records?: Records = undefined;
}

@JsonObject("Ieiresponse")
export class Ieiresponse {
  @JsonProperty("requestinformation", Requestinformation, true)
  requestinformation?: Requestinformation = undefined;
  @JsonProperty("criminalinformation", Criminalinformation, true)
  criminalinformation?: Criminalinformation = undefined;
}

@JsonObject("ReportData")
export class ReportData {
  @JsonProperty("ieiresponse", Ieiresponse, true)
  ieiresponse?: Ieiresponse = undefined;
}



