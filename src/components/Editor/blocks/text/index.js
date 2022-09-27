import label1 from './data/typography1.svg';
import label2 from './data/typography2.svg';
import label3 from './data/typography3.svg';
import label4 from './data/typography4.svg';
import label5 from './data/typography5.svg';
import label6 from './data/typography6.svg';
import label7 from './data/typography7.svg';
import label8 from './data/typography8.svg';
import label9 from './data/typography9.svg';
import label10 from './data/typography10.svg';

const sources = [
    {
        id: 'h1p',
        label: `<img src=${label1} />`,
        content: `<div>
            <h3>Insert title here</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>`
    },
    {
        id: 'H1',
        label: `<img src=${label2} />`,
        content: '<H1>Heading H1</H1>'
    },
    {
        id: 'H2',
        label: `<img src=${label3} />`,
        content: '<H2>Heading H2</H2>'
    },
    {
        id: 'H3',
        label: `<img src=${label4} />`,
        content: '<H3>Heading H3</H3>'
    },
    {
        id: 'H4',
        label: `<img src=${label5} />`,
        content: '<H4>Heading H4</H4>'
    },
    {
        id: 'H5',
        label: `<img src=${label6} />`,
        content: '<H5>Heading H5</H5>'
    },
    {
        id: 'paragraph',
        label: `<img src=${label7} />`,
        content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>`
    },
    {
        id: 'ulList',
        label: `<img src=${label8} />`,
        content: `
        <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
        </ul>
        `
    },
    {
        id: 'olList',
        label: `<img src=${label9} />`,
        content: `
        <ol>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
        </ol>
        `
    },
    {
        id: 'link',
        label: `<img src=${label10} />`,
        content: {
            type: 'link',
            content: 'Link text'
        }
        
    }
]

export const typographyBlocks = (editor) => {
    const blockManager = editor.BlockManager

    sources.forEach((s) => {
        blockManager.add(s.id, {
            label: s.label,
            // attributes: { class: s.class },
            content: s.content,
            category: { 
                // label: s.category, 
                label: 'Typography',
                // order: s.order, 
                open: false 
            },
            
            render: ({ el, model, className }) => {
                el.classList.add('gjs-block__image');
            },
        })
    })
}
