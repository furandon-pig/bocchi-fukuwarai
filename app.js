app = (function(){
    let cvs = null;
    init = function() {
      let bochii = new fabric.Image(
        document.getElementById('bochii'), {
          left: 350,
          top:  180,
          scale: 1.0,
          hasControls: false,
          lockMovementX: false,
          lockMovementY: false,
          lockRotation: false,
          lockScalingFlip: false,
          lockScalingX: false,
          lockScalingY: false,
          lockSkewingX: false,
          lockSkewingY: false,
          evented: false
      });

      cvs = new fabric.Canvas('cvs', {
        backgroundColor: 'white'
      });
      cvs.setDimensions({
        left: 0,
        top:  0,
        width:  1600,
        height: 1100
      });
      cvs.on({
        'object:moving': function(obj) { bochii.moveTo(-9999); },
        'mouse:up': function(obj) { bochii.moveTo(-9999); },
        'selection:created': function(obj) {
          if (1 < obj.selected.length) {
            cvs.discardActiveObject();
          } else if (obj.target == bochii) {
            cvs.discardActiveObject();
          }
          bochii.moveTo(-9999);
          cvs.renderAll();
        },
        'selection:updated': function(obj) {
          obj.target.setControlVisible('tl', false);
          obj.target.setControlVisible('tr', false);
          obj.target.setControlVisible('br', false);
          obj.target.setControlVisible('bl', false);
          obj.target.setControlVisible('ml', false);
          obj.target.setControlVisible('mt', false);
          obj.target.setControlVisible('mr', false);
          obj.target.setControlVisible('mb', false);
          obj.target.setControlVisible('mtr', false);
          bochii.moveTo(-9999);
        }
      });
      cvs.add(bochii);

      let faces = [
        { 'id': 'eye01', 'left':  442, 'top': 275 },
        { 'id': 'eye02', 'left':    4, 'top': 195 },
        { 'id': 'eye03', 'left':    8, 'top': 487 },
        { 'id': 'eye04', 'left':   19, 'top': 764 },
        { 'id': 'eye05', 'left':  826, 'top':  18 },
        { 'id': 'eye06', 'left':  853, 'top': 313 },
        { 'id': 'eye07', 'left':  857, 'top': 524 },
        { 'id': 'eye08', 'left':  889, 'top': 787 },
        //
        { 'id': 'lip01', 'left':  536, 'top': 450 },
        { 'id': 'lip02', 'left':  112, 'top': 361 },
        { 'id': 'lip03', 'left':   99, 'top': 660 },
        { 'id': 'lip04', 'left':  113, 'top': 840 },
        { 'id': 'lip05', 'left':  915, 'top': 212 },
        { 'id': 'lip06', 'left':  861, 'top': 436 },
        { 'id': 'lip07', 'left':  876, 'top': 687 },
        //
        { 'id': 'hair01', 'left': 1122, 'top':  22 },
        { 'id': 'hair02', 'left': 1270, 'top':  30 },
        { 'id': 'hair03', 'left': 1162, 'top': 148 },
        { 'id': 'hair04', 'left': 1128, 'top': 296 },
        //
        { 'id': 'hako01', 'left': 1131, 'top': 497 },
      ]
      for (let face of faces) {
        cvs.add(new fabric.Image(
          document.getElementById(face.id), {
            left: face.left,
            top: face.top,
            scale: 1.0,
            hasControls: false,
            lockMovementX: false,
            lockMovementY: false,
            lockRotation: false,
            lockScalingFlip: false,
            lockScalingX: false,
            lockScalingY: false,
            lockSkewingX: false,
            lockSkewingY: false,
          }
        ));
      }
    };
    show_about = function() {
      document.getElementById('about').showModal();
    };
    download_image = function() {
      let link = document.createElement("a");
      let cvs2 = document.getElementById('cvs');
      try {
        if (cvs2.msToBlob) {
          blob = cvs2.msToBlob();
          window.navigator.msSaveBlob(blob, 'image.png');
        } else {
          link.href = cvs2.toDataURL("image/png");
          link.download = "image.png";
          link.click();
        }
      } catch(e) {
        console.log(e);
        alert('(T_T) ダウンロード時にエラーが発生しました。');
      }
    };
    
    return {
        'init': init,
        'show_about': show_about,
        'download_image': download_image,
    };
})();

