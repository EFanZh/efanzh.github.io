const $ = document.querySelector.bind(document);

function addHeadingLinks(article) {
    const headings = [];

    for (const child of article.children) {
        if (child instanceof HTMLHeadingElement) {
            const headingAnchor = document.createElement("a");

            headingAnchor.classList.add("heading-anchor");
            headingAnchor.href = `#${child.id}`;
            headingAnchor.innerText = "§";

            headings.push([child, headingAnchor]);
        }
    }

    for (const [heading, anchor] of headings) {
        heading.appendChild(anchor);
    }
}

const root = $(":root");
const nav = $("nav");
const splitter = nav.nextElementSibling;

addHeadingLinks($("article"));

splitter.addEventListener("pointerdown", function (e0) {
    const minSidebarWidth = 0;
    const savedSidebarWidth = nav.offsetWidth - e0.x;

    if (e0.pointerType === "touch") {
        function moveHandler(e1) {
            root.style.setProperty(
                "--sidebar-width",
                Math.max(savedSidebarWidth + e1.touches[0].clientX, minSidebarWidth) + "px"
            );
        }

        function upHandler() {
            this.removeEventListener("pointerup", upHandler);
            this.removeEventListener("touchmove", moveHandler);
        }

        this.addEventListener("touchmove", moveHandler);
        this.addEventListener("pointerup", upHandler);
    } else if (e0.button === 0) {
        const pointerId = e0.pointerId;

        function moveHandler(e1) {
            root.style.setProperty("--sidebar-width", Math.max(savedSidebarWidth + e1.x, minSidebarWidth) + "px");
        }

        function upHandler() {
            this.removeEventListener("lostpointercapture", upHandler);
            this.removeEventListener("pointermove", moveHandler);
        }

        this.setPointerCapture(pointerId);
        this.addEventListener("pointermove", moveHandler);
        this.addEventListener("lostpointercapture", upHandler);
    }
});
