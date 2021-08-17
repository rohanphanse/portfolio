const Utility = {}

Utility.monthToNumber = (month) => {
    // prettier ignore
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return months.indexOf(month)
}

Utility.sortByDate = (projectData, options = {}) => {
    let data = projectData.sort((a, b) => {
        if (a.date.year === b.date.year) {
            const month_difference =
                Utility.monthToNumber(a.date.month) -
                Utility.monthToNumber(b.date.month)
            if (month_difference === 0) {
                return b.title.localeCompare(a.title)
            } else {
                return month_difference
            }
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
    HTML: { color: "#e34c26" },
    CSS: { color: "#264de4" },
    JavaScript: { color: "#f7df1e", textColor: "black" },
    Python: { color: "#ffe873", textColor: "black" },
    Snap: { color: "#e0a817", textColor: "black" },
    React: { color: "#61dbfb", textColor: "black" },
    "Next.js": { color: "white", textColor: "black" }
}

Utility.searchByQueryList = (queryList, [entries, entriesById], searchableValues) => {
    const searched_entries_count = {}

    for (const query of queryList) {
        entries.filter((entry) => {
            const contains_query = searchableValues.filter((value) => {
                return value
                    .toString()
                    .toLowerCase()
                    .includes(query.toLowerCase())
            }).length

            if (contains_query) {
                searched_entries_count[entry.id] =
                    searched_entries_count[entry.id]
                        ? searched_entries_count[entry.id] + 1
                        : 1
            }
        })
    }

    const searched_entries = []
    for (const id in searched_entries_count) {
        if (searched_entries_count[id] === query.length) {
            searched_entries.push(entriesById[id])
        }
    }
}

export default Utility
