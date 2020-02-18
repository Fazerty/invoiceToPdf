<template>
  <div v-if="offense && typeof(offense) !==  'string'" class="bg-orange-100 mt-5">
    <!-- Mandatory -->
    <div class="md:grid md:grid-flow-row md:grid-cols-3 gap-1 text-left flex flex-col">
      <span class="text-black font-bold text-right mr-5">Type</span>
      <div class="col-span-2">{{offense.type ? offense.type : '-'}}</div>
      <span class="text-black font-bold text-right mr-5">Description</span>
      <div class="col-span-2">{{offense.offensedescription ? offense.offensedescription : '-'}}</div>
      <span class="text-black font-bold text-right mr-5">Offense Date</span>
      <div class="col-span-2">{{offense.offensedate ? offense.offensedate : '-'}}</div>
      <span class="text-black font-bold text-right mr-5">Court</span>
      <div class="col-span-2">{{offense.court ? offense.court : '-'}}</div>
    </div>

    <!-- Optional -->
    <div v-if="show || showOptional" class="bg-orange-200">
      <div class="md:grid md:grid-flow-row md:grid-cols-3 gap-1 text-left flex flex-col mt-3 mb-2">
        <span class="text-black font-bold text-right mr-5" v-if="offense.comments">Comments</span>
        <div  v-if="offense.comments" class="col-span-2">{{offense.comments ? offense.comments : '-'}}</div>
        <span v-if="offense.arrestdate" class="text-black font-bold text-right mr-5">Arrest date</span>
        <div v-if="offense.arrestdate" class="col-span-2">{{offense.arrestdate ? offense.arrestdate : '-'}}</div>
        <span v-if="offense.casetype" class="text-black font-bold text-right mr-5">Case type</span>
        <div v-if="offense.casetype" class="col-span-2">{{offense.casetype ? offense.casetype : '-'}}</div>
        <span v-if="offense.chargefilingdate" class="text-black font-bold text-right mr-5">Charge filing date</span>
        <div class="col-span-2"
          v-if="offense.chargefilingdate"
        >{{offense.chargefilingdate ? offense.chargefilingdate : '-'}}</div>
        <span v-if="offense.convictiondate" class="text-black font-bold text-right mr-5">Conviction Date</span>
        <div class="col-span-2" v-if="offense.convictiondate">{{offense.convictiondate ? offense.convictiondate : '-'}}</div>
        <span v-if="offense.offensecode" class="text-black font-bold text-right mr-5">Offense Code</span>
        <div class="col-span-2" v-if="offense.offensecode">{{offense.offensecode ? offense.offensecode : '-'}}</div>
        <span v-if="offense.statute" class="text-black font-bold text-right mr-5">Statute</span>
        <div class="col-span-2" v-if="offense.statute">{{offense.statute ? offense.statute : '-'}}</div>
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
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Offense } from '../models/report';

@Component<OffenseView>({
  components: {},
})
// Component to display offense informations
export default class OffenseView extends Vue {

  // Used during printing to force to display optional data
  @Prop({ default: false })
  private showOptional!: boolean;

  @Prop()
  private offense!: Offense;

  // Display optional data
  private show = false;
}
</script>