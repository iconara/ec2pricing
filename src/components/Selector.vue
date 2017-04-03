<template>
  <div class="selector">
    <div class="display" v-on:click="open = !open">
      {{formatTitle(this, selectedOptions)}}
    </div>
    <div class="options" v-if="open">
      <div
        v-for="(groupOptions, groupKey) in options"
        v-bind:key="groupKey"
        v-bind:class="{disabled: !isGroupEnabled(groupKey)}"
      >
        <div>{{formatGroupTitle(this, groupKey)}}</div>
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
.display {
  user-select: none;
  cursor: pointer;
  border: 1px solid black;
  padding: 0.4rem;
}

.options {
  position: absolute;
  background-color: white;
  user-select: none;
  cursor: pointer;
  border: 1px solid red;

  .option {
    padding: 0.4rem;
    padding-left: 1.6rem;

    &:hover {
      background-color: #fafafa;
    }

    &.disabled:hover {
      background-color: inherit;
    }

    &.selected::before {
      content: '✓';
      position: absolute;
      margin-left: -1.0rem;
      height: 1rem;
      width: 1rem;
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
    'format-title': {
      type: Function,
      default: function (_, selectedOptions) {
        return Object
          .values(selectedOptions)
          .filter(option => !!option)
          .map(option => option.value)
          .join(', ')
      }
    },
    'format-group-title': {
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
    formatGroupTitleInternal (groupKey) {
      if (this.formatGroupTitle) {
        return this.formatGroupTitle(this, groupKey)
      } else {
        return groupKey
      }
    },

    formatOptionValueInternal (groupKey, option) {
      if (this.formatOptionValue) {
        return this.formatOptionValue(this, groupKey, option)
      } else {
        return option
      }
    },

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
