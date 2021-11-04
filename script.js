
function defaultValues() {

    var fSize = document.getElementsByName("fontSize");
    var size = [];
    let sizelimit = 50;
    let tempSize = 2;
    for (let i = 0; i < sizelimit; i++) {
        var options = document.createElement("Option");
        var textNode = document.createTextNode(tempSize + "px")
        options.appendChild(textNode);
        size.push(options);
        tempSize += 2;
    }
    for (let index = 0; index < size.length; index++) {
        fSize[0].appendChild(size[index]);
    }
}
function fontsize(sizeTag) {
    console.log(sizeTag.options[sizeTag.selectedIndex].text);
    var fontvalue = sizeTag.options[sizeTag.selectedIndex].text;
    console.log(fontvalue);
    var divPreview = document.getElementById("divPreview")
    let sizeObj = {
        "font-size": fontvalue,

    };
    console.log(sizeObj);
    Object.assign(divPreview.style, sizeObj)
}
let check = 0;
function makebold() {

    if (check % 2 == 0) {
        divPreview.classList.add("bold")
        console.log(divPreview);
        check++;
    } else {
        divPreview.classList.remove("bold");
        check--;
    }

}

function makeitalic() {
    if (check % 2 == 0) {
        console.log(divPreview);
        divPreview.classList.add("italic");

        check++;
    } else {
        divPreview.classList.remove("italic");
        check--;
    }
}
function makeunderline() {
    if (check % 2 == 0) {
        console.log(divPreview);
        divPreview.classList.add("underline");

        check++;
    } else {
        divPreview.classList.remove("underline");
        check--;
    }

}

function editing() {
    var rama;
    rama = document.getElementById('firstInput').value;
    console.log(rama)
    document.getElementById('firstOut').innerHTML = rama;
    var bgcolors = document.getElementById("colorid").value;
    console.log(bgcolors);
    var listStyleChange = document.getElementById('outputList');
    listStyleChange.removeAttribute("list-style-type");
    listStyleChange.style = "list-style-type :circle";
    console.log(listStyleChange);

    let divimage = document.getElementById("divPreview")
    divimage.style.backgroundColor = bgcolors;

    for (let j = 0; j < outidlist.length; j++) {
        let element = outidlist[j];
        let inputIds = inputIdList[j];
        console.log(element);
        console.log(inputIds);
        rama = document.getElementById(inputIds).value;
        console.log(rama);
        document.getElementById(element).innerHTML = rama

    }


}
function changeFont(selectTag) {
    font = document.getElementById("font").value;
    preview = document.getElementById("divPreview");
    var listvalue = selectTag.options[selectTag.selectedIndex].text;
    FontObj = { "font-family": listvalue }
    Object.assign(preview.style, FontObj);
    console.log(preview);
}
function saveas() {
    // domtoimage.toBlob(document.getElementById('divPreview')).then(function (blob) {
    //     window.saveAs(blob, "platoimage.png")
    // });
    // document.getElementById("divPreview").style.width=1080+"px";
    // document.getElementById("divPreview").style.height=1080+"px";

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
    });


}
function preview() {
    html2canvas(document.querySelector("#divPreview")).then(canvas => {
        document.body.appendChild(canvas)
        // console.log(canvas);
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
    if (inputId == "ImgSecond") {
        editingImage("seconImgPadding", "Padding");
        setTimeout(() => {
            editingImage("seconImgHeight", "Height");
        }, 400);
        setTimeout(() => {
            editingImage("seconImgWidth", "Width");
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
    console.log(outidlist);
    console.log(inputIdList);
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
function editingImage(paddingId, labelIds) {

    var padslider = document.createElement("input");
    var labels = document.createElement("label");
    console.log(labels);
    var labelIds
    console.log(labelIds);
    var paddingId
    labels.id = labelIds;
    labels.classList = "col-3 button"
    var sdimage = document.getElementById("ImgSecond")
    if (paddingId == "seconImgPadding") {
        padslider.setAttribute("max", "300")
    } else {
        padslider.setAttribute("max", "600")
    }
    padslider.setAttribute("min", "0");

    padslider.classList = "col-6"
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
function addClass() {
    imageMerge = document.getElementById("imageMerge");
    imageMerge.classList = "row"
}

function makeBackGround(event) {
    window.localStorage.removeItem("image-recent");
        const reader = new FileReader;
    reader.readAsDataURL(event.target.files[0]);
    reader.addEventListener("load", () => {
        window.localStorage.setItem("image-recent", reader.result);
        console.log(reader.result);
        (() => {
            var divPreview = document.getElementById("divPreview")
            let bgobj = {
                "background-image": `url(` + window.localStorage.getItem("image-recent") + `)`,
                "z-index": 1
            };
            console.log(bgobj);
            Object.assign(divPreview.style, bgobj)
            console.log(divPreview);
        })()
    }
    )
}
window.onunload = () => {
    window.localStorage.clear();
}
