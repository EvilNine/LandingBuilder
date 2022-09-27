import {source as source1} from './data/content1';
import label1 from './data/content1.svg';
// import {source as source2} from './data/intro2.js'
// import label2 from './data/intro2.svg';
// import {source as source3} from './data/intro3.js'
// import label3 from './data/intro3.svg';

const sources = [
    {
        id: 'content-block-1',
        class: '',
        label: `<img src=${label1} />`,
        content: source1,
    },
    
]

export const contentBlocks = (editor) => {
    const blockManager = editor.BlockManager

    sources.forEach((s) => {
        blockManager.add(s.id, {
            label: s.label,
            attributes: { class: s.class },
            content: s.content,
            category: { 
                label: 'Content',
                open: false 
            },
            
            render: ({ el, model, className }) => {
                el.classList.add('gjs-block__image');
            },
        })
    })
}