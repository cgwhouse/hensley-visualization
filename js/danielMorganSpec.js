var nodes = new vis.DataSet([{
        id: 'danielMorganTechCenter',
        label: 'Daniel Morgan\nTechnology Center'
    },
    {
        id: 'spartanburgHS',
        label: 'Spartanburg\nHigh School'
    },
    {
        id: 'broomeHS',
        label: 'Broome High School'
    },
    {
        id: 'spartanburgCC',
        label: 'Spartanburg\nCommunity College'
    },
    {
        id: 'students',
        label: 'Students'
    },
    {
        id: 'workBasedLE',
        label: 'Work-Based LE'
    },
    {
        id: 'industry',
        label: 'Industry'
    },
    {
        id: 'cate',
        label: 'CATE Partnerships'
    },
    {
        id: 'schoolDistrict3',
        label: 'School District 3'
    },
    {
        id: 'schoolDistrict7',
        label: 'School District 7'
    },
    {
        id: 'scDeptED',
        label: 'SC Department of Education'
    }
])

var edges = new vis.DataSet([{
        from: 'scDeptED',
        to: 'danielMorganTechCenter',
        arrows: 'to'
    },
    {
        from: 'scDeptED',
        to: 'schoolDistrict3',
        arrows: 'to'
    },
    {
        from: 'scDeptED',
        to: 'schoolDistrict7',
        arrows: 'to'
    },
    {
        from: 'schoolDistrict3',
        to: 'danielMorganTechCenter',
        arrows: 'to'
    },
    {
        from: 'schoolDistrict3',
        to: 'broomeHS',
        arrows: 'to'
    },
    {
        from: 'schoolDistrict7',
        to: 'spartanburgHS',
        arrows: 'to'
    },
    {
        from: 'schoolDistrict7',
        to: 'danielMorganTechCenter',
        arrows: 'to'
    },
    {
        from: 'broomeHS',
        to: 'danielMorganTechCenter',
        arrows: 'to'
    },
    {
        from: 'broomeHS',
        to: 'students',
        arrows: 'to'
    },
    {
        from: 'spartanburgHS',
        to: 'danielMorganTechCenter',
        arrows: 'to'
    },
    {
        from: 'spartanburgHS',
        to: 'students',
        arrows: 'to'
    },
    {
        from: 'spartanburgCC',
        to: 'danielMorganTechCenter',
        arrows: 'to'
    },
    {
        from: 'students',
        to: 'spartanburgCC',
        arrows: 'to'
    },
    {
        from: 'students',
        to: 'danielMorganTechCenter',
        arrows: 'from, to'
    },
    {
        from: 'students',
        to: 'workBasedLE',
        arrows: 'to'
    },
    {
        from: 'workBasedLE',
        to: 'danielMorganTechCenter',
        arrows: 'from, to'
    },
    {
        from: 'workBasedLE',
        to: 'industry',
        arrows: 'to'
    },
    {
        from: 'industry',
        to: 'cate',
        arrows: 'to'
    },
    {
        from: 'cate',
        to: 'danielMorganTechCenter',
        arrows: 'to'
    },
    {
        from: 'cate',
        to: 'workBasedLE',
        arrows: 'to'
    }
])

var container = document.getElementById('ntwrkDanielMorgan')

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
            "avoidOverlap": .2
        },
        "minVelocity": 0.75,
        "solver": "forceAtlas2Based"
    }
}

var network = new vis.Network(container, data, options)