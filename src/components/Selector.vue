<template>
  <div class="selector">
    <div
      v-on:click="open = !open"
      v-bind:class="{label: true, open: open}">
      {{formatLabel(this, selectedOptions)}}
    </div>
    <div class="options" v-if="open">
      <div
        v-for="(groupOptions, groupKey) in options"
        v-bind:key="groupKey"
        v-bind:class="{disabled: !isGroupEnabled(groupKey)}"
        class="option-group"
      >
        <div class="group-label">
          {{formatGroupLabel(this, groupKey)}}
        </div>
        <div
          v-for="option in groupOptions"
          v-bind:key="option.id"
          v-on:click="select(groupKey, option)"
          v-bind:class="{option: true, selected: isSelected(groupKey, option), disabled: !isOptionEnabled(groupKey, option)}">
          {{formatOptionValue(this, groupKey, option)}}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@border-radius: 0.2rem;
@passive-color: #666;
@active-color: #000;

.label {
  user-select: none;
  cursor: pointer;
  border: 1px solid;
  color: @passive-color;
  border-color: @passive-color;
  border-radius: @border-radius;
  padding: 0.4rem 0.6rem;

  &.open {
    border-top-left-radius:     @border-radius;
    border-top-right-radius:    @border-radius;
    border-bottom-right-radius: 0;
    border-bottom-left-radius:  0;
  }

  &::after {
    content: "▼";
    font-size: 70%;
    margin-left: 0.4rem;
  }

  &:hover {
    color: @active-color;
    border-color: @active-color;
  }
}

.options {
  position: absolute;
  background-color: white;
  user-select: none;
  cursor: pointer;
  border: 1px solid;
  border-color: @active-color;
  border-bottom-right-radius: @border-radius;
  border-bottom-left-radius:  @border-radius;
  margin-top: -1px;

  .option-group {
    margin-top: 0.8rem;
    margin-bottom: 0.2rem;
  }

  .option-group:first-child {
    margin-top: 0;
  }

  .group-label {
    padding: 0.4rem 0.6rem;
    font-weight: bold;
  }

  .option {
    padding: 0.4rem 0.6rem;
    text-indent: 1.2rem;

    &:hover {
      background-color: #fafafa;
    }

    &.disabled:hover {
      background-color: inherit;
    }

    &.selected::before {
      content: '✓';
      position: absolute;
      left: -0.6rem;
    }

    &.disabled {
      cursor: default;
      opacity: 0.5;
    }
  }
}
</style>

<script>
export default {
  name: 'selector',

  props: {
    'options': {
      required: true,
      type: Object,
      default: function () { return [] },
      validator: function (value) {
        for (let key in value) {
          if (!Array.isArray(value[key])) {
            return false
          }
          for (let option of value[key]) {
            if (!(('id' in option) && ('value' in option))) {
              return false
            }
          }
        }
        return true
      }
    },
    'selected-options': {
      type: Object,
      default: function () { return {} },
      validator: function (value) {
        for (let key in value) {
          if (!value[key]) {
            return false
          }
        }
        return true
      }
    },
    'enabled': {
      type: Object,
      default: function () { return {} }
    },
    'format-label': {
      type: Function,
      default: function (_, selectedOptions) {
        return Object
          .values(selectedOptions)
          .filter(option => !!option)
          .map(option => option.value)
          .join(', ')
      }
    },
    'format-group-label': {
      type: Function,
      default: function (_, groupKey) {
        return groupKey
      }
    },
    'format-option-value': {
      type: Function,
      default: function (_, __, option) {
        return option.value
      }
    }
  },

  model: {
    prop: 'selected-options',
    event: 'selection'
  },

  data () {
    return {
      open: false
    }
  },

  methods: {
    select (groupKey, option) {
      if (this.isOptionEnabled(groupKey, option)) {
        const newSelectedOptions = Object.assign({}, this.selectedOptions)
        newSelectedOptions[groupKey] = option
        this.$emit('selection', newSelectedOptions)
        this.open = false
      }
    },

    isSelected (groupKey, option) {
      return this.selectedOptions[groupKey] === option
    },

    isGroupEnabled (groupKey) {
      return this.enabled[groupKey] !== false
    },

    isOptionEnabled (groupKey, option) {
      return this.isGroupEnabled(groupKey) && option.enabled !== false
    }
  }
}
</script>
