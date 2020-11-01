/*
 * Demo content for FabricJS.
 */


const demoContent2 = (canvas, fabric) => {

/*
  const tbox = new fabric.Textbox('Lorem ipsum dolor sit amet', {
    left: 450, top: 220, width: 130, fontSize: 20, fontFamily: "'Open Sans', sans-serif"
  })
  tbox.setSelectionStyles({ fontWeight: 'bold', fontStyle: 'italic' }, 6, 11)
  tbox.setSelectionStyles({ fontFamily: 'Impact', fill: 'red' }, 18, 21)
  tbox.setControlsVisibility({ 'mb': false })
  canvas.add(tbox)



  fabric.Image.fromURL('https://placekitten.com/110/150', function(oImg) {
    oImg.set({ left: 0, top: 0 })
    canvas.add(oImg);
  }, { crossOrigin: 'Anonymous' });
*/




  fabric.loadSVGFromURL('test.svg', function(objects) {
    const obj = fabric.util.groupSVGElements(objects);
    obj.set({ left: 0, top: 0 });
    canvas.add(obj).renderAll();
    canvas.item(0).lockMovementY = true;
    canvas.item(0).lockMovementX = true;
    canvas.item(0).lockScalingX = canvas.item(0).lockScalingY = true;
    canvas.item(0).selectable = false;

  });


}


export default demoContent2
