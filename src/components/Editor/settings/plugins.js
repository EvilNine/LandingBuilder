import thePlugin from 'grapesjs-plugin-export';
import { readImgs } from '../editorHelpers';

export const plugins = [
    thePlugin
]

export const pluginOptions = (props) => {    
    const {title,path,category,widgetConfig, url} = {...props}
    const options = {    
        [thePlugin]: {
            filenamePfx: title,
            addExportBtn: true,
            btnLabel: window.app_lang === 'ru' ? 'Скачать архив' : 'Download Zip',
            root: {
                css: {
                    'style.css': ed => ed.getCss().replace( new RegExp( `${path}/img`, 'g' ), '../img' )
                },
                img: async editor => {
                    const images = await readImgs(editor);
                    return images;
                },
                'index.html': ed =>
                    `<!doctype html>
                        <html>
                        <head>
                        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">
                        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css">
                        <link rel="stylesheet" href="css/style.css">
                        </head>
                        <body>
                            ${ ed.getHtml().replace( new RegExp( `="${path}/img`, 'g' ), '="img' ) }
                            ${category === 'landing' && `
                                <script>window.widgetConfig = ${JSON.stringify(widgetConfig)}</script>
                                <script src="${url}/v1/js/data/ru/widgetData.js"></script>
                                <script src="${url}/v1/js/bundle.js"></script>
                                <script src="${url}/v1/js/main.js"></script>
                            `}
                            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"></script>
                        </body>    
                    <html>`,
            }
        }
    }
    return options
}

