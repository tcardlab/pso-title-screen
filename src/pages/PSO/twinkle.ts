/*
canvas {
  filter: blur(0.07rem)
}
*/

var two = new Two({
  type: Two.Types.canvas,
  fullscreen: true,
  autostart: true
}).appendTo(document.body);

//two.renderer.domElement.style.background = '#111';
two.renderer.ctx.globalCompositeOperation = 'screen';

var amount = 30;
for (var j = 0; j < amount; j++) {

  var x = 0, y = 0;
  var length = 120;
  var resolution = 4;
  var points = [];
  var vx = (Math.max(Math.random(), 0.2) - 0.5) * length;
  var vy = (Math.max(Math.random(), 0.2) - 0.5) * length;

  for (var i = 0; i < resolution; i++) {
    points.push(new Two.Anchor(x, y));
    x += vx;
    y += vy;
  }

  var sparkline = two.makeCurve(points, true);
  sparkline.noFill();
  sparkline.linewidth = 1 * Math.random();
  sparkline.cap = 'round';
  sparkline.stroke = 'rgba(225, 225, 225, 0.5)';
  two.add(sparkline);
}

two.scene.translation.set(two.width / 2, two.height / 2);

two.bind('resize', function() {
  two.scene.translation.set(two.width / 2, two.height / 2);
});


two.bind('update', function(frameCount) {
  var frames = 100;
  var thickness = 0.7;

  for (var i = 0; i < two.scene.children.length; i++) {
    var child = two.scene.children[i];
    var pct = i / two.scene.children.length;
    var offset = frames * pct;
    var ending = ((offset + frameCount) / frames) % 1
    child.ending = ending;
    child.beginning = Math.max(ending - thickness * pct + thickness, 0);
    child.opacity = 1 - child.ending;
  }

});