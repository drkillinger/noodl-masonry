const Noodl = require('@noodl/noodl-sdk');
import {MasonryNode} from './components/masonry';



Noodl.defineModule({
    reactNodes: [
        MasonryNode
    ],
    nodes: [],
    setup() {
        //this is called once on startup
    },
})
