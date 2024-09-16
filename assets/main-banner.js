class MainBannerCustom extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        textBannerAnimated();
    }

    disconnectedCallback() {
    }

    adoptedCallback() {
    }

    attributeChangedCallback(name, oldValue, newValue) {
    }
}

const textBannerAnimated = () => {

    const contents = document.querySelectorAll('.img-banner');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('show', entry.isIntersecting)
            if (entry.isIntersecting) observer.unobserve(entry.target);
        })
    }, {
        threshold: 0.1,
        root: document.querySelectorAll(null),
    });

    contents.forEach(content => {
        observer.observe(content);
    })
}

customElements.define("text-banner", MyCustomElement);
