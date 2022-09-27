export const panels = () => {
    const swv = 'sw-visibility';
    const expt = 'export-template';
    const osm = 'open-sm';
    const otm = 'open-tm';
    const ola = 'open-layers';
    const obl = 'open-blocks';
    const ful = 'fullscreen';
    const prv = 'preview';

    const options = [
        {
            id: 'commands',
            buttons: [{}],
        },
        {
            id: 'options',
            buttons: [{
                id: swv,
                command: swv,
                context: swv,
                className: 'lni lni-select',
                active: 1,
            }, {
                id: prv,
                context: prv,
                command: e => e.runCommand(prv),
                className: 'lni lni-eye',
            }, {
                id: ful,
                command: ful,
                context: ful,
                className: 'lni lni-full-screen',
            }, {
                id: expt,
                className: 'lni lni-code',
                command: e => e.runCommand(expt),
            }, {
                id: 'undo',
                className: 'lnir lni-undo',
                attributes: {
                    title: window.app_lang === 'ru' ? 'Отменить' : 'Undo'
                },
                command: e => e.runCommand('core:undo'),
            }, {
                id: 'redo',
                className: 'lnir lni-redo',
                attributes: {
                    title: window.app_lang === 'ru' ? 'Повторить' : 'Redo'
                },
                command: e => e.runCommand('core:redo'),
            }, {
                id: 'save-project',
                className: 'lni lni-download',
                command: function (editor, sender) {
                    sender.set('active', 0);
                    editor.runCommand('gjs-export-zip');
                },
                attributes: {
                    title: window.app_lang === 'ru' ? 'Скачать' : 'Download'
                }
            }, {
                id: 'clean-all',
                className: 'lnir lni-trash-can',
                attributes: {
                    title: window.app_lang === 'ru' ? 'Очистить' : 'Clean all'
                },
                command: function (editor, sender) {
                    if (sender) sender.set('active', false);
                    // if (confirm('Are you sure to clean the canvas?')) {
                    editor.DomComponents.clear();
                    setTimeout(function () {
                        localStorage.setItem('gjs-assets', '');
                        localStorage.setItem('gjs-components', '');
                        localStorage.setItem('gjs-html', '');
                        localStorage.setItem('gjs-css', '');
                        localStorage.setItem('gjs-styles', '');
                    }, 0);
                    //}
                }
            }]
        },
        {
            id: 'views',
            buttons: [{
                id: osm,
                command: osm,
                active: true,
                attributes: {
                    'data-gjs-type': 'tooltip',
                    'data-tooltip-pos': 'bottom',
                },
                className: 'lni lni-control-panel',
            }, {
                id: otm,
                command: otm,
                className: 'lni lni-cog',
            }, {
                id: ola,
                command: ola,
                className: 'lni lni-layers',
            }, {
                id: obl,
                command: obl,
                className: 'lni lni-grid-alt',
            }],
        }
    ]
    return options
}