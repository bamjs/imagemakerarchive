// function editing(){
//     var rama 
//     rama = document.getElementsById('firsttag').value;
//     console.log(rama)
//     rama.style.fontFamily = ramabadhra
//     document.getElementsById("output1").innerHtml = rama
// }



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
    var idNum = "id" + idno;
    console.log(idNum);
    rama = document.getElementById(idNum).value;
    console.log(rama)
    document.getElementById(idOut).innerHTML = rama
   


}
function saveas() {
    // domtoimage.toBlob(document.getElementById('divPreview')).then(function (blob) {
    //     window.saveAs(blob, "platoimage.png")
    // });
    html2canvas(document.querySelector("#divPreview")).then(canvas => {
        document.body.appendChild(canvas);
        canvas.id = "mycanvas";
        let mycanvas = document.getElementById('mycanvas');
    let convertedImage = document.getElementById('convertedImage')
    const dataURI = mycanvas.toDataURL('image/jpeg');
    convertedImage.src = dataURI;
    

    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(mycanvas.msToBlob(), "imagecan.png")
    } else {
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = mycanvas.toDataURL();
        a.download = "imagecan.png";
        a.click();
        document.removeChild(a);
    }
     })
    

}
function preview() {
        html2canvas(document.querySelector("#divPreview")).then(canvas => {
            document.body.appendChild(canvas);
            canvas.id = "mycanvas"
            console.log(canvas);
           
          
            let mycanvas = document.getElementById('mycanvas');
            let convertedImage = document.getElementById('convertedImage')
            const dataURI = mycanvas.toDataURL('image/jpeg');
            convertedImage.src = dataURI;
            console.log(convertedImage);
        });
    }
//     }

function previewimage(event, inputId, parentId) {
    var heightpx = document.getElementById('idheight') + "px";
    var widthpx = document.getElementById('idwidth') + "px";
    console.log(heightpx)
    var image = URL.createObjectURL(event.target.files[0]);
    console.log(image)
    inputimage = document.getElementById(inputId);
    inputimage.src = ""
    inputimage.src = image;
    console.log(inputimage);
    inputimage.setAttribute("class","displayimage") ;
    console.log(inputimage);
    // console.log(widthpx);
    // inputimage.setAttribute("style,height:200px");
    // inputimage.style.height = heightpx;
    // console.log(inputimage)
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