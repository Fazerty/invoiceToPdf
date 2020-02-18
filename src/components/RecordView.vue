<template>
  <div class="border-2 mb-3 text-sm">
    <!-- Mandatory -->
    <div class="md:grid md:grid-flow-row md:grid-cols-3 gap-1 text-left flex flex-col">
      <span class="text-black font-bold text-right mr-5">Case Number</span>
      <div class="col-span-2">{{record.casenumber ? record.casenumber : '-'}}</div>
      <span class="text-black font-bold text-right mr-5">Full Name</span>
      <div class="col-span-2">{{record.fullname ? record.fullname : '-' }}</div>
      <span class="text-black font-bold text-right mr-5">Date Of Birth</span>
      <div class="col-span-2">{{record.fulldob ? record.fulldob : '-'}}</div>

      <span
        class="text-black font-bold text-right mr-5"
        v-if="record.addresses && record.addresses.getAddresses()"
      >Address</span>
      <div v-if="record.addresses && record.addresses.getAddresses()" class="col-span-2">
        <div v-for="(address, index) in record.addresses" :key="index">
          <div v-if="typeof(address) !==  'string'">
            <span>
              {{address.address1 ? address.address1 : '-'}}
              {{address.city ? address.city : '-'}},{{address.state ? address.state : '-'}},{{address.zip ? address.zip : '-'}}
            </span>
          </div>
        </div>
      </div>
      <span class="text-black font-bold text-right mr-5">State, County</span>
      <div
        class="col-span-2"
      >{{record.state ? record.state : '-'}},{{record.countycleansed ? record.countycleansed : '-'}}</div>
    </div>

    <!-- Optional -->
    <div v-if="show || showOptional" class="bg-gray-100">
      <div class="md:grid md:grid-flow-row md:grid-cols-3 gap-1 text-left flex flex-col mt-3 mb-5">
        <span
          v-if="record.sourceofjuridication"
          class="text-black font-bold text-right mr-5"
        >Source of Juridication</span>
        <div
          class="col-span-2"
          v-if="record.sourceofjuridication"
        >{{record.sourceofjuridication ? record.sourceofjuridication : '-'}}</div>
        <span v-if="record.fipscode" class="text-black font-bold text-right mr-5">Fips code</span>
        <div v-if="record.fipscode" class="col-span-2">{{record.fipscode ? record.fipscode : '-'}}</div>
        <span v-if="record.sex" class="text-black font-bold text-right mr-5">Sex</span>
        <div class="col-span-2" v-if="record.sex">{{record.sex ? record.sex : '-'}}</div>
        <span v-if="record.race" class="text-black font-bold text-right mr-5">Race</span>
        <div v-if="record.race" class="col-span-2">{{record.race ? record.race : '-'}}</div>
        <span v-if="record.haircolor" class="text-black font-bold text-right mr-5">Hair color</span>
        <div
          class="col-span-2"
          v-if="record.haircolor"
        >{{record.haircolor ? record.haircolor : '-'}}</div>
        <span v-if="record.eyecolor" class="text-black font-bold text-right mr-5">Eye color</span>
        <div v-if="record.eyecolor" class="col-span-2">{{record.eyecolor ? record.eyecolor : '-'}}</div>
        <span v-if="record.weight" class="text-black font-bold text-right mr-5">Weight</span>
        <div v-if="record.weight" class="col-span-2">{{record.weight ? record.weight : '-'}}</div>
        <span v-if="record.heigth" class="text-black font-bold text-right mr-5">Height</span>
        <div v-if="record.heigth" class="col-span-2">{{record.heigth ? record.heigth : '-'}}</div>

        <span v-if="record.comments" class="text-black font-bold text-right mr-5">Comments</span>
        <div v-if="record.comments" class="col-span-2">{{record.comments ? record.comments : '-'}}</div>
      </div>
      <button @click="show= !show" v-if="!showOptional">
         <font-awesome-icon :icon="['fa', 'caret-up']" size="1x" />
      </button>
    </div>
    <div v-else>
      <button @click="show= !show" v-if="!showOptional" class="mt-3">
         <font-awesome-icon :icon="['fa', 'caret-down']" size="1x" />
      </button>
    </div>
    <!-- Offenses -->
    <OffenseView
      v-for="(offense, index) in record.offenses"
      :key="index"
      :offense="offense"
      :showOptional="showOptional"
    ></OffenseView>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import OffenseView from '@/components/OffenseView.vue';
import { Record } from '../models/report';

@Component<RecordView>({
  components: { OffenseView },
})
// Component to display record informations
export default class RecordView extends Vue {

  @Prop()
  private record!: Record;

  // Used during printing to force to display optional data
  @Prop({ default: false })
  private showOptional!: boolean;

  // Display optional data
  private show = false;

}
</script>