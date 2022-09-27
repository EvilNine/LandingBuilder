import {source as source1} from './data/card1';
import label1 from './data/card1.svg';

import {source as source2} from './data/card2';
import label2 from './data/card2.svg';

const sources = [
    {
        id: 'card-block-1',
        class: '',
        label: `<img src=${label1} />`,
        content: source1,
        category: 'Cards',
    },
    {
        id: 'card-block-2',
        class: '',
        label: `<img src=${label2} />`,
        content: source2,
        category: 'Cards',
    },
]

export const cardsBlocks = (editor) => {
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