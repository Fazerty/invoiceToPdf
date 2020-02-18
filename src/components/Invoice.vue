<template>
  <div>
    <div class="mx-auto">
      <div class="flex md:flex-row flex-col justify-between mb-10">

        <!-- Invoice informations -->
        <div class="flex flex-col text-left">
          <div>
            <span class="text-2xl">Invoice: {{invoice.invoiceNumber}}</span>
          </div>
          <div>
            <span class="text-gray-600">Date:</span>
            {{invoice.invoiceDate}}
          </div>
          <div>
            <span class="text-gray-600">Billing date:</span>
            {{invoice.billingDate}}
          </div>
        </div>

        <!-- Customer informations -->
        <div class="flex flex-col text-left mt-5 md:mt-0">
          <div class="text-2xl text-purple-500">{{invoice.customer}}</div>
          <div v-if="invoice.department">{{invoice.department}}</div>
          <div>{{invoice.customerAddress}}</div>
          <div v-if="invoice.customerAddress2">{{invoice.customerAddress2}}</div>
          <div>
            <span class="mr-2">{{invoice.customerState}}</span>
            <span class="mr-2">{{invoice.customerCity}}</span>
            <span>{{invoice.customerZipCode}}</span>
          </div>
        </div>
      </div>

      <!-- Invoice items -->
      <div
        class="flex flex-col justify-between mb-3 bg-gray-200 px-3 py-2"
        v-for="(item, i) in invoice.items "
        :key="i"
      >
        <div class="sm:flex sm:flex-col sm:justify-between md:grid md:grid-cols-4">
          <div class="text-left text-gray-600">{{item.date}}</div>
          <div class="text-left justify-left">{{item.applicant}}</div>
          <div class="text-left italic">{{item.description}}</div>
          <div class="sm:text-right text-left font-semibold">${{item.amount}}</div>
        </div>
      </div>

      <!-- Total -->
      <div class="flex justify-between items-center mt-6 mb-2 px-3">
        <div class="text-2xl leading-none">
          <span class>Total</span>:
        </div>
        <div class="text-2xl text-right font-medium">${{invoice.invoiceTotal}}</div>
      </div>

      <div class="flex justify-between items-center mb-2 px-3" v-if="invoice.amountPaid && invoice.amountPaid !== '0'">
        <div class="text-2xl leading-none">
          <span class>Amount Paid</span>:
        </div>
        <div class="text-2xl text-right font-medium">${{invoice.amountPaid}}</div>
      </div>

      <div class="border border-t-2 border-gray-200 mb-3 px-3"></div>

      <div class="flex justify-between items-center mb-2 px-3">
        <div class="text-2xl leading-none">
          <span class="font-bold">Amount Due:</span>
        </div>
        <div class="text-2xl text-right font-bold">${{invoice.amountDue}}</div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Invoice } from '../models/invoice';

@Component
export default class InvoiceComponent extends Vue {
  @Prop() private invoice!: Invoice;


}
</script>

<style scoped lang="scss">
</style>
