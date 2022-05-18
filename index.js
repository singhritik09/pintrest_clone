const image_upload=document.getElementById("picture");
// var uploaded_image="";

image_upload.addEventListener("change", function(){
    const reader=new FileReader();
    reader.addEventListener("load", ()=>{
        const uploaded_image=reader.result;
        document.querySelector("#pin_image").style.backgroundImage= `url(${uploaded_image})`;

    });
    reader.readAsDataURL(this.files[0]);
});
