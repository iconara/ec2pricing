import Vue from 'vue'
import FilterSelector from '@/components/FilterSelector'

describe('FilterSelector', (done) => {
  it('renders', (done) => {
    const Constructor = Vue.extend(FilterSelector)
    const vm = new Constructor().$mount()
    vm.value = 2
    vm.options = [
      {id: 1, label: 'foo'},
      {id: 2, label: 'bar'}
    ]
    vm.name = 'label'
    Vue.nextTick(() => {
      const firstOption = vm.$el.querySelector('select option:first-child')
      const label = firstOption.textContent.replace(/^\s+|\s+$/g, '')
      const value = firstOption.value
      expect(label).to.equal('foo')
      expect(value).to.equal('1')
      done()
    })
  })
})
