var nodes = new vis.DataSet([{
        id: 'kyFame',
        label: 'KY FAME'
    },
    {
        id: 'bctc',
        label: 'BCTC'
    },
    {
        id: 'bctcAmc',
        label: 'BCTC-AMC'
    },
    {
        id: 'namMi',
        label: 'NAM-MI'
    },
    {
        id: 'fki',
        label: 'FKI'
    },
    {
        id: 'companyMembers',
        label: 'Company Members'
    },
    {
        id: 'kctcs',
        label: 'KCTCS'
    },
    {
        id: 'skillsNetwork',
        label: 'KY Skills\nNetwork'
    },
    {
        id: 'kyCabinet',
        label: 'KY Cabinet\nfor\nEcon. Development'
    },
    {
        id: 'kyGa',
        label: 'KY GA'
    },
    {
        id: 'kyGov',
        label: 'KY Gov. WRSI'
    },
    {
        id: 'kheaa',
        label: 'KHEAA WRKS'
    },
    {
        id: 'students',
        label: 'Students'
    },
    {
        id: 'amt',
        label: 'AMT Coordinator'
    },
    {
        id: 'companySponsors',
        label: 'Company Sponsors'
    }
])

var edges = new vis.DataSet([{
        from: 'kyFame',
        to: 'bctcAmc',
        arrows: 'to'
    },
    {
        from: 'fki',
        to: 'kyFame',
        arrows: 'to'
    },
    {
        from: 'namMi',
        to: 'kyFame',
        arrows: 'to'
    },
    {
        from: 'bctc',
        to: 'kyFame',
        arrows: 'from, to'
    },
    {
        from: 'bctc',
        to: 'kctcs',
        arrows: 'from, to'
    },
    {
        from: 'companyMembers',
        to: 'kyFame',
        arrows: 'from, to'
    },
    {
        from: 'companyMembers',
        to: 'bctcAmc',
        arrows: 'to'
    },
    {
        from: 'companySponsors',
        to: 'kyFame',
        arrows: 'from, to'
    },
    {
        from: 'companySponsors',
        to: 'bctcAmc',
        arrows: 'to'
    },
    {
        from: 'companySponsors',
        to: 'students',
        arrows: 'to'
    },
    {
        from: 'companySponsors',
        to: 'amt',
        arrows: 'from, to'
    },
    {
        from: 'amt',
        to: 'bctcAmc',
        arrows: 'from, to'
    },
    {
        from: 'amt',
        to: 'students',
        arrows: 'from, to'
    },
    {
        from: 'students',
        to: 'bctcAmc',
        arrows: 'from, to'
    },
    {
        from: 'students',
        to: 'kyFame',
        arrows: 'from, to'
    },
    {
        from: 'kctcs',
        to: 'skillsNetwork',
        arrows: 'from, to'
    },
    {
        from: 'skillsNetwork',
        to: 'kyFame',
        arrows: 'from, to'
    },
    {
        from: 'kyCabinet',
        to: 'kyFame',
        arrows: 'to'
    },
    {
        from: 'kyCabinet',
        to: 'skillsNetwork',
        arrows: 'to'
    },
    {
        from: 'kyCabinet',
        to: 'kheaa',
        arrows: 'to'
    },
    {
        from: 'kyCabinet',
        to: 'kctcs',
        arrows: 'to'
    },
    {
        from: 'kyGa',
        to: 'kheaa',
        arrows: 'to'
    },
    {
        from: 'kyGa',
        to: 'kyGov',
        arrows: 'from, to'
    },
    {
        from: 'kyGov',
        label: 'kyCabinet',
        arrows: 'to'
    },
    {
        from: 'kyGov',
        to: 'kctcs',
        arrows: 'to'
    },
    {
        from: 'kyGov',
        to: 'kheaa',
        arrows: 'to'
    },
    {
        from: 'kyGov',
        to: 'bctcAmc',
        arrows: 'to'
    },
    {
        from: 'kyGov',
        to: 'kyCabinet',
        arrows: 'to'
    },
    {
        from: 'kheaa',
        to: 'students',
        arrows: 'to'
    }
])

var container = document.getElementById('ntwrkKyFame')

var data = {
    nodes: nodes,
    edges: edges
}

var options = {
    layout: {
        randomSeed: 69
    },
    physics: {
        "forceAtlas2Based": {
            "springLength": 100,
            "avoidOverlap": 1
        },
        "minVelocity": 0.75,
        "solver": "forceAtlas2Based"
    }
}

var network = new vis.Network(container, data, options)