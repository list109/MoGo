
class Slider {
    constructor({
        slider,
        arrowLeft,
        arrowRight,
    }) {
        this.slider = slider;
        slider.style.position = "relative";
        slider.style.left = 0;
        this.arrowLeft = arrowLeft;
        this.arrowRight = arrowRight;
        this.reset = this.reset.bind(this);

        arrowLeft.onclick = arrowRight.onclick = this.arrows.bind(this);
        window.addEventListener("resize", this.reset);
    }

    arrows(event) {
        let offsetWidth = this.slider.offsetWidth;
        let left = parseInt(this.slider.style.left);
        let amount = (event.currentTarget == this.arrowLeft) ? left + offsetWidth : left - offsetWidth;
        amount = (amount > 0) ? 0 :
        // if the rest part of slider line smaller than 10px then no changes
        (this.slider.scrollWidth + amount < 10) ? amount + offsetWidth : amount;
        this.slider.style.left = amount + "px";
    }

    reset() {
        this.slider.style.left = 0 + 'px';
    }
};

// Pattern of HTML slider:
// block slider
//     block slider-container
//         block slider-line  
//             blocks slider-item * n
//     block slider-buttons        