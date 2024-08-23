
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
                children: [
                    {
                        text: {
                            name: "Ron Blomquist",
                            title: "Chief Information Security Officer"
                        },
                        image: "./images/8.jpg"
                    },
                    {
                        text: {
                            name: "Michael Rubin",
                            title: "Chief Innovation Officer",
                            contact: "we@aregreat.com"
                        },
                        image: "./images/9.jpg"
                    }
                ]
            },
            {
                stackChildren: true,
                text: {
                    name: "Linda May",
                    title: "Chief Business Officer",
                },
                image: "./images/5.jpg",
                children: [
                    {
                        text: {
                            name: "Alice Lopez",
                            title: "Chief Communications Officer"
                        },
                        image: "./images/7.jpg"
                    },
                    {
                        text: {
                            name: "Mary Johnson",
                            title: "Chief Brand Officer"
                        },
                        image: "./images/4.jpg"
                    },
                    {
                        text: {
                            name: "Kirk Douglas",
                            title: "Chief Business Development Officer"
                        },
                        image: "./images/11.jpg"
                    }
                ]
            },
            {
                text: {
                    name: "John Green",
                    title: "Chief accounting officer",
                    contact: "Tel: 01 213 123 134",
                },
                image: "./images/6.jpg",
                children: [
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
        ]
    }
};

