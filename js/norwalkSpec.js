var nodes = new vis.DataSet([{
        id: 'neca',
        label: 'NECA'
    },
    {
        id: 'norwalkHS',
        label: 'Norwalk\nHigh School'
    },
    {
        id: 'norwalkPS',
        label: 'Norwalk PS\nBoard of Education'
    },
    {
        id: 'norwalkCity',
        label: 'City of Norwalk'
    },
    {
        id: 'ctDeptOfED',
        label: 'Connecticut\nDepartment of Education'
    },
    {
        id: 'norwalkMS',
        label: 'Norwalk MS System'
    },
    {
        id: 'norwalkCC',
        label: 'Norwalk\nCommunity College'
    },
    {
        id: 'norwalkED',
        label: 'Norwalk\nED Foundation'
    },
    {
        id: 'ibm',
        label: 'IBM'
    },
    {
        id: 'students',
        label: 'Students'
    },
    {
        id: 'pTech',
        label: 'P-TECH Program'
    }
])

var edges = new vis.DataSet([{
        from: 'ctDeptOfED',
        to: 'norwalkPS',
        arrows: 'to'
    },
    {
        from: 'ctDeptOfED',
        to: 'neca',
        arrows: 'to'
    },
    {
        from: 'ctDeptOfED',
        to: 'norwalkCC',
        arrows: 'to'
    },
    {
        from: 'norwalkPS',
        to: 'norwalkCity',
        arrows: 'from, to'
    },
    {
        from: 'norwalkPS',
        to: 'norwalkHS',
        arrows: 'to'
    },
    {
        from: 'norwalkPS',
        to: 'neca',
        arrows: 'to'
    },
    {
        from: 'norwalkPS',
        to: 'norwalkMS',
        arrows: 'to'
    },
    {
        from: 'norwalkCity',
        to: 'norwalkHS',
        arrows: 'to'
    },
    {
        from: 'norwalkCity',
        to: 'norwalkMS',
        arrows: 'to'
    },
    {
        from: 'norwalkCity',
        to: 'neca',
        arrows: 'to'
    },
    {
        from: 'norwalkMS',
        to: 'students',
        arrows: 'to'
    },
    {
        from: 'norwalkMS',
        to: 'neca',
        arrows: 'from, to'
    },
    {
        from: 'norwalkHS',
        to: 'students',
        arrows: 'to'
    },
    {
        from: 'norwalkED',
        to: 'neca',
        arrows: 'to'
    },
    {
        from: 'norwalkCC',
        to: 'neca',
        arrows: 'from, to'
    },
    {
        from: 'norwalkCC',
        to: 'ibm',
        arrows: 'from, to'
    },
    {
        from: 'norwalkCC',
        to: 'students',
        arrows: 'from, to'
    },
    {
        from: 'ibm',
        to: 'neca',
        arrows: 'from, to'
    },
    {
        from: 'ibm',
        to: 'students',
        arrows: 'from, to'
    },
    {
        from: 'students',
        to: 'neca',
        arrows: 'from, to'
    },
    {
        from: 'neca',
        to: 'pTech',
        arrows: 'from, to'
    }
])

var container = document.getElementById('ntwrkNorwalk')

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
            "avoidOverlap": .17
        },
        "minVelocity": 0.75,
        "solver": "forceAtlas2Based"
    }
}

var network = new vis.Network(container, data, options)