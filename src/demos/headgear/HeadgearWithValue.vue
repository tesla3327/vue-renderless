<template>
  <Value>
    <template slot-scope="one">
      <Headgear>
        <template slot-scope="two">
          <slot v-bind:combined="[one, two]" />
        </template>
      </Headgear>
    </template>
  </Value>  
</template>

<script>
import Value from '../../components/data/Value.vue';
import Headgear from '../../components/VueHeadgear.vue'

export default {
  components: {
    Value,
    Headgear,
  },

  render: function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("Value", {
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
