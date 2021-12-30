
const supportContent = [
    {
        text: "FAQ",
        href: "None"
    },

    {
        text: "Support",
        href: "None"
    },

    {
        text: "Contact",
        href: "None"
    }
]

const aboutUsContent = [
    {
        text: "About us",
        href: "/spelsite/pages/About.html"
    },

    {
        text: "Work for us",
        href: "None"
    }
]

const legalContent = [
    {
        text: "Terms",
        href: "None"
    },

    {
        text: "Copyright",
        href: "None"
    },

]

content = [
    {
        header: "Support",
        content: supportContent
    },

    {
        header: "About us",
        content: aboutUsContent
    },

    {
        header: "Legal",
        content: legalContent
    },
]

const root = document.createElement("FOOTER")

for (let cont of content){
    if (cont.content === undefined || cont.content.length === 0) continue

    const section = document.createElement("SECTION")
    const header = document.createElement("H3")
    header.innerHTML = cont.header
    const list = document.createElement("UL")

    for (let link of cont.content){
        const elem = document.createElement("LI")
        const a = document.createElement("A")
        a.innerHTML = link.text
        a.href = link.href
        elem.appendChild(a)
        list.appendChild(elem)
    }

    section.appendChild(header)
    section.appendChild(document.createElement("HR"))
    section.appendChild(list)
    root.appendChild(section)
}

const style = document.createElement("LINK")
style.rel = "stylesheet"
style.href = "../css/footer.css"
document.head.appendChild(style)
document.body.appendChild(root)


