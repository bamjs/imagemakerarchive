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
        const inputIds = inputIdList[j];
        rama = document.getElementById(inputIds).value;
        document.getElementById(element).innerHTML = rama

    }



}
function saveas() {
    // domtoimage.toBlob(document.getElementById('divPreview')).then(function (blob) {
    //     window.saveAs(blob, "platoimage.png")
    // });
document.getElementById("divPreview").style.width=1080+"px";
document.getElementById("divPreview").style.height=1080+"px";

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

        }
        document.getElementById("divPreview").style.width=720+"px";
document.getElementById("divPreview").style.height=720+"px";
    });


}
function preview() {
    html2canvas(document.querySelector("#divPreview")).then(canvas => {
        document.body.appendChild(canvas)
        console.log(canvas);
        
    });
}
//     }

function previewimage(event, inputId, parentId) {
    var image = URL.createObjectURL(event.target.files[0]);
    console.log(image)
    let inputimage = document.getElementById(inputId);
    inputimage.src = ""
    inputimage.src = image;
    // inputimage.id = imageId;
    console.log(inputimage);
    console.log(inputimage);
    divPreview = document.getElementById(parentId);
    divPreview.appendChild(inputimage);
    console.log(divPreview)
    if (inputId == "backgroundImage" ) {
         editingImage("seconImgPadding","Padding");
    setTimeout(() => {
        editingImage("seconImgHeight","Height");
    }, 400);
    setTimeout(() => {
        editingImage("seconImgWidth","Width");
    }, 1000);


    console.log(outidlist);
    }
}


var idno = 0;
var outidlist = [];
var inputIdList = [];
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

    outidlist.push(idOut);
    console.log(outidlist);
    inputIdList.push(idNum);
    console.log(inputIdList);
    var inputField = document.getElementById('inputForm');
    newInput.classList = "inputFieldBtn";
    var outputList = document.getElementById('outputList')

    inputField.appendChild(newInput);
    inputField.appendChild(newBreak);
    outputList.appendChild(newOutput);

}
function changepadding() {
    var padding = document.getElementById("paddingid").value;
    console.log(padding);
    newPadding = padding + "px";

    inputimage.style.paddingLeft = newPadding;
}
function changedim(image, heightd, widthd, paddingg) {
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
function editingImage(paddingId,labelIds) {
    
    var padslider = document.createElement("input");
    var labels = document.createElement("label");
    console.log(labels);
    var labelIds
    console.log(labelIds);
    var paddingId
    labels.id = labelIds;
    labels.classList ="col-3 button"
   var sdimage = document.getElementById("backgroundImage")
   if (paddingId =="seconImgPadding") {
    padslider.setAttribute("max", "300");
    padslider.setAttribute("min", "-30");
   } else {
    padslider.setAttribute("max", "600");
    padslider.setAttribute("min", "0");
   }
    
    
    padslider.classList ="col-6"
    padslider.id = paddingId;
    //    padslider.setAttribute('onchange',"changedim(sdimage,`heightd`,`widthd`,`paddingg`)")
    console.log(paddingId);
    padslider.type = "range"
    console.log(padslider);
    labels.innerHTML = labelIds;
    var inputField = document.getElementById('secondImage');
    inputField.appendChild(labels);
    inputField.appendChild(padslider);
    padslider.addEventListener("change", function () { changedim(sdimage, `seconImgHeight`, `seconImgWidth`, `seconImgPadding`) })
   }
// function editingImages() {
//     editingImage("seconImgPadding");
//     setTimeout(() => {
//         editingImage("seconImgHeight");
//     }, 300);
//     setTimeout(() => {
//         editingImage("seconImgWidth");
//     }, 600);


//     console.log(outidlist);
//     secondImageEditing.disabled = true;

// }

function addClass() {
    imageMerge = document.getElementById("imageMerge");
    imageMerge.classList = "row"
}

function makeBackGround(){
    // var backgroundImages= document.getElementById("backgroundImage")
    // let imageSource = backgroundImages.src
    // console.log(imageSource);
    
    // divPreview.style.backgroundImage = "url(`"+imageSource+"`)";
    // console.log(divPreview);
    // console.log(backgroundImage);


}