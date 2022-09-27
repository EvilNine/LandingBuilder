export const styleManager = {
    sectors: [{
        name: 'General',
        buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom'],
        properties: [{
            name: 'Alignment',
            property: 'float',
            type: 'radio',
            defaults: 'none',
            list: [{
                value: 'none',
                title: 'None',
                className: 'fa fa-times',
            }, {
                value: 'left',
                className: 'fa fa-align-left',
                title: 'Float element to the left',
            }, {
                value: 'right',
                className: 'fa fa-align-right',
                title: 'Float element to the right',
            }],
        }, {
            property: 'display',
            type: 'radio',
            list: [{
                value: 'block',
                title: 'Block',
            }, {
                value: 'inline',
                title: 'Inline',
            }, {
                value: 'inline-block',
                title: 'Inline-block',
            }, {
                value: 'none',
                title: 'None',
                className: 'fa fa-eye-slash',
            }],
        }],
    }, {
        name: 'Dimension',
        open: false,
        buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
        properties: [{
                name: 'Margin',
                property: 'margin',
                type: 'composite',
                properties: [{
                    name: 'Top',
                    property: 'margin-top',
                    type: 'integer',
                    units: ['px', '%'],
                    defaults: 0,
                }, {
                    name: 'Right',
                    property: 'margin-right',
                    type: 'integer',
                    units: ['px', '%'],
                    defaults: 0,
                }, {
                    name: 'Bottom',
                    property: 'margin-bottom',
                    type: 'integer',
                    units: ['px', '%'],
                    defaults: 0,
                }, {
                    name: 'Left',
                    property: 'margin-Left',
                    type: 'integer',
                    units: ['px', '%'],
                    defaults: 0,
                }, ],
            },
            /*{
                              name    : 'Center block',
                              property  : 'margin',
                              type    : 'select',
                              defaults  : '0',
                              list    : [
                                         { value: '0', name: 'Normal',},
                                         { value: '0 auto', name: 'Center',}
                                        ],
                            },*/
            {
                name: 'Padding',
                property: 'padding',
                type: 'composite',
                properties: [{
                    name: 'Top',
                    property: 'padding-top',
                    type: 'integer',
                    units: ['px', '%'],
                    defaults: 0,
                    min: 0,
                }, {
                    name: 'Right',
                    property: 'padding-right',
                    type: 'integer',
                    units: ['px', '%'],
                    defaults: 0,
                    min: 0,
                }, {
                    name: 'Bottom',
                    property: 'padding-bottom',
                    type: 'integer',
                    units: ['px', '%'],
                    defaults: 0,
                    min: 0,
                }, {
                    name: 'Left',
                    property: 'padding-left',
                    type: 'integer',
                    units: ['px', '%'],
                    defaults: 0,
                    min: 0,
                }, ],
            },
        ],
    }, {
        name: 'Typography',
        open: false,
        buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow'],
        properties: [{
            name: 'Font',
            property: 'font-family',
        }, {
            name: 'Weight',
            property: 'font-weight',
        }, {
            name: 'Font color',
            property: 'color',
        }, {
            name: 'Text align',
            property: 'text-align',
            type: 'radio',
            defaults: 'left',
            list: [{
                    value: 'left',
                    name: 'Left',
                    className: 'fa fa-align-left'
                },
                {
                    value: 'center',
                    name: 'Center',
                    className: 'fa fa-align-center'
                },
                {
                    value: 'right',
                    name: 'Right',
                    className: 'fa fa-align-right'
                },
                {
                    value: 'justify',
                    name: 'Justify',
                    className: 'fa fa-align-justify'
                },
            ],
        }, {
            name: 'Text shadow',
            property: 'text-shadow',
            type: 'stack',
            preview: true,
            properties: [{
                name: 'X position',
                property: 'h-shadow',
                type: 'integer',
                units: ['px', '%'],
                defaults: 0,
            }, {
                name: 'Y position',
                property: 'v-shadow',
                type: 'integer',
                units: ['px', '%'],
                defaults: 0,
            }, {
                name: 'Blur',
                property: 'blur-radius',
                type: 'integer',
                units: ['px'],
                defaults: 0,
                min: 0,
            }, {
                name: 'Color',
                property: 'shadow-color',
                type: 'color',
                defaults: 'black',
            }, ],
        }],
    }, {
        name: 'Decorations',
        open: false,
        buildProps: ['background-color', 'border-radius', 'border', 'box-shadow', 'background'],
        properties: [{
            name: 'Background',
            property: 'background-color',
        }, {
            name: 'Border radius',
            property: 'border-radius',
            type: 'composite',
            properties: [{
                name: 'Top',
                property: 'border-top-left-radius',
                type: 'integer',
                units: ['px', '%'],
                defaults: 0,
                min: 0,
            }, {
                name: 'Right',
                property: 'border-top-right-radius',
                type: 'integer',
                units: ['px', '%'],
                min: 0,
                defaults: 0,
            }, {
                name: 'Bottom',
                property: 'border-bottom-left-radius',
                type: 'integer',
                units: ['px', '%'],
                min: 0,
                defaults: 0,
            }, {
                name: 'Left',
                property: 'border-bottom-right-radius',
                type: 'integer',
                units: ['px'],
                min: 0,
                defaults: 0,
            }, ],
        }, {
            name: 'Box shadow',
            property: 'box-shadow',
            type: 'stack',
            preview: true,
            properties: [{
                name: 'X position',
                property: 'shadow-x',
                type: 'integer',
                units: ['px', '%'],
                defaults: 0,
            }, {
                name: 'Y position',
                property: 'shadow-y',
                type: 'integer',
                units: ['px', '%'],
                defaults: 0,
            }, {
                name: 'Blur',
                property: 'shadow-blur',
                type: 'integer',
                units: ['px'],
                defaults: 5,
                min: 0,
            }, {
                name: 'Spread',
                property: 'shadow-spread',
                type: 'integer',
                units: ['px'],
                defaults: 0,
            }, {
                name: 'Color',
                property: 'shadow-color',
                type: 'color',
                defaults: 'black',
            }, {
                name: 'Shadow type',
                property: 'shadow-type',
                type: 'select',
                defaults: '',
                list: [{
                        value: '',
                        name: 'Outside',
                    },
                    {
                        value: 'inset',
                        name: 'Inside',
                    }
                ],
            }],
        }, {
            name: 'Background',
            property: 'background',
            type: 'stack',
            preview: true,
            detached: true,
            properties: [{
                    name: 'Image',
                    property: 'background-image',
                    type: 'file',
                    defaults: 'none',
                },
                {
                    name: 'Repeat',
                    property: 'background-repeat',
                    type: 'select',
                    defaults: 'repeat',
                    list: [{
                            value: 'repeat',
                            name: 'Repeat',
                        },
                        {
                            value: 'repeat-x',
                            name: 'Repeat X',
                        },
                        {
                            value: 'repeat-y',
                            name: 'Repeat Y',
                        },
                        {
                            value: 'no-repeat',
                            name: 'No repeat',
                        }
                    ],
                },
                {
                    name: 'Position',
                    property: 'background-position',
                    type: 'select',
                    defaults: 'left top',
                    list: [{
                            value: 'left top',
                        },
                        {
                            value: 'left center',
                        },
                        {
                            value: 'left bottom',
                        },
                        {
                            value: 'right top',
                        },
                        {
                            value: 'right center'
                        },
                        {
                            value: 'right bottom'
                        },
                        {
                            value: 'center top'
                        },
                        {
                            value: 'center center'
                        },
                        {
                            value: 'center bottom'
                        }
                    ]

                }, {
                    name: 'Attachment',
                    property: 'background-attachment',
                    type: 'select',
                    defaults: 'scroll',
                    list: [{
                            value: 'scroll'
                        },
                        {
                            value: 'fixed'
                        },
                        {
                            value: 'local'
                        }
                    ],
                }, {
                    name: 'Size',
                    property: 'background-size',
                    type: 'select',
                    defaults: 'auto',
                    list: [{
                            value: 'auto'
                        },
                        {
                            value: 'cover'
                        },
                        {
                            value: 'contain'
                        }
                    ],
                }
            ],
        }, ],
    }, {
        name: 'Extra',
        open: false,
        buildProps: ['transition', 'perspective', 'transform'],
        properties: [{
            name: 'Transition',
            property: 'transition',
            type: 'stack',
            preview: false,
            properties: [{
                name: 'Property',
                property: 'transition-property',
                type: 'select',
                defaults: '',
                list: [{
                        value: 'all',
                        name: 'All',
                    },
                    {
                        value: 'width',
                        name: 'Width',
                    },
                    {
                        value: 'height',
                        name: 'Height',
                    },
                    {
                        value: 'background-color',
                        name: 'Background',
                    },
                    {
                        value: 'transform',
                        name: 'Transform',
                    },
                    {
                        value: 'box-shadow',
                        name: 'Box shadow',
                    },
                    {
                        value: 'opacity',
                        name: 'Opacity',
                    }
                ],
            }, {
                name: 'Duration',
                property: 'transition-duration',
                type: 'integer',
                units: ['s'],
                defaults: '2',
                min: 0,
            }, {
                name: 'Easing',
                property: 'transition-timing-function',
                type: 'select',
                defaults: 'ease',
                list: [{
                        value: 'linear',
                        name: 'Linear',
                    },
                    {
                        value: 'ease',
                        name: 'Ease',
                    },
                    {
                        value: 'ease-in',
                        name: 'Ease-in',
                    },
                    {
                        value: 'ease-out',
                        name: 'Ease-out',
                    },
                    {
                        value: 'ease-in-out',
                        name: 'Ease-in-out',
                    }
                ],
            }],
        }, {
            name: 'Transform',
            property: 'transform',
            type: 'composite',
            properties: [{
                name: 'Rotate X',
                property: 'transform-rotate-x',
                type: 'integer',
                units: ['deg'],
                defaults: '0',
                functionName: 'rotateX',
            }, {
                name: 'Rotate Y',
                property: 'transform-rotate-y',
                type: 'integer',
                units: ['deg'],
                defaults: '0',
                functionName: 'rotateY',
            }, {
                name: 'Rotate Z',
                property: 'transform-rotate-z',
                type: 'integer',
                units: ['deg'],
                defaults: '0',
                functionName: 'rotateZ',
            }, {
                name: 'Scale X',
                property: 'transform-scale-x',
                type: 'integer',
                defaults: '1',
                functionName: 'scaleX',
            }, {
                name: 'Scale Y',
                property: 'transform-scale-y',
                type: 'integer',
                defaults: '1',
                functionName: 'scaleY',
            }, {
                name: 'Scale Z',
                property: 'transform-scale-z',
                type: 'integer',
                defaults: '1',
                functionName: 'scaleZ',
            }],
        }]
    }, {
        name: 'Flex',
        open: false,
        properties: [{
            name: 'Flex Container',
            property: 'display',
            type: 'select',
            defaults: 'block',
            list: [{
                value: 'block',
                name: 'Disable',
            }, {
                value: 'flex',
                name: 'Enable',
            }],
        }, {
            name: 'Flex Parent',
            property: 'label-parent-flex',
            type: 'integer',
        }, {
            name: 'Direction',
            property: 'flex-direction',
            type: 'radio',
            defaults: 'row',
            list: [{
                value: 'row',
                name: 'Row',
                className: 'icons-flex icon-dir-row',
                title: 'Row',
            }, {
                value: 'row-reverse',
                name: 'Row reverse',
                className: 'icons-flex icon-dir-row-rev',
                title: 'Row reverse',
            }, {
                value: 'column',
                name: 'Column',
                title: 'Column',
                className: 'icons-flex icon-dir-col',
            }, {
                value: 'column-reverse',
                name: 'Column reverse',
                title: 'Column reverse',
                className: 'icons-flex icon-dir-col-rev',
            }],
        }, {
            name: 'Justify',
            property: 'justify-content',
            type: 'radio',
            defaults: 'flex-start',
            list: [{
                value: 'flex-start',
                className: 'icons-flex icon-just-start',
                title: 'Start',
            }, {
                value: 'flex-end',
                title: 'End',
                className: 'icons-flex icon-just-end',
            }, {
                value: 'space-between',
                title: 'Space between',
                className: 'icons-flex icon-just-sp-bet',
            }, {
                value: 'space-around',
                title: 'Space around',
                className: 'icons-flex icon-just-sp-ar',
            }, {
                value: 'center',
                title: 'Center',
                className: 'icons-flex icon-just-sp-cent',
            }],
        }, {
            name: 'Align',
            property: 'align-items',
            type: 'radio',
            defaults: 'center',
            list: [{
                value: 'flex-start',
                title: 'Start',
                className: 'icons-flex icon-al-start',
            }, {
                value: 'flex-end',
                title: 'End',
                className: 'icons-flex icon-al-end',
            }, {
                value: 'stretch',
                title: 'Stretch',
                className: 'icons-flex icon-al-str',
            }, {
                value: 'center',
                title: 'Center',
                className: 'icons-flex icon-al-center',
            }],
        }, {
            name: 'Flex Children',
            property: 'label-parent-flex',
            type: 'integer',
        }, {
            name: 'Order',
            property: 'order',
            type: 'integer',
            defaults: 0,
            min: 0
        }, {
            name: 'Flex',
            property: 'flex',
            type: 'composite',
            properties: [{
                name: 'Grow',
                property: 'flex-grow',
                type: 'integer',
                defaults: 0,
                min: 0
            }, {
                name: 'Shrink',
                property: 'flex-shrink',
                type: 'integer',
                defaults: 0,
                min: 0
            }, {
                name: 'Basis',
                property: 'flex-basis',
                type: 'integer',
                units: ['px', '%', ''],
                unit: '',
                defaults: 'auto',
            }],
        }, {
            name: 'Align',
            property: 'align-self',
            type: 'radio',
            defaults: 'auto',
            list: [{
                value: 'auto',
                name: 'Auto',
            }, {
                value: 'flex-start',
                title: 'Start',
                className: 'icons-flex icon-al-start',
            }, {
                value: 'flex-end',
                title: 'End',
                className: 'icons-flex icon-al-end',
            }, {
                value: 'stretch',
                title: 'Stretch',
                className: 'icons-flex icon-al-str',
            }, {
                value: 'center',
                title: 'Center',
                className: 'icons-flex icon-al-center',
            }],
        }]
    }],

}