<template>
  <div class="flex flex-col">
    <div class="flex flex-col md:grid md:grid-flow-row md:grid-cols-3 md:grid-rows-2 md:gap-1">
      <div class="font-bold text-left md:mr-20 text-lg col-span-1">File Number</div>
      <div class="text-left text-lg font-bold col-span-2">{{report.id}}</div>
      <div class="font-bold text-left md:mr-20 col-span-1 mt-2 md:mt-0">Report Date</div>
      <div class="text-left col-span-2">{{report.date}}</div>

      <div class="font-bold text-left md:mr-20 col-span-1 mt-2 md:mt-0">Report to</div>

      <div class="text-left italic text-sm col-span-2">
        <div class="text-black not-italic flex flex-row">
          <div class="text-gray-600 mr-12 text-sm">Name</div>
          {{report.requestor.name}}
        </div>
        <div class="border border-t-1 border-gray-200 mt-1 mb-1 px-3"></div>
        <div v-if="report.requestor.department" class="text-black not-italic flex flex-row">
          <div class="text-gray-600 mr-5 text-sm">Department</div>
          {{report.requestor.department}}
        </div>
        <div
          v-if="report.requestor.department"
          class="border border-t-1 border-gray-200 mt-1 mb-1 px-3"
        ></div>
        <div class="text-black not-italic flex flex-row">
          <div class="text-gray-600 mr-10 text-sm">Address</div>
          {{report.requestor.address}}
          <span
            v-if="report.requestor.address2"
          >{{report.requestor.address2}}</span>
          <span>{{report.requestor.city}} {{report.requestor.state}} {{report.requestor.zipCode}}</span>
        </div>
      </div>
    </div>

    <div class="border border-t-1 border-gray-200 mt-3 mb-3 px-3"></div>

    <!-- Applicant information -->
    <div
      class="flex flex-col mb-5 font-bold text-lg text-left md:text-left text-green-600"
    >Application Information</div>

    <div class="flex flex-col md:flex-row text-left justify-between">
      <div
        class="text-black not-italic mb-3 md:mb-0"
      >{{reportdata.requestinformation.inputs.firstname}} {{reportdata.requestinformation.inputs.lastname}}</div>
      <div class="flex flex-col">
        <div class="flex flex-col md:flex-row mb-3 md:mb-0">
          <div class="text-gray-600 mr-5 text-sm">Address</div>
          <div
            class="text-sm"
          >{{report.requestor.address}}{{report.requestor.city}} {{report.requestor.state}} {{report.requestor.zipCode}}</div>
        </div>
        <div class="border border-t-1 border-gray-200 mt-1 mb-1 px-3"></div>
        <div class="flex flex-col">
          <div class="flex flex-row">
            <div class="text-gray-600 mr-5 text-sm">DOB</div>
            <div
              class="text-gray-600 ml-5 text-sm"
            >{{reportdata.requestinformation.inputs.dob.month}}/{{reportdata.requestinformation.inputs.dob.day}}/{{reportdata.requestinformation.inputs.dob.year}}</div>
          </div>
          <div class="border border-t-1 border-gray-200 mt-1 mb-1 px-3"></div>
          <div class="flex flex-row">
            <div class="text-gray-600 mr-5 text-sm">SSN</div>
            <div>
              <span class="text-gray-600 ml-5">xxxxxxxx</span>
              {{reportdata.requestinformation.inputs.ssn.number.substr(reportdata.requestinformation.inputs.ssn.number.length - 4)}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border border-t-1 border-gray-200mt-3 mb-3 px-3"></div>

    <!-- Report summary -->
    <div class="flex flex-col mb-5 font-bold text-lg text-left md:text-left text-green-600">Summary</div>
    <div class="md:grid md:grid-cols-3 gap-3 text-left flex flex-col mb-3">
      <div class="flex flex-col">
        <span
          :class="reportSummary.socialSecurityNumber ? '' : 'text-gray-600'"
        >Social Security Number</span>
        <span
          v-if="reportSummary.socialSecurityNumber"
          class="font-bold"
        >{{reportSummary.socialSecurityNumber}}</span>
        <span v-else class="font-bold text-xl ml-5">-</span>
      </div>
      <div class="flex flex-col">
        <span :class="reportSummary.criminalRecords ? '' : 'text-gray-600'">Criminal Records</span>
        <span
          v-if="reportSummary.criminalRecords"
          class="font-bold text-xl ml-5"
        >{{reportSummary.criminalRecords}}</span>
        <span v-else class="font-bold text-xl ml-5">-</span>
      </div>
      <div class="flex flex-col">
        <span
          :class="reportSummary.sexOffenderRegistry ? '' : 'text-gray-600'"
        >Sex Offender Registry</span>
        <span
          v-if="reportSummary.sexOffenderRegistry"
          class="font-bold text-xl ml-5"
        >{{reportSummary.sexOffenderRegistry}}</span>
        <span v-else class="font-bold text-xl ml-5">-</span>
      </div>
      <div class="flex flex-col">
        <span :class="reportSummary.patriotActRecords ? '' : 'text-gray-600'">Patriot Act Records</span>
        <span
          v-if="reportSummary.patriotActRecords"
          class="font-bold text-xl ml-5"
        >{{reportSummary.patriotActRecords}}</span>
        <span v-else class="font-bold text-xl ml-5">-</span>
      </div>
      <div class="flex flex-col">
        <span :class="reportSummary.otherRecords ? '' : 'text-gray-600'">Other Records</span>
        <span v-if="reportSummary.otherRecords" class="font-bold">{{reportSummary.otherRecords}}</span>
        <span v-else class="font-bold text-xl ml-5">-</span>
      </div>
    </div>

    <!-- Applicant notes -->
    <div v-if="applicantNotes">
      <div class="border border-t-1 border-gray-200mt-3 mb-3 px-3"></div>
      <div
        class="flex flex-col mb-5 font-bold text-lg text-left md:text-left text-green-600"
      >Applicant Notes</div>
      <div class="text-left mb-4">{{applicantNotes}}</div>
    </div>

    <!-- Report notes -->
    <div>
      <div class="border border-t-1 border-gray-200mt-3 mb-3 px-3"></div>
      <div
        class="flex flex-row justify-between mb-5 font-bold text-lg text-left md:text-left text-green-600"
      >
        Report Notes
        <button
          @click="showReportNotes= !showReportNotes"
          v-if="!showOptional && !reportNotes"
        >
          <font-awesome-icon :icon="['far', 'comment']" size="1x" v-if="!showReportNotes" />
          <font-awesome-icon
            :icon="['fa', 'caret-up']"
            size="1x"
            v-if="showReportNotes && !reportNotes"
          />
        </button>
      </div>

      <div class="text-left mb-4" v-if="reportNotes || showReportNotes">
        <input
          placeholder="write some report notes"
          class="form-input border mt-1 block w-full"
          type="text"
          v-model="reportNotes"
        />
      </div>
    </div>

    <!-- Records -->
    <div>
      <div class="border border-t-1 border-gray-200mt-3 mb-3 px-3"></div>

      <!-- Criminal Records -->
      <div
        class="flex flex-col mb-5 font-bold text-lg text-left md:text-left mt-5"
        :class="reportSummary.criminalRecords ? 'text-blue-600':'text-green-500'"
      >
        Criminal Records
        <div class="text-xl" v-if="reportSummary.criminalRecords">
          <span class="font-bold text-red-600 text-xl ml-5">{{reportSummary.criminalRecords}}</span>
          <span class="text-sm text-red-600">criminal records</span>
        </div>
      </div>
      <div v-if="!reportSummary.criminalRecords"></div>
      <div v-else>
        <RecordView
          :showOptional="showOptional"
          v-for="(record, index) in getRecordsByCategory('CRIMINAL')"
          :key="index"
          :record="record"
        ></RecordView>
      </div>

      <!-- Sex Offender Records -->
      <div
        class="flex flex-col mb-5 font-bold text-lg text-left md:text-left mt-5"
        :class="reportSummary.sexOffenderRegistry ? 'text-blue-600':'text-green-500'"
      >
        Sex Offender Registry
        <div class="text-xl" v-if="reportSummary.sexOffenderRegistry">
          <span class="font-bold text-red-600 text-xl ml-5">{{reportSummary.sexOffenderRegistry}}</span>
          <span class="text-sm text-red-600">sex offender records</span>
        </div>
      </div>
      <div v-if="!reportSummary.sexOffenderRegistry"></div>
      <div v-else>
        <RecordView
          :showOptional="showOptional"
          v-for="(record, index) in getRecordsByCategory('SEX OFFENDER')"
          :key="index"
          :record="record"
        ></RecordView>
      </div>

      <!-- Patriot Act Records -->
      <div
        class="flex flex-col mb-5 font-bold text-lg text-left md:text-left mt-5"
        :class="reportSummary.patriotActRecords ? 'text-blue-600':'text-green-500'"
      >
        Patriot Act Records
        <div class="text-xl" v-if="reportSummary.patriotActRecords">
          <span class="font-bold text-red-600 text-xl ml-5">{{reportSummary.patriotActRecords}}</span>
          <span class="text-sm text-red-600">patriot Act records</span>
        </div>
      </div>
      <div v-if="!reportSummary.patriotActRecords"></div>
      <div v-else>
        <RecordView
          :showOptional="showOptional"
          v-for="(record, index) in getRecordsByCategory('PATRIOT')"
          :key="index"
          :record="record"
        ></RecordView>
      </div>


      <!-- Other Records Records -->
      <div
        class="flex flex-col mb-5 font-bold text-lg text-left md:text-left mt-5"
        :class="reportSummary.otherRecords ? 'text-green-600':'text-green-500'"
      >
        Other Records
        <div class="text-xl" v-if="reportSummary.otherRecords">
          <span class="font-bold text-red-600 text-xl ml-5">{{reportSummary.otherRecords}}</span>
          <span class="text-sm text-red-600">other records</span>
        </div>
      </div>
      <div v-if="!reportSummary.otherRecords"></div>
      <div v-else>
        <RecordView
          :showOptional="showOptional"
          v-for="(record, index) in getRecordsByCategory('OTHER')"
          :key="index"
          :record="record"
        ></RecordView>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Ieiresponse, Record } from '../models/report';
import RecordView from '@/components/RecordView.vue';

class ReportInfo {
  id!: string;
  requestor!: Requestor;
  date!: string
}
class Requestor {
  name!: string;
  department!: string;
  address!: string;
  address2!: string;
  city!: string;
  state!: string;
  zipCode!: string;
}

@Component<Report>({
  components: { RecordView },
})
export default class Report extends Vue {

  @Prop()
  private  reportdata!: Ieiresponse;

  // Used during printing to force to display optional data
  @Prop({ default: false })
  private showOptional!: boolean;

  // Displays report notes
  private showReportNotes = false;
  private reportNotes: string = "";

  private reportSummary: any = {}

  private applicantNotes: string = "Nullam auctor, tellus sit amet eleifend interdum, ";

  private report: ReportInfo = {
    id: "1233",
    requestor: {      name: "USA Online Volunteers",
      department: "Dpmt", address: "180 Imperial Plaza Dr.", address2: "Suite 300",
      city: "Imperial", state: "PA", zipCode: "12345"    },
    date: "02/05/2018"

  }

  // Filters records based on their category
  private getRecordsByCategory(category: string): Record[] {
    const records: Record[] = new Array<Record>();
    if (this.reportdata.criminalinformation
      && this.reportdata.criminalinformation.records
      && this.reportdata.criminalinformation.records.record)
      this.reportdata.criminalinformation.records.record.forEach((record: Record) => {
        if (category === 'OTHER') {
          if (!record.category || ['CRIMINAL', 'SEX OFFENDER', 'PATRIOT'].indexOf(record.category) === -1) {
            records.push(record);
          }
        }
        if (record.category === category) { records.push(record); }

      });
    return records;
  }

  // Create the report summary from reportdata
  created() {
    let socialSecurityNumber: number = 0;
    let criminalRecords: number = 0;
    let sexOffenderRegistry: number = 0;
    let patriotActRecords: number = 0;
    let otherRecords: number = 0;
    if (this.reportdata.criminalinformation
      && this.reportdata.criminalinformation.records
      && this.reportdata.criminalinformation.records.record)
      this.reportdata.criminalinformation.records.record.forEach((record: Record) => {
        switch (record.category) {
          case "CRIMINAL": ++criminalRecords;
            break;
          case "SEX OFFENDER": ++sexOffenderRegistry;
            break;
          case "PATRIOT": ++patriotActRecords;
            break;
          default: ++otherRecords;
        }

      });
    this.reportSummary = { socialSecurityNumber, criminalRecords, sexOffenderRegistry, patriotActRecords, otherRecords }
  }

}
</script>

<style scoped lang="scss">
</style>
