<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  // @ts-ignore
  asyncData({ app, redirect }) {
    return redirect(app.localePath('/blog'))
  },
  render(h) {
    return h('div')
  }
})
</script>
