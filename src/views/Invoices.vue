<template>
  <div ref="isPrintable" class="mx-auto p-16" style="max-width: 800px;">
    <div class="flex flex-col sm:flex-row md:flex-row">
      <!-- Logo -->
      <div>
        <figure class="md:mr-10">
          <img src="../assets/COACH BACKGROUND CROPPED.png" alt="logo"  />
        </figure>
      </div>

      <!-- Contact Informations -->
      <div class="text-left mb-4">
        <div class="text-2xl text-blue-500 mb-2 mt-2">{{contactInformation.name}}</div>
        <div class>{{contactInformation.street}}</div>
        <div class="mb-2">{{contactInformation.city}}</div>
        <div class="flex flex-row text-gray-500">
          <img src="../assets/svg/icon-call.svg" alt="phone" class="icon" width="20" height="20" />
          <div>{{contactInformation.phone}}</div>
        </div>
        <div class="flex flex-row text-gray-500">
          <img src="../assets/svg/icon-print.svg" alt="fax" class="icon" width="20" height="20" />
          <div>{{contactInformation.fax}}</div>
        </div>
        <div class="flex flex-row text-gray-500">
          <img src="../assets/svg/icon-mail.svg" alt="mail" class="icon" width="20" height="20" />
          <div>
            <a :mailto="contactInformation.email">{{contactInformation.email}}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="border border-t-2 border-gray-200 mb-8 px-3"></div>

    <InvoiceComponent :invoice="data[0]" />
    <footer>
      <div class="flex mb-8 justify-end px-3 mt-10">
        <div class="text-right w-1/2 px-0 leading-tight">
          <small
            class="text-xs"
          >Nullam auctor, tellus sit amet eleifend interdum, quam nisl luctus quam, a tincidunt nisi eros ac dui. Curabitur leo ipsum, bibendum sit amet suscipit sed, gravida non lectus. Nunc porttitor lacus sapien, nec congue quam cursus nec. Quisque vel vehicula ipsum. Donec condimentum dolor est, ut interdum augue blandit luctus.</small>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Invoice } from '../models/invoice';
import { InvoiceService } from '../services/invoiceService';
import InvoiceComponent from '@/components/Invoice.vue'
import { Getter } from 'vuex-class';
import jsPDF from 'jspdf';
import html2canvas, { Options } from 'html2canvas';


@Component<Invoices>({
  components: { InvoiceComponent },
})
export default class Invoices extends Vue {
  private service: InvoiceService = new InvoiceService();
  private data: Invoice[] = this.service.getInvoices();

  private contactInformation: { name: string; street: string; city: string; phone: string; fax: string; email: string } =
    {
      name: "National Background and Screening",
      street: "123 Some Street",
      city: "Some city, UT 84095",
      phone: "888-123-4567",
      fax: "888-123-4567",
      email: "support@coachbackground.com"
    }

  @Getter('print')
  private print!: boolean;

  @Watch('print')
  private watchPrint() {
    if (this.print === true) {
      this.pdfWithCSS()
    }
  }

  /*
   * Creates a pdf from the content of the component.
   * Creates multiple pages if the compenent is too long.
   *
   */
  private pdfWithCSS() {

    const invoiceNumber: string = this.data[0].invoiceNumber;
    // pdf page width in mm
    const pageWidth = 1024;
    // 8.5" x 11" (215.9 by 279.4 mm) format letter
    const ratio: number = 279.4/ 215.9;
    const pageHeight: number = 1024 * ratio;
    const doc = new jsPDF('p', 'px', [pageWidth, pageHeight]);

    const printableElement: HTMLElement = this.$refs.isPrintable as HTMLElement;

    const options: Partial<Options> = {
      scrollX: 0,
      scrollY: 0,
      width: 1024,
      windowWidth: 1024,
      x: 100,
      y: 0
    }

    html2canvas(printableElement, options).then(function (canvas) {
      const image: string = canvas.toDataURL("image/png", 0.8);

      /* for tests
      const a = document.createElement('a');
      a.href = image;
      a.download = 'testcanvas.png';
      a.click();
      window.open(image);
      */

      let position = 0;
      let hasPage = false;
      while ( position <= canvas.height) {
        // If pdf has already a page, create a new page.
        if (hasPage) doc.addPage(); else hasPage = true;
        doc.addImage(image, 'PNG', -20, -position, canvas.width / ratio , canvas.height);
        position += pageHeight / ratio -20;
      }
      doc.save("invoice-" + invoiceNumber + ".pdf");
    });
    this.$store.commit('printOff');
  }

}
</script>
<style lang="scss" scoped>
.icon {
  margin-right: 10px;
}

.logo {
  width: 350px;
  overflow: hidden;
  margin: 0;
  margin-right: 30px;
}
.logo img {
  width: 500%;
}
</style>