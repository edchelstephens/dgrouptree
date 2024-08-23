
const chart_config = {
    chart: {
        container: "#basic-example",

        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodeExample1'
        }
    },
    nodeStructure: {
        text: {
            name: "Mark Hill",
            title: "Chief executive officer",
            contact: "Tel: 01 213 123 134",
        },
        image: "./images/2.jpg",
        children: [
            {
                text: {
                    name: "Joe Linux",
                    title: "Chief Technology Officer",
                },
                stackChildren: true,
                image: "./images/1.jpg",

            },
            {
                stackChildren: true,
                text: {
                    name: "Linda May",
                    title: "Chief Business Officer",
                },
                image: "./images/5.jpg",

            },
            {
                text: {
                    name: "John Green",
                    title: "Chief accounting officer",
                    contact: "Tel: 01 213 123 134",
                },
                image: "./images/6.jpg",

            },
            {
                text: {
                    name: "Erica Reel",
                    title: "Chief Customer Officer"
                },
                link: {
                    href: "http://www.google.com"
                },
                image: "./images/10.jpg"
            },
            {
                text: {
                    name: "Erica Reel",
                    title: "Chief Customer Officer"
                },
                link: {
                    href: "http://www.google.com"
                },
                image: "./images/10.jpg"
            },
            {
                text: {
                    name: "Erica Reel",
                    title: "Chief Customer Officer"
                },
                link: {
                    href: "http://www.google.com"
                },
                image: "./images/10.jpg"
            }
        ]
    }
};

