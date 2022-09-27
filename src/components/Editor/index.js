import React, { useEffect} from 'react';
import grapesjs from 'grapesjs';
import axios from 'axios';

import '../../styles/la.scss';
import '../../styles/editor.scss';

import { Blocks } from './blocks/';
import { Traits } from './traits.js';

import { deviceManager } from './settings/deviceManager';
import { storageManager } from './settings/storageManager';
import { styleManager } from './settings/styleManager';
import { plugins, pluginOptions } from './settings/plugins';
import { canvas } from './settings/canvas';
import { canvasCss } from './settings/canvasCss';
import { localizationSetting } from './settings/localization';
import { panels } from './settings/panels';
import { deviceButtons } from './settings/deviceButtons';

const Editor = (props) => {
    
    const {path, assets, title} = {...props.data}
    const category = props.category;
    const widgetConfig = props.data.fields;
    const url = 'https://cdn.floribundas.space/';
    
    useEffect(() => {
        const imgArr = assets.map((item) => {
            return `${path}/img/${item}`
        })

        // Init editor with configurations
        const editorInit = grapesjs.init({
            container: `#${props.id}`,
            fromElement: false,
            showOffsets: 1,
            height: "100vh",
            i18n: localizationSetting,
            deviceManager: deviceManager,
            storageManager: storageManager,
            assetManager: { assets: imgArr },
            styleManager: styleManager,
            plugins: plugins,
            pluginsOpts: pluginOptions({path, category, widgetConfig, url, title}),
            canvas: canvas({category, url})
        });

        // Set template data to canvas plate
        editorInit.on("load", async function () {
            const html = await axios.get(`${path}/index.html`);
            const css = await axios.get(`${path}/css/style.css`);
            editorInit.setComponents(html.data.replace(/src="img/g, `src="${path}/img`));
            editorInit.setStyle(css.data.replace(new RegExp( `../img`, 'g' ), `${path}/img`))
        });

        // Set editor css styles to canvas plate
        editorInit.Config.canvasCss += canvasCss;

        // Set editor panels
        editorInit.Panels.getPanels().reset( panels() );

        // Set Devices icons
        editorInit.getConfig().showDevices = 0;
        editorInit.Panels.addPanel({
            id: 'devices', 
            buttons: deviceButtons(props.back)
        });

       
        Traits(editorInit); // TODO: rebuild traits
        Blocks(editorInit);
        
    }, [])

    return ( <div id = {props.id}/> )
}

export default Editor;