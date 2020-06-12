
var image_index = 0;
var images = [
'X1.jpg',
'X2.png',
'X3.jpg',
'X4.jpg',
'X5.jpg',
'X6.png',
'X7.png',
'X8.png',
'X9.png',
'X10.png',
'X11.jpg',
'X12.jpg',



];


var bg_image_index = 0;
var bg_images = [
	'A1.jpg',
	'A2.jpg',
	'B1.jpg',
'B2.jpg',
'B3.jpg',
'B4.jpg',
'B5.jpg',
'B6.jpg',
'B7.jpg',
'B8.jpg',
'B9.jpg',
'C.jpg',
'C2.jpg',
'D.jpg',
'E.jpg',
'F.jpg',
'G.jpg',
];



document.addEventListener('DOMContentLoaded', ()=>{
	document.querySelector('#click-change').addEventListener('click', ()=>{
		if(image_index === images.length-1){
			image_index = 0;
		} else {
			image_index++;
		}
		const nextImage = images[image_index];
		document.querySelector('#click-change').src = 'images/'+nextImage;
	});

	document.querySelector('body').addEventListener('click', (e)=>{
		if(e.target.tagName === 'BODY'){
			if(bg_image_index === bg_images.length-1){
				bg_image_index = 0;
			} else {
				bg_image_index++;
			}
			const nextImage = bg_images[bg_image_index];
			document.querySelector('body').style.backgroundImage = 'url(background-images/'+nextImage+')';
		}
	});
});



/*sound on hover A */
function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}
