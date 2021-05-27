const Utility = {}

Utility.monthToNumber = (month) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return months.indexOf(month)
}

Utility.sortByDate = (projectData, options = {}) => {
    let data = projectData.sort((a, b) => {
        if (a.date.year === b.date.year) {
            return Utility.monthToNumber(a.date.month) - Utility.monthToNumber(b.date.month)
        } else {
            return a.date.year - b.date.year
        }
    })
    const order = options.order || "decreasing"
    if (order === "decreasing") {
        data.reverse()
    }
    return data
}

Utility.formatDate = (date) => {
    return `${date.month} ${date.year}`
}

Utility.languageTags = {
    "HTML": { color: "#e34c26" },
    "CSS": {color: "#264de4" },
    "JavaScript": { color: "#f7df1e", textColor: "black" },
    "Python": { color: "#ffe873", textColor: "black" },
    "Snap": { color: "#e0a817", textColor: "black" },
    "React": { color: "#61dbfb", textColor: "black" },
    "Next.js": { color: "white", textColor: "black"  },
}

Utility.getProject = (projectData, id) => {
    const filtered = projectData.filter(project => project.id === id)
    if (filtered.length) {
        return filtered[0]
    } else {
        return "Error"
    }
}

export default Utility