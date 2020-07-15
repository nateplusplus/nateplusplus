/**
 * Controller for interactive SVG image with a text mask.
 *
 * Clicking on a series of navigation links
 * advances masked photos.
 *
 * @author Nathan Blair <nateplusplus>
 **/
function SvgImageText() {
    this.images = [];
    this.links = [];
    this.activeIndex = 0;

    this.init();
}

/**
 * Methods for the SvgImageText object
 **/
SvgImageText.prototype = {
    /**
     * Setup everything and bind events.
     **/
    init: function () {
        this.setSvgWidth();
        this.getImages();
        this.getLinks();
        this.setActiveLink();
        this.bindEvents();
    },

    /**
     * Set the SVG text width to fill the screen.
     **/
    setSvgWidth: function () {
        const svg = document.querySelector("svg");
        const text = document.querySelector("#bgText");
        const bBox = text.getBBox();
        const viewBox = svg.getAttribute("viewBox");
        let coordinates = viewBox.split(" ");

        coordinates[2] = Math.round(bBox.width);

        svg.setAttribute("viewBox", coordinates.join(" "));
    },
    
    /**
     * Create an index array of images.
     *
     * Used to track which image should be active
     * and the direction of our slide animation.
     **/
    getImages: function () {
        document.querySelectorAll("svg image").forEach((image) => {
            this.images.push("#" + image.id);
        });
    },
    
    /**
     * Create an index array of navigation links
     * for tracking active state.
     **/
    getLinks: function () {
        document.querySelectorAll("#menubar a").forEach((link) => {
            this.links.push("#" + link.id);
        });
    },

    /**
     * Bind click events to all navigation links.
     **/
    bindEvents: function () {
        document.querySelectorAll(".menu-item").forEach((item) => {
            item.addEventListener("click", this.handleNavItemClick.bind(this));
        });
    },

    /**
     * Handle click events.
     **/
    handleNavItemClick: function (event) {
        event.preventDefault();
        this.doAnimation(event);
        this.setActiveLink();
    },
    
    /**
     * Determine which image should be active based on click event
     * and perform the animation.
     **/
    doAnimation: function (event) {
        this.setActiveIndex(event.target);
        this.images.forEach((id, index) => {
            this.setBackground(id);
            this.moveBackgroundImage(id);
        });
    },
    
    /**
     * Determine which image should be active based on click event.
     **/
    setActiveIndex: function (target) {
        const activeLinkIndex = this.links.indexOf("#" + target.id);
        if (activeLinkIndex !== -1) {
            this.activeIndex = activeLinkIndex;
        }
    },
    
    /**
     * Show and hide images based on whether they're active.
     **/
    setBackground: function (id) {
        const image = document.querySelector(id);
        const index = this.images.indexOf(id);
        if (index === this.activeIndex) {
            image.classList.remove("is-transparent");
        } else if (!image.classList.contains("is-transparent")) {
            image.classList.add("is-transparent");
        }
    },
    
    /**
     * Move each image according to their
     * index position in relation to what's active.
     *
     * Images swipe from right to left when navigating
     * forward and left to right when navigating backward.
     **/
    moveBackgroundImage: function (id) {
        const image = document.querySelector(id);
        const index = this.images.indexOf(id);
        image.classList.remove("image-right", "image-center");

        if (index < this.activeIndex) {
            image.classList.add("image-right");
        } else if (index === this.activeIndex) {
            image.classList.add("image-center");
        }
    },

    /**
     * Show and hide a style to indicate links are active.
     **/
    setActiveLink : function() {
        if ( this.links.length > 0 ) {
            const activeLink = document.querySelector( this.links[ this.activeIndex ] );
            document.querySelectorAll( '.is-active' ).forEach( element => {
                element.classList.remove('is-active');
            });
            activeLink.classList.add('is-active');
        }
    }
};

export default SvgImageText;
