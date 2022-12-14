//@ts-nocheck
import { onMounted } from "vue"
import Two from "two.js";

export default function useTwo(tempRef) {
  var two = new Two({
    type: Two.Types.canvas, //Two.Types.webgl
    fullscreen: true,
    autostart: true
  })
  
  two.scene.translation.set(two.width / 2, (two.height / 2));
  two.bind('resize', function() {
    two.scene.translation.set(two.width / 2, (two.height / 2));
  })
  
  onMounted(() => {
    let el = $(tempRef)
    two.appendTo(el);
  });

  return two
}

