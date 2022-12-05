function scrollappear() {
    var introtext = document.querySelector('.side-text');
    var sideImage = document.querySelector('.side-text');
    var introPosition = introtext.getBoundingClientRect().top;
    var imagePosition = sideImage.getBoundingClientRect().top;
    var screenpPosition = window.innerHeight /1.2;
    if(introPosition < screenPosition){
        introtext.classList.add('side-text-appear')
    if(imagePosition < screenPosition){
        sideImage.classList.add('side-image-appear')
    }    
    }
}