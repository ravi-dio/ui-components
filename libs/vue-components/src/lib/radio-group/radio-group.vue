<template>
  <div class="goa-radio-group">
    <span class="radio-group-title">{{ title }}</span>
    <span v-if="required" class="required-label">(Required)</span>
    <div v-if="helperText" class="helper-text">{{ helperText }}</div>
    <div v-for="(option, index) in items" :key="option.text">
      <Radio
        v-model="selectedValue"
        :options="items[index]"
        :disabled="disabled"
        :required="hasError()"
        :labelPosition="labelPosition"
        :value="value"
        :defaultValue="value"
        label="Example question one"
        @change="onChangeResponse"
      />
    </div>
    <div v-if="hasError()" class="error-text">
      {{ requiredErrorMessage || 'Required' }}
    </div>
  </div>
</template>

<script lang="ts">
import Radio from './radio.vue';

export default {
  name: 'radio-group',
  components: {
    Radio,
  },
  props: {
    /**
     * Title of the radio item
     */
    title: {
      type: String,
      required: true,
    },
    /**
     * Help text of the radio item
     */
    helperText: {
      type: String,
      required: true,
    },
    /**
     * Error messages
     */
    requiredErrorMessage: {
      type: String,
      required: false,
      default: null,
    },
    /**
     * Disable radio buttons
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Is the radio button selection required.
     */
    required: {
      type: Boolean,
      default: false,
    },
    /**
     * List of radio buttons to select
     */
    items: {
      type: [Array],
      required: true,
    },
    /**
     * Where is the label positioned
     */
    labelPosition: {
      type: String,
      required: false,
      default: 'after',
      validator: (prop) => ['before', 'after'].includes(prop),
    },
    /**
     * Value of the component
     */
    value: {
      type: String,
      required: false,
      default: '',
    },
  },
  methods: {
    hasError() {
      return this.required && !this.selectedValue;
    },
    onChangeResponse(event) {
      this.selectedValue = event;
      this.$emit('change', this.selectedValue);
    },
  },
  data() {
    return {
      selectedValue: null,
    };
  },
};
</script>
<style lang="scss" scoped>
@import './radio-group.scss';
</style>
