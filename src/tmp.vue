<template>
  <div></div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, PropSync } from 'vue-property-decorator';

@Component
export default class Tmp extends Vue {
  @PropSync('test', { type: Array, required: true })
  readonly foo: string | any;
}
</script>
