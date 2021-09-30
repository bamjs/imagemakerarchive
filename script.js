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
        rama = document.getElementById(idNum).value;
    console.log(rama)
    document.getElementById(idOut).innerHTML = rama
   


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

function previewimage(event, inputId, parentId) {
       let image = URL.createObjectURL(event.target.files[0]);
    console.log(image)
    inputimage = document.getElementById(inputId);
    inputimage.src = ""
    inputimage.src = image;
    console.log(inputimage);
      divPreview = document.getElementById(parentId);
    divPreview.appendChild(inputimage);
    console.log(divPreview)
}


var idno = 0;
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
function changedim(){
    let height = document.getElementById("heightid").value;
    let width = document.getElementById("widthid").value;
    newHeight = height + "px";
    console.log(newHeight);
    
    newWidth = width + "px";
    console.log(newWidth);
    inputimage.style.height = newHeight;
    
    inputimage.style.width = newWidth;
    console.log(inputimage);

}