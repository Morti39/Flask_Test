const slide =document.querySelectorAll('.slide');
const controls = document.querySelectorAll('.controls');
console.log(slide, controls)
let sliderIndex  = [0, 1, 2, 3, 4] ;
function show(sliderIndex) {
    slide.forEach((slider) => {
        slider.classList.add('hidden');
    })
    slide[sliderIndex[0]].classList.remove('hidden');
    slide[sliderIndex[1]].classList.remove('hidden');
    slide[sliderIndex[2]].classList.remove('hidden');
}
controls.forEach((e) => {
    e.addEventListener('click', () => {
        if(event.target.classList.contains('prev')) {
            for(let i = 0; i<5; i++) {
                sliderIndex[i] -= 1;
                if (sliderIndex[i] <0) {
                    sliderIndex[i] = sliderIndex.length -1
                }
            };
            show(sliderIndex)
            console.log(sliderIndex)
            document.getElementById('slider').insertBefore(document.getElementById(sliderIndex[0]), document.getElementById(sliderIndex[1]))
            document.getElementById('slider').insertBefore(document.getElementById(sliderIndex[1]), document.getElementById(sliderIndex[2]))
        } if(event.target.classList.contains('next')) {
            for(let i = 0; i<5; i++) {
                sliderIndex[i] += 1;
                if (sliderIndex[i] > 4) {
                    sliderIndex[i] = 0
                }
            };
            show(sliderIndex)
            console.log(sliderIndex)
            document.getElementById('slider').insertBefore(document.getElementById(sliderIndex[1]), document.getElementById(sliderIndex[2]))
            document.getElementById('slider').insertBefore(document.getElementById(sliderIndex[0]), document.getElementById(sliderIndex[1]))
    }
})
})