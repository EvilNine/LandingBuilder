export const canvasCss = `
/* Layout */
.gjs-dashed .container, .gjs-dashed .container-fluid,
.gjs-dashed .row,
.gjs-dashed .col, .gjs-dashed [class^="col-"] {
    min-height: 1.5rem !important;
}
.gjs-dashed .w-100 {
    min-height: .25rem !important;
    background-color: rgba(0,0,0,0.1);
}
.gjs-dashed img {
    min-width: 25px;
    min-height: 25px;
}
/* Components */
.gjs-dashed .btn-group,
.gjs-dashed .btn-toolbar {
    padding-right: 1.5rem !important;
    min-height: 1.5rem !important;
}
.gjs-dashed .card,
.gjs-dashed .card-group, .gjs-dashed .card-deck, .gjs-dashed .card-columns {
    min-height: 1.5rem !important;
}
.gjs-dashed .collapse {
    display: block !important;
    min-height: 1.5rem !important;
}
.gjs-dashed .dropdown {
    display: block !important;
    min-height: 1.5rem !important;
}
.gjs-dashed .dropdown-menu {
    min-height: 1.5rem !important;
    display: block !important;
}
`