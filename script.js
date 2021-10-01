function editing() {
    var rama;
    rama = document.getElementById('firstInput').value;
    console.log(rama)
    document.getElementById('firstOutput').innerHTML = rama;
    var bgcolors = document.getElementById("colorid").value;
    console.log(bgcolors);
    var listStyleChange = document.getElementById('outputList');
    listStyleChange.removeAttribute("list-style-type");
    listStyleChange.style = "list-style-type :circle";
    console.log(listStyleChange);
    
    let divimage = document.getElementById("divPreview")
    divimage.style.backgroundColor = bgcolors;
       
    for (let j = 0; j < outidlist.length; j++) {
        const element = outidlist[j];
        rama = document.getElementById(idNum).value;
        document.getElementById(element).innerHTML = rama
        
    }
   


}
function saveas() {
    // domtoimage.toBlob(document.getElementById('divPreview')).then(function (blob) {
    //     window.saveAs(blob, "platoimage.png")
    // });
   
    html2canvas(document.querySelector("#divPreview")).then(canvas => {
        document.body.appendChild(canvas)
        console.log(canvas);
        canvas.id = "mycanvas"
    //    
    

    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(mycanvas.msToBlob(), "imagecan.png")
    } else {
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = mycanvas.toDataURL();
        a.download = "imagecan.png";
        a.click();
        document.removeChild(a);
        
    }});
    

}
function preview() {
                html2canvas(document.querySelector("#divPreview")).then(canvas => {
            document.body.appendChild(canvas)
            console.log(canvas);
        });
    }
//     }

function previewimage(event, inputId, parentId,imageId) {
       let image = URL.createObjectURL(event.target.files[0]);
    console.log(image)
    inputimage = document.getElementById(inputId);
    // inputimage.src = ""
    inputimage.src = image;
    inputimage.id = imageId;
    console.log(inputimage);
    console.log(inputimage);
      divPreview = document.getElementById(parentId);
    divPreview.appendChild(inputimage);
    console.log(divPreview)
}


var idno = 0;
var outidlist = [];
function createNewInput() {

    var newInput = document.createElement("input")
    var newBreak = document.createElement("br")
    var newOutput = document.createElement("li")
    idno = idno + 1;
    idOut = "idOut" + idno;
    idNum = "id" + idno;
    newInput.setAttribute("id", idNum);
    console.log(newInput);
    newOutput.setAttribute("id", idOut);
    console.log(newOutput);

outidlist.push(idOut) ;
console.log(outidlist);

    var inputField = document.getElementById('inputForm');
    newInput.classList="inputFieldBtn";
    var outputList = document.getElementById('outputList')

    inputField.appendChild(newInput);
    inputField.appendChild(newBreak);
    outputList.appendChild(newOutput);

}
 function changepadding(){
var padding = document.getElementById("paddingid").value;
console.log(padding);
newPadding = padding + "px";

inputimage.style.paddingLeft = newPadding;
}
function changedim(image,heightd,widthd,paddingg){
    let height = document.getElementById(heightd).value;
    let width = document.getElementById(widthd).value;
    var padding = document.getElementById(paddingg).value;
console.log(padding);
newPadding = padding + "px";

image.style.paddingLeft = newPadding;
    newHeight = height + "px";
    console.log(newHeight);
    
    newWidth = width + "px";
    console.log(newWidth);
    image.style.height = newHeight;
    
    image.style.width = newWidth;
    console.log(image);

}
function editingImage(paddingId){
   var padslider = document.createElement("input");
   var paddingId
   var sdimage = document.getElementById("backgroundImage")
   padslider.setAttribute("min","30");
   padslider.setAttribute("max","500")
   padslider.id = paddingId;
//    padslider.setAttribute('onchange',"changedim(sdimage,`heightd`,`widthd`,`paddingg`)")
   console.log(paddingId);
   padslider.type ="range"
   console.log(padslider);
   var inputField = document.getElementById('inputForm');
   inputField.appendChild(padslider);
   padslider.addEventListener("change",function(){changedim(sdimage,`seconImgHeight`,`seconImgWidth`,`seconImgPadding`)})
//    var paddingValue = document.getElementById(`seconImgPadding`).value;
//    newPaddingValue = paddingValue+"px" 
//    var secondImage = document.getElementById(`backgroundImage`);
//    secondImage.style.paddingLeft = newPaddingValue;


//    var i =0;
// do {
  
// } while (i==1);

// while (i<2) {  editingImage("secondImgHeight");
// editingImage("secondImgWidth");
//     i=i+1;
// }
  

      
//   }  editingImage("seconImgPadding");
//    editingImage("seconImgHeight");
//    editingImage("seconImgWidth");
}
function editingImages(){
    editingImage("seconImgPadding");
   editingImage("seconImgHeight");
   editingImage("seconImgWidth");
   console.log(outidlist);

}


// var secondImageEditingg = document.getElementById(`secondImageEditing`);
// secondImageEditingg.addEventListener("click",function(){editingImage("seconImgPadding")})
// imageBeside = document.getElementById("imageBeside");
// imageBeside.addEventListener("click",()=>{
    function addClass(){
    imageMerge = document.getElementById("imageMerge");
    imageMerge.classList="row"
} 