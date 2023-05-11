gsap.set(".modal", { y: 80 });
Draggable.create(".modal", {
    type: "y",
    edgeResistance: 0.55,
    bounds: { minY: -400, maxY: 80 },
    inertia: true,
    onMove: function (e) {
        if (!isOpen && this.y <= this.maxY - threshold) {
            this.target.classList.add("open");
            this.endDrag();
            gsap.to(".modal", { y: this.minY });
            isOpen = true;
        } else if (isOpen && this.y > this.minY + threshold) {
            this.target.classList.remove("open");
            this.endDrag();
            gsap.to(".modal", { y: this.maxY });
            isOpen = false;
        }
    }
});

