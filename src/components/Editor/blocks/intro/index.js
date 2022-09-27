import {source as source1} from './data/intro1.js';
import label1 from './data/intro1.svg';
import {source as source2} from './data/intro2.js'
import label2 from './data/intro2.svg';
import {source as source3} from './data/intro3.js'
import label3 from './data/intro3.svg';

const sources = [
    {
        id: 'intro-block-1',
        class: '',
        label: `<img src=${label1} />`,
        content: source1,
        category: 'Intro',
    },
    {
        id: 'intro-block-2',
        class: '',
        label: `<img src=${label2} />`,
        content: source2,
        category: 'Intro',
    },
    {
        id: 'intro-block-3',
        class: '',
        label: `<img src=${label3} />`,
        content: source3,
        category: 'Intro',
    }
    
]

export const introBlocks = (editor) => {
    const blockManager = editor.BlockManager

    sources.forEach((s) => {
        blockManager.add(s.id, {
            label: s.label,
            attributes: { class: s.class },
            content: s.content,
            category: { 
                label: s.category, 
                order: s.order, 
                open: false 
            },
            
            render: ({ el, model, className }) => {
                el.classList.add('gjs-block__image');
            },
        })
    })
}