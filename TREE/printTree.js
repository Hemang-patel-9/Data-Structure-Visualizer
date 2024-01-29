let maxh = 1;

function PrintTree(node, arr) {
  const draw = document.getElementById("myBstCanvas");
  const ctx = draw.getContext("2d");
  ctx.clearRect(0, 0, 20000, 6000);
  let h = 0,
    inc = 20,
    d = 0;

  for (let i = 0; i < arr.length; i++) {
    ctx.font = "18px Roman";
    ctx.fillText("STEP - " + (i + 1), 5, inc);
    let save = node,
      pred = node;
    for (j = 0; j <= i; j++) {
      h = 1, extra = 0;

      (save = node), (pred = node);
      while (true) {
        if (arr[j] == save.data) {
          break;
        } else if (Number.parseInt(arr[j]) < Number.parseInt(save.data)) {
          pred = save;
          save = save.left;
          d = -1;
        } else if (Number.parseInt(arr[j]) > Number.parseInt(save.data)) {
          pred = save;
          save = save.right;
          d = 1;
        }
        h++;
      }

      extra = save.stepStr.length * 20;

      ctx.beginPath();
      ctx.arc(save.ld, save.height + inc + extra, 20, 0, 2 * Math.PI);
      ctx.stroke();

      if (j != 0) {
        ctx.beginPath();
        if (d == -1) {
          ctx.moveTo(pred.ld - 15, save.height + inc - 55 + extra);
          ctx.lineTo(save.ld + 17, save.height + inc - 10 + extra);
        } else {
          ctx.moveTo(pred.ld + 15, save.height + inc - 55 + extra);
          ctx.lineTo(save.ld - 17, save.height + inc - 10 + extra);
        }
        ctx.stroke();
      }
      ctx.fillText(save.data, save.ld - 6, save.height + inc + extra);

      h++;

      if (h > maxh) {
        maxh = h;
      }
    }

    for (let k = 0; k < save.stepStr.length; k++) {
      ctx.font = "18px Roman";
      ctx.fillText(save.stepStr[k], 10, inc + 20 + k * 20);
    }

    inc = inc + (maxh * 60) + 100;
  }
}