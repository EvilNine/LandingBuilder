import label1 from './data/layout1.svg';
import label2 from './data/layout2.svg';
import label3 from './data/layout3.svg';


const sources = [
    {
        id: 'container',
        label: `<img src=${label1} />`,
        content: {
            type: 'container',
            classes: ['container']
        }
    },
    {
        id: 'row',
        label: `<img src=${label2} />`,
        content: {
            type: 'row',
            classes: ['row']
        }
    },
    {
        id: 'col',
        label: `<img src=${label3} />`,
        content: {
            type: 'column',
            classes: ['col']
        }
    }
    
]

export const layoutBlocks = (editor) => {
    const blockManager = editor.BlockManager

    sources.forEach((s) => {
        blockManager.add(s.id, {
            label: s.label,
            // attributes: { class: s.class },
            content: s.content,
            category: { 
                // label: s.category, 
                label: 'Layout',
                // order: s.order, 
                open: false 
            },
            
            render: ({ el, model, className }) => {
                el.classList.add('gjs-block__image');
            },
        })
    })
}
