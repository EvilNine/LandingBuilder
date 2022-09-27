import { aboutBlocks } from './about';
import { cardsBlocks } from './cards';
import { contentBlocks } from './content';
import { introBlocks } from './intro';
import { layoutBlocks } from './layout';
import { mediaBlocks } from './media';
import { typographyBlocks } from './text';

export const Blocks = (editor) => {
    introBlocks(editor)
    aboutBlocks(editor)
    contentBlocks(editor)
    cardsBlocks(editor)
    mediaBlocks(editor)
    typographyBlocks(editor)
    layoutBlocks(editor)
    
    
    const categories = editor.BlockManager.getCategories()
    categories.each(category => {
        category.set('open', false).on('change:open', opened => {
            opened.get('open') && categories.each(category => {
                category !== opened && category.set('open', false)
            })
        })
    })
}