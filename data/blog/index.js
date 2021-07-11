export const blogData = [
    {
        id: "cce-pausd-showcase",
        title: "Shape Wars Featured in CCE PAUSD Showcase",
        description: "Out of 100+ students taking AP Computer Science Principles (APCSP) at my school during the 2020-2021 school year, the projects of 11 students were selected to be featured in the CCE PAUSD Digital Showcase. And mine was one of them!",
        date: { day: 4, month: "July", year: 2021 },
        thumbnail: "/images/projects/shape-wars.png"
    }
]

export const blogDataById = {}
for (const article of blogData) {
    blogDataById[article.id] = article
}

