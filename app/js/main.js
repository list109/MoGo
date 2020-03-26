
// menu ===================================================
menu(btn_header_menu, "btn_active", {
    elements: [ menu_header], 
    classList: ["menu-header_active"],
});


// slider ==================================================
new Slider({
    slider: headerSlider,
    arrowLeft: headerSliderLeft,
    arrowRight: headerSliderRight,
});

new Slider({
    slider: iconCommentSlider,
    arrowLeft: iconCommentSliderLeft,
    arrowRight: iconCommentSliderRight,
});

new Slider({
    slider: commentSlider,
    arrowLeft: commentSliderLeft,
    arrowRight: commentSliderRight,
});

// counter ===================================================
new Counter(awardsCounter, 30); // data-counter and data-counter-item

//accordion =================================================
new Accordion("btn_action_flip"); // behavior