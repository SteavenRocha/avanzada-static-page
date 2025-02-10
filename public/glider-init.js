import Glider from "glider-js";

window.addEventListener("load", () => {
    new Glider(document.querySelector(".carousel__lista"), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: ".carousel__indicadores",
        arrows: {
            prev: ".carousel__anterior",
            next: ".carousel__siguiente",
        },
    });
});
