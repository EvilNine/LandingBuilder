import {introBlocks} from './blocks/intro/index'

export const Blocks = (editor) => {
    introBlocks(editor);
    
    const categories = editor.BlockManager.getCategories()
    categories.each(category => {
        category.set('open', false).on('change:open', opened => {
            opened.get('open') && categories.each(category => {
                category !== opened && category.set('open', false)
            })
        })
    })
}

// export const Blocks = [
//     {
//         id: 'fsi',
//         label: 'Full screen intro',
//         category: {
//             id: 'intro', 
//             label: 'Intro', 
//             open: false
//         },
//         content: {
//             type: 'intro',
//             removable: true,
//             draggable: true,
//             droppable: true,
//             activeOnRender: false,
//             style: {
//                 'background-image': `url(https://htmlstream.com/preview/space-v1.6.1/assets/img/1920x1080/img4.jpg)`,
//                 'background-size': 'cover',
//                 'background-position': 'center center',
//                 'background-repeat': 'no-repeat'
//             },
//             components: `
//                 <div class="container py-5 py-md-0 w-100">
//                     <div class="row justify-content-lg-between align-items-lg-center">
//                         <div class="col-lg-5 mb-7 mb-lg-0">
//                             <span class="d-block text-white text-uppercase mb-2">Join the change</span>
//                             <h1 class="display-4 text-white mb-md-0">Space service that moves work forward</h1>
//                         </div>
//                         <div class="col-lg-5">
//                             <div class="bg-white shadow-sm rounded p-4">
//                                 <div class="mb-4">
//                                     <h2 class="h4">Get started for free</h2>
//                                 </div>
//                                 <form>
//                                     <div class="mb-3">
//                                         <div class="input-group">
//                                         <input type="text" class="form-control" name="username" required="" placeholder="Enter your username" data-gjs-type="input" data-gjs-removable="false" data-gjs-editable="true">
//                                         </div>
//                                     </div>
//                                     <div class="mb-3">
//                                         <div class="input-group form">
//                                             <input type="email" class="form-control" name="email" required="" placeholder="Enter your email address" data-gjs-type="input" data-gjs-removable="false" data-gjs-editable="true">
//                                         </div>
//                                     </div>
//                                     <button type="submit" class="btn btn-block btn-primary" data-gjs-removable="false" data-gjs-editable="true">Send</button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             `
//         },
        
//         attributes: {
//             class: 'lnir lni-layout-alt'
//         }
//     },
//     {
//         id: 'about1',
//         label: 'About',
//         category: {
//             id: 'text', 
//             label: 'Text section', 
//             open: false
//         },
//         content: `
//             <div class="bg-light py-5">
//                 <div class="container my-5">
//                     <div class="row justify-content-center text-center">
//                         <div class="col-12 col-md-8">
//                             <h2 class="display-4 mb-4">About us</h2>
//                             <p class="lead">About design thinking. Business leaders have not yet fully embraced it as a means of managing the constant pace of change in today's climate. This process is an essential tool that will give entrepreneurs the edge they need to succeed.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         `,
//         attributes: {
//             class: 'lnir lni-menu-alt-2'
//         }
//     },
//     {
//         id: 'card__vertical',
//         label: 'Card vertical',
//         category: {
//             id: 'card', 
//             label: 'Cards', 
//             open: false
//         },
//         content: `<div class="card">
//                     <img src="http://via.placeholder.com/250x250/BF00FF/ffffff/" class="card-img-top" alt="">
//                     <div class="card-body">
//                         <h5 class="card-title">Card title</h5>
//                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     </div>
//                 </div>`,
//         attributes: {
//             class: 'lnir lni-layout-alt-1'
//         },
//     },
//     {
//         id: 'card__horizontal',
//         label: 'Card horizontal',
//         category: {
//             id: 'card', 
//             label: 'Cards', 
//             open: false
//         },
//         content: `<div class="card mb-3">
//                     <div class="row g-0">
//                         <div class="col-12 col-md-auto">
//                             <img class="img-fluid w-100" src="http://via.placeholder.com/250x250/BF00FF/ffffff/" alt="">
//                         </div>
//                         <div class="col-md-8">
//                             <div class="card-body">
//                                 <h5 class="card-title">Card title</h5>
//                                 <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                                 <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>`,
//         attributes: {
//             class: 'lnir lni-layout-alt-2'
//         },
//     },           
//     {
//         id: 'video',
//         label: 'Video',
//         category: {
//             id: 'media', 
//             label: 'Media', 
//             open: false
//         },
//         attributes: {
//             class: 'lni lni-youtube'
//         },
//         content: {
//             type: 'video',
//             src: 'img/video2.webm',
//             style: {
//                 height: '350px',
//                 width: '615px',
//             }
//         },
//     },
//     {
//         label: 'Image',
//         category: {
//             id: 'media', 
//             label: 'Media', 
//             open: false
//         },
//         attributes: { 
//             class: 'lni lni-image'
//         },
//         content: {
//             type: "image",
//             activeOnRender: 1,
//         }
//     },
//     {
//         label: 'Icon',
//         category: {
//             id: 'icons', 
//             label: 'Icons', 
//             open: false
//         },
//         attributes: { 
//             class: 'lnir lni-crown-alt-2'
//         },
//         content: {
//             type: "icon",
//             activeOnRender: 1,
//         },
//         components: `
//                 <div class="lnir lni-crown-alt-2">
                    
//                 </div>
//             `
//     },
//     {
//         id: 'h1p',
//         label: 'Text section',
//         category: {
//             id: 'typography', 
//             label: 'Typography', 
//             open: false
//         },
//         content: '<div>'
//         + '<h3>Insert title here</h3>'
//         + '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>'
//         + '</div>',
//         attributes: {
//             class: 'lni lni-text-align-justify'
//         }
//     },
//     {
//         id: 'H1',
//         label: 'Heading H1',
//         category: {
//             id: 'typography', 
//             label: 'Typography', 
//             open: false
//         },
//         content: '<H1>Heading H1</H1>',
//         attributes: {
//             class: 'lnir lni-text'
//         }
//     },
//     {
//         id: 'H2',
//         label: 'Heading H2',
//         category: {
//             id: 'typography', 
//             label: 'Typography', 
//             open: false
//         },
//         content: '<H2>Heading H2</H2>',
//         attributes: {
//             class: 'lnir lni-text'
//         }
//     },
//     {
//         id: 'H3',
//         label: 'Heading H3',
//         category: {
//             id: 'typography', 
//             label: 'Typography', 
//             open: false
//         },
//         content: '<H3>Heading H3</H3>',
//         attributes: {
//             class: 'lnir lni-text'
//         }
//     },
//     {
//         id: 'H4',
//         label: 'Heading H4',
//         category: {
//             id: 'typography', 
//             label: 'Typography', 
//             open: false
//         },
//         content: '<H4>Heading H4</H4>',
//         attributes: {
//             class: 'lnir lni-text'
//         }
//     },
//     {
//         id: 'H5',
//         label: 'Heading H5',
//         category: {
//             id: 'typography', 
//             label: 'Typography', 
//             open: false
//         },
//         content: '<H5>Heading H5</H5>',
//         attributes: {
//             class: 'lnir lni-text'
//         }
//     },
//     {
//         name: 'Form',
//         category: {
//             id: 'form', 
//             label: 'Form', 
//             open: false
//         },
//         label: 'From',
//         content: {
//             removable: true,
//             draggable: true,
//             droppable: true,
//             components: `<form>
//                             <div class="mb-3" data-gjs-removable="false">
//                                 <div class="js-focus-state input-group input-group form" data-gjs-removable="false">
//                                     <input type="text" class="form-control" name="username" required="" placeholder="Enter your username" data-gjs-removable="false" data-gjs-editable="true" data-gjs-type="input">
//                                 </div>
//                             </div>
//                             <div class="mb-3" data-gjs-removable="false">
//                                 <div class="input-group input-group form" data-gjs-removable="false">
//                                     <input type="email" class="form-control" name="email" required="" placeholder="Enter your email address" data-gjs-removable="false" data-gjs-editable="true" data-gjs-type="input">
//                                 </div>
//                             </div>
//                             <button type="submit" class="btn btn-block btn-primary" data-gjs-removable="false">Send</button>
//                         </form>`
//         },
//         attributes: {
//             class: 'lnir lni-list-alt-1'
//         }
//     },
//     {
//         id: 'container',
//         label: 'Container',
//         category: {
//             id: 'layout', 
//             label: 'Layout', 
//             open: false
//         },
//         content: {
//             type: 'container',
//             classes: ['container']
//         },
//         attributes: {
//             class: 'lnir lni-margin'
//         }
//     },
//     {
//         id: 'row',
//         label: 'Row',
//         category: {
//             id: 'layout', 
//             label: 'Layout', 
//             open: false
//         },
//         content: {
//             type: 'row',
//             classes: ['row']
//         },
//         attributes: {
//             class: 'lni lni-pagination'
//         }
//     },
//     {
//         id: 'column',
//         label: 'Column',
//         category: {
//             id: 'layout', 
//             label: 'Layout', 
//             open: false
//         },
//         content: {
//             type: 'column',
//             classes: ['col']
//         },
//         attributes: {
//             class: 'lni lni-stop'
//         }
//     },
// ]