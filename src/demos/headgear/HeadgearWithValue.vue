<template>
  <State>
    <template slot-scope="one">
      <Headgear>
        <template slot-scope="two">
          <slot v-bind:combined="[one, two]" />
        </template>
      </Headgear>
    </template>
  </State>  
</template>

<script>
import State from '../../components/data/State.vue';
import Headgear from '../../components/VueHeadgear.vue'

export default {
  components: {
    State,
    Headgear,
  },

  render: function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("State", {
      scopedSlots: _vm._u([
        {
          key: "default",
          fn: function(one) {
            return [
              _c("Headgear", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(two) {
                      return [_vm._t("default", null, { combined: [one, two] })]
                    }
                  }
                ])
              })
            ]
          }
        }
      ])
    })
  }
}
</script>
