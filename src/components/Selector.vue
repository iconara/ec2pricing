<template>
  <div class="selector">
    <div
      v-on:click="open = !open"
      v-bind:class="{label: true, open: open}">
      {{mainLabel}}
    </div>
    <div class="options" v-if="open">
      <div
        v-for="(groupOptions, groupKey) in options"
        v-bind:key="groupKey"
        v-bind:class="{disabled: !isGroupEnabled(groupKey)}"
        class="option-group"
      >
        <div class="group-label">
          {{groupLabel(groupKey)}}
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
@import "../style/variables.less";

@border-radius: 0.2rem;
@passive-color: #333;
@active-color: #ccc;

.selector {
  white-space: nowrap;
}

.label {
  user-select: none;
  cursor: pointer;
  border: 1px solid;
  color: @passive-color;
  border-color: @passive-color;
  border-radius: @border-radius;
  padding: 0.4rem 0.6rem;

  &.open {
    border-top-left-radius: @border-radius;
    border-top-right-radius: @border-radius;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  &::after {
    content: "▾";
    margin-left: 0.6rem;
  }

  &.open, &:hover {
    border-color: @active-color;
    background-color: @accent-color;
    border-color: @accent-color;
    color: #eee;
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
  box-shadow: 0 0.2rem 1rem 0.01rem #ccc;

  .option-group {
    margin-top: 0.4rem;
    margin-bottom: 0.8rem;
    border-top: 1px solid @active-color;

    &:first-child {
      border-top: none;
    }
  }

  .group-label {
    margin-top: 0.6rem;
    margin-bottom: 0.2rem;
    padding: 0rem 0.8rem;
    font-weight: bold;
  }

  .option {
    padding: 0.4rem 0.6rem;
    padding-right: 1.2rem;
    text-indent: 1.2rem;

    &:hover {
      background-color: lighten(@accent-color, 60%);
    }

    &.disabled:hover {
      background-color: inherit;
    }

    &.selected {
      &:last-child {
        border-radius: @border-radius;
      }
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
import Vue from 'vue'

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

    groupLabel (groupKey) {
      return this.formatGroupLabel(this, groupKey)
    },

    isSelected (groupKey, option) {
      return this.selectedOptions[groupKey] === option
    },

    isGroupEnabled (groupKey) {
      return this.enabled[groupKey] !== false
    },

    isOptionEnabled (groupKey, option) {
      return this.isGroupEnabled(groupKey) && option.enabled !== false
    },

    onClickOutside (event) {
      if (!event.path.some(element => element === this.$el)) {
        this.open = false
      }
    }
  },

  computed: {
    mainLabel () {
      return this.formatLabel(this, this.selectedOptions)
    }
  },

  watch: {
    open (state) {
      if (state) {
        window.addEventListener('click', this.onClickOutside)
      } else {
        window.removeEventListener('click', this.onClickOutside)
      }
      Vue.nextTick(() => {
        const label = this.$el.querySelector('.label')
        const optionsElement = this.$el.querySelector('.options')
        if (optionsElement) {
          const computedStyle = window.getComputedStyle(optionsElement)
          const computedWidth = optionsElement.offsetWidth
          const minWidth = label.offsetWidth - parseInt(computedStyle.borderLeft) - parseInt(computedStyle.borderRight)
          const width = Math.max(computedWidth, minWidth)
          const boundingRect = optionsElement.getBoundingClientRect()
          const rightEdge = boundingRect.right + width
          let left = label.offsetLeft
          if (rightEdge > window.innerWidth) {
            left -= optionsElement.offsetWidth - minWidth
          }
          optionsElement.setAttribute('style', `min-width: ${width}px; left: ${left}px;`)
        }
      })
    }
  }
}
</script>
