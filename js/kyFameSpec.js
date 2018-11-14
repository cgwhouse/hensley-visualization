var nodes = new vis.DataSet([{}])

var edges = new vis.DataSet([{}])

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
            "avoidOverlap": .1
        },
        "minVelocity": 0.75,
        "solver": "forceAtlas2Based"
    }
}

var network = new vis.Network(container, data, options)