var render = function() {
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