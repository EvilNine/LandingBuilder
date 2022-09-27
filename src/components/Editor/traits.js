export const Traits = (e) => {
    const domc = e.DomComponents;
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;
    
    e.TraitManager.addType('class_select', {
        events: {
            'change': 'onChange'  // trigger parent onChange method on input change
        },
        createInput({trait}) {
            const md = this.model;
            const opts = md.get('options') || [];
            const input = document.createElement('select');
            const target_view_el = this.target.view.el;

            for (let i = 0; i < opts.length; i++) {
                const option = document.createElement('option');
                let value = opts[i].value;
                if (value === '') {
                    value = 'GJS_NO_CLASS';
                } // 'GJS_NO_CLASS' represents no class--empty string does not trigger value change
                option.text = opts[i].name;
                option.value = value;

                // Convert the Token List to an Array
                const css = Array.from(target_view_el.classList);

                const value_a = value.split(' ');
                const intersection = css.filter(x => value_a.includes(x));

                if(intersection.length === value_a.length) {
                    option.setAttribute('selected', 'selected');
                }

                input.append(option);
            }
            return input;
        },
        onUpdate({elInput, component}) {
            const classes = component.getClasses();
            const opts = this.model.get('options') || [];
            for (let i = 0; i < opts.length; i++) {
                let value = opts[i].value;
                if (value && classes.includes(value)) {
                    elInput.value = value;
                    return;
                }
            }
            elInput.value = "GJS_NO_CLASS";
        },

        onEvent({elInput, component, event}) {
            const classes = this.model.get('options').map(opt => opt.value);
            for (let i = 0; i < classes.length; i++) {
                if (classes[i].length > 0) {
                    const classes_i_a = classes[i].split(' ');
                    for (let j = 0; j < classes_i_a.length; j++) {
                        if (classes_i_a[j].length > 0) {
                            component.removeClass(classes_i_a[j]);
                        }
                    }
                }
            }
            const value = this.model.get('value');

            // This piece of code removes the empty attribute name from attributes list
            const elAttributes = component.attributes.attributes;
            delete elAttributes[""];

            if (value.length > 0 && value !== 'GJS_NO_CLASS') {
                const value_a = value.split(' ');
                for (let i = 0; i < value_a.length; i++) {
                    component.addClass(value_a[i]);
                }
            }
            component.em.trigger('component:toggled');
        },
    });

    // Container
    domc.addType('container', {
        model: {
            defaults: {
                'custom-name': 'Container',
                tagName: 'div',
                draggable: true,
                droppable: true,
                traits: [
                    {
                        type: 'select',
                        label: 'Width',
                        name: 'class',
                        options: [
                            { value: 'container', name: 'Standart' },
                            { value: 'container-fluid', name: 'Full width' }
                        ]
                    }
                ]
            }
        },
        view: defaultView
    })
    // Container end   

    // // Row
    // domc.addType('row', {
    //     model: defaultModel.extend({
    //         defaults: Object.assign({}, defaultModel.prototype.defaults, {
    //             'custom-name': 'Row',
    //             tagName: 'div',
    //             draggable: '.container, .container-fluid',
    //             droppable: true,
    //             traits: [
    //                 {
    //                     type: 'select',
    //                     options: [
    //                         {value: '', name: 'Yes'},
    //                         {value: 'no-gutters', name: 'No'}
    //                     ],
    //                     label: 'Gutters?'
    //                 }
    //             ]
    //         })
    //     }, {
    //         isComponent(el) {
    //             if(el && el.classList && el.classList.contains('row')) {
    //                 return {type: 'row'};
    //             }
    //         }
    //     }),
    //     view: defaultView
    // })
    // // Row end

    // // Column
    // const spans = [1,2,3,4,5,6,7,8,9,10,11,12];
    // domc.addType('column', {
    //     model: defaultModel.extend({
    //         defaults: Object.assign({}, defaultModel.prototype.defaults, {
    //             'custom-name': 'Column',
    //             draggable: '.row',
    //             droppable: true,
    //             resizable: {
    //                 updateTarget: (el, rect, opt)=>{
    //                     console.log('hi')
    //                     const selected =  e.getSelected();
    //                     if(!selected){ return ; }
                        
    //                     //compute the current screen size (bootstrap semantic)
    //                     const docWidth = el.getRootNode().body.offsetWidth ;
    //                     let currentSize = "" ;
    //                     if(docWidth >= 1200){
    //                         currentSize = "xl" ;
    //                     } else if(docWidth >= 992){
    //                         currentSize = "lg" ;
    //                     } else if(docWidth >= 768){
    //                         currentSize = "md" ;
    //                     } else if(docWidth >= 576){
    //                         currentSize = "sm" ;
    //                     }

    //                     //compute the threshold when add on remove 1 col span to the element
    //                     const row = el.parentElement ;
    //                     const oneColWidth = row.offsetWidth / 12 ;
    //                     //the threshold is half one column width
    //                     const threshold = oneColWidth*0.5 ;

    //                     //check if we are growing or shrinking the column
    //                     const grow = rect.w > el.offsetWidth + threshold;
    //                     const shrink = rect.w < el.offsetWidth - threshold;
    //                     if(grow || shrink){
    //                         // let testRegexp = new RegExp("^col-"+currentSize+"-\\d{1,2}$");
    //                         // if(!currentSize){
    //                         //     testRegexp = new RegExp("^col-\\d{1,2}$");
    //                         // }
    //                         let found = false;
    //                         let sizesSpans = {} ;
    //                         let oldSpan = 0;
    //                         let oldClass = null;
    //                         for(let cl of el.classList){
    //                             if(cl.indexOf("col-") === 0){
    //                                 let [size,span] = cl.split("-") ;
    //                                 if(!span){
    //                                     span = size;
    //                                     size = "" ;
    //                                 }
    //                                 sizesSpans[size] = span ;
    //                                 if(size === currentSize){
    //                                     //found the col-XX-99 class
    //                                     oldClass = cl;
    //                                     oldSpan = span ;
    //                                     found = true;
    //                                 }
    //                             }
    //                         }

    //                         if(!found){
    //                             const sizeOrder = ["", "xs", "sm", "md", "lg", "xl"] ;
    //                             for(let s of sizeOrder){
    //                                 if(sizesSpans[s]){
    //                                     oldSpan = sizesSpans[s];
    //                                     found = true ;
    //                                 }
    //                                 if(s === currentSize){
    //                                     break;
    //                                 }
    //                             }
    //                         }

    //                         let newSpan = Number(oldSpan) ;
    //                         if(grow){
    //                             newSpan++ ;
    //                         }else{
    //                             newSpan-- ;
    //                         }
    //                         if(newSpan > 12){ newSpan = 12 ; }
    //                         if(newSpan < 1){ newSpan = 1 ; }

    //                         let newClass = "col-"+currentSize+"-"+newSpan ;
    //                         if(!currentSize){
    //                             newClass = "col-"+newSpan ;
    //                         }
    //                         //update the class
    //                         selected.addClass(newClass) ;
    //                         if(oldClass && oldClass !== newClass){
    //                             selected.removeClass(oldClass) ;
    //                         }
    //                         //notify the corresponding trait to update its value accordingly
    //                         selected.getTrait((currentSize||"xs")+"_width").view.postUpdate() ;
    //                     }
    //                 },
    //                 // tl: 0, 
    //                 // tc: 0, 
    //                 // tr: 0, 
    //                 // cl: 0, 
    //                 // cr: 1, 
    //                 // bl: 0, 
    //                 // bc: 0, 
    //                 // br: 0 
    //             },
    //             traits: [
                    
    //                 {
    //                     id: "xs_width",
    //                     type: 'class_select',
    //                     options: [
    //                         {value: 'col', name: 'Equal'},
    //                         {value: 'col-auto', name: 'Variable'},
    //                         ...spans.map(function(i) { return {value: 'col-'+i, name: i+'/12'} })
    //                     ],
    //                     label: 'Phones width',
    //                 },
    //                 {
    //                     id: "sm_width",
    //                     type: 'class_select',
    //                     options: [
    //                         {value: '', name: 'None'},
    //                         {value: 'col-sm', name: 'Equal'},
    //                         {value: 'col-sm-auto', name: 'Variable'},
    //                         ...spans.map(function(i) { return {value: 'col-sm-'+i, name: i+'/12'} })
    //                     ],
    //                     label: 'landscape phones Width',
    //                 },
    //                 {
    //                     id: "md_width",
    //                     type: 'class_select',
    //                     options: [
    //                         {value: '', name: 'None'},
    //                         {value: 'col-md', name: 'Equal'},
    //                         {value: 'col-md-auto', name: 'Variable'},
    //                         ...spans.map(function(i) { return {value: 'col-md-'+i, name: i+'/12'} })
    //                     ],
    //                     label: 'Tablet width',
    //                 },
    //                 {
    //                     id: "lg_width",
    //                     type: 'class_select',
    //                     options: [
    //                         {value: '', name: 'None'},
    //                         {value: 'col-lg', name: 'Equal'},
    //                         {value: 'col-lg-auto', name: 'Variable'},
    //                         ...spans.map(function(i) { return {value: 'col-lg-'+i, name: i+'/12'} })
    //                     ],
    //                     label: 'Desktops width',
    //                 },
    //                 {
    //                     id: "xl_width",
    //                     type: 'class_select',
    //                     options: [
    //                         {value: '', name: 'None'},
    //                         {value: 'col-xl', name: 'Equal'},
    //                         {value: 'col-xl-auto', name: 'Variable'},
    //                         ...spans.map(function(i) { return {value: 'col-xl-'+i, name: i+'/12'} })
    //                     ],
    //                     label: 'Large desktops width',
    //                 }
    //             ].concat(defaultModel.prototype.defaults.traits)
    //         }),
    //     }, {
    //         isComponent(el) {
    //             let match = false;
    //             if(el && el.classList) {
    //                 el.classList.forEach(function(klass) {
    //                     if(klass==="col" || klass.match(/^col-/)) {
    //                         match = true;
    //                     }
    //                 });
    //             }
    //             if(match) return {type: 'column'};
    //         }
    //     }),
    //     view: {
    //         init () {
    //             this.listenTo(this.model, 'active', this.onActive)
    //         },
    //         events: {
    //             click: 'onActive'
    //         },
    //         onActive () {
    //             e.on('component:selected', () => {
    //                 e.Panels.getButton('views', 'open-tm').set('active', true);
    //             });
    //         }
    //     }
    // });
    // // Column end

    // // Intro
    // domc.addType('intro', {
    //     extend: 'default',
    //     model: {
    //         defaults: function () {
    //             return {
    //                 name: 'Intro',
    //                 type: 'intro',
    //                 tagName: 'div',
    //                 void: false,
    //                 droppable: true,
    //                 classes: ['min-vh-100', 'd-md-flex', 'align-items-md-center'],
    //                 traits: [
    //                     {
    //                         type: 'select',
    //                         label: 'Section height',
    //                         name: 'class',
    //                         options: [
    //                             {value: 'py-5', name: 'Auto'},
    //                             {value: 'min-vh-100 d-md-flex align-items-md-center', name: 'Full height'},
    //                         ]
    //                     }
    //                 ],
    //             }
    //         }
    //     },
    //     view: {
    //         init () {
    //             this.listenTo(this.model, 'active', this.onActive)
    //             this.listenTo(this.model, 'change:src', this.updateImage)
    //         },
    //         events: {
    //             dblclick: 'onActive'
    //         },
    //         onActive () {
    //             e.runCommand('open-assets', {
    //                 target: this.model,
    //                 types: ['image'],
    //                 accept: 'image/*'
    //             })
    //         },
    //         updateImage (model, url) {
    //             if (url) {
    //                 const style = model.getStyle()
            
    //                 model.setStyle({
    //                     'background-image': style['background-color'] || `url("${url}")`,
    //                     'background-size': style['background-size'] || 'cover',
    //                     'background-position': style['background-position'] || 'center center',
    //                     'background-repeat': style['background-repeat'] || 'no-repeat',
    //                 })
    //             }
    //         }
    //     }
    // })
    // // Intro end

    // // Input
    // domc.addType('input', {
    //     isComponent: el => el.tagName === 'INPUT',
    //     model: {
    //         defaults: {
    //             traits: [
    //                 'placeholder',
    //             ]
    //         },
    //     },
    //     view: {
    //         init () {
    //             this.listenTo(this.model, 'active', this.onActive)
    //         },
    //         events: {
    //             click: 'onActive'
    //         },
    //         onActive () {
    //             e.on('component:selected', () => {
    //                 e.Panels.getButton('views', 'open-tm').set('active', true);
    //             });
    //         }
    //     }
    // })
    // // Input end

    // // Button
    // const textType = domc.getType('text');
    // const textModel = textType.model;

    // const linkType = domc.getType('link');
    // const linkView = linkType.view;
    // domc.addType('link', {
    //     model: textModel.extend({
    //         defaults: Object.assign({}, textModel.prototype.defaults, {
    //             'custom-name': 'Link',
    //             tagName: 'a',
    //             droppable: true,
    //             editable: true,
    //             traits: [
    //                 {
    //                     type: 'text',
    //                     label: 'Href',
    //                     name: 'href',
    //                     placeholder: 'https://www.grapesjs.com'
    //                 },
    //                 {
    //                     type: 'select',
    //                     options: [
    //                         {value: '', name: 'This window'},
    //                         {value: '_blank', name: 'New window'}
    //                     ],
    //                     label: 'Target',
    //                     name: 'target',
    //                 },
    //                 {
    //                     type: 'select',
    //                     label: 'Style',
    //                     name: 'class',
    //                     options: [
    //                         { value: 'btn', name: 'Standart' },
    //                         { value: 'btn btn-primary', name: 'Blue' },
    //                         { value: 'btn btn-danger', name: 'Red' },
    //                         { value: 'btn btn-warning', name: 'Orange' },
    //                         { value: 'btn btn-success', name: 'Green' }
    //                     ]
    //                 }
    //             ].concat(textModel.prototype.defaults.traits)
    //         }),
    //         init2() {
    //             //textModel.prototype.init.call(this);
    //             this.listenTo(this, 'change:data-toggle', this.setupToggle);
    //             this.listenTo(this, 'change:attributes', this.setupToggle); // for when href changes
    //         },
    //         setupToggle(a, b, options = {}) { // TODO this should be in the dropdown comp and not the link comp
    //             if (options.ignore === true && options.force !== true) {
    //                 return;
    //             }
    //             console.log('setup toggle');
    //             const attrs = this.getAttributes();
    //             const href = attrs.href;
    //             // old attributes are not removed from DOM even if deleted...
    //             delete attrs['data-toggle'];
    //             delete attrs['aria-expanded'];
    //             delete attrs['aria-controls'];
    //             delete attrs['aria-haspopup'];
    //             if (href && href.length > 0 && href.match(/^#/)) {
    //                 console.log('link has href');
    //                 // find the el where id == link href
    //                 const els = this.em.get('Editor').DomComponents.getWrapper().find(href);
    //                 if (els.length > 0) {
    //                     console.log('referenced el found');
    //                     const el = els[0]; // should only be one el with this ID
    //                     const el_attrs = el.getAttributes();
    //                     //delete el_attrs['aria-labelledby'];
    //                     const el_classes = el_attrs.class;
    //                     if (el_classes) {
    //                         console.log('el has classes');
    //                         const el_classes_list = el_classes.split(' ');
    //                         const includes = ['collapse', 'dropdown-menu'];
    //                         const intersection = el_classes_list.filter(x => includes.includes(x));

    //                         if (intersection.length) {
    //                             console.log('link data-toggle matches el class');
    //                             switch (intersection[0]) {
    //                                 case 'collapse':
    //                                     attrs['data-toggle'] = 'collapse';
    //                                     break;
    //                             }
    //                             attrs['aria-expanded'] = el_classes_list.includes('show');
    //                             if (intersection[0] === 'collapse') {
    //                                 attrs['aria-controls'] = href.substring(1);
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //             this.set('attributes', attrs, {ignore: true});
    //         },
    //         classesChanged(e) {
    //             console.log('classes changed');
    //             if (this.attributes.type === 'link') {
    //                 if (this.attributes.classes.filter(function (klass) {
    //                     return klass.id === 'btn'
    //                 }).length > 0) {
    //                     this.changeType('button');
    //                 }
    //             }
    //         }
    //     }, {
    //         isComponent(el) {
    //             if (el && el.tagName && el.tagName === 'A') {
    //                 return {type: 'link'};
    //             }
    //         }
    //     }),
    //     view: linkView
    // });
    // // Button end
    

    // // Icon
    // domc.addType('icon', {
    //     model: {

    //     },
    //     view: {
    //         init () {
    //             this.listenTo(this.model, 'active', this.onActive)
    //         },
    //         onActive (){
    //             // e.Modal.open()
    //             // e.Modal.setTitle('Icons')
    //             // e.Modal.setContent(`<div class="lnir lni-crown-alt-2"></div>`)

    //         }
    //     }
    // })
    // // Icon end

   
}