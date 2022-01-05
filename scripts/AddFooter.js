
const supportLinks = [
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

const aboutUsLinks = [
    {
        text: "About us",
        href: "/spelsite/pages/About.html"
    },

    {
        text: "Work for us",
        href: "None"
    }
]

const legalLinks = [
    {
        text: "Terms",
        href: "None"
    },

    {
        text: "Copyright",
        href: "None"
    },

]

const sections = [
    {
        header: "Support",
        links: supportLinks
    },

    {
        header: "About us",
        links: aboutUsLinks
    },

    {
        header: "Legal",
        links: legalLinks
    }
]

const root = document.createElement("FOOTER")

for (let section of sections){
    console.log(section)
    if (section.links === undefined || section.links.length === 0) continue

    const element = document.createElement("SECTION")
    const header = document.createElement("H3")
    header.innerHTML = section.header

    const list = document.createElement("UL")
    for (let link of section.links){
        const item = document.createElement("LI")
        const anchor = document.createElement("A")
        anchor.innerHTML = link.text
        anchor.href = link.href
        item.appendChild(anchor)
        list.appendChild(item)
    }

    element.appendChild(header)
    element.appendChild(document.createElement("HR"))
    element.appendChild(list)

    root.appendChild(element)
}
document.body.appendChild(root)


