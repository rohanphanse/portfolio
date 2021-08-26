import { projectData } from "./projects"
import { blogData } from "./blog"
import Utility from "../utility"

const projects = projectData.map((project) => ({
    title: project.title,
    description: project.description,
    link: `/projects/${project.id}`,
    type: "project",
    id: project.id
}))

const pages = [
    {
        title: "Home",
        description: "The home",
        link: "/"
    },
    {
        title: "About",
        description: "Learn about me!",
        link: "/about"
    },
    {
        title: "Projects",
        description: "See my projects",
        link: "/projects"
    },
    {
        title: "Blog",
        description: "Read my blog articles!!!! :)",
        link: "/blog"
    },
    {
        title: "Contact",
        description: "Contact me",
        link: "/contact"
    },
    {
        title: "Search",
        description: "Search sitewide for stuff",
        link: "/search"
    }
]

for (let p = 0; p < pages.length; p++) {
    pages[p].type = "page"
}

const articles = blogData.map((article) => ({
    title: article.title,
    description: article.description,
    link: `/blog/${article.id}`,
    type: "article"
}))

export const siteData = [...projects, ...pages, ...articles]
export const siteDataById = {}

for (let s = 0; s < siteData.length; s++) {
    const id = Utility.generateId()
    siteData[s].id = id
    siteDataById[id] = siteData[s]
}
