import {source as source1} from './data/about1';
import label1 from './data/about1.svg';

import {source as source2} from './data/about2';
import label2 from './data/about2.svg';

const sources = [
    {
        id: 'about-block-1',
        class: '',
        label: `<img src=${label1} />`,
        content: source1,
        category: 'About',
    },
    {
        id: 'about-block-2',
        class: '',
        label: `<img src=${label2} />`,
        content: source2,
        category: 'About',
    },
]

export const aboutBlocks = (editor) => {
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