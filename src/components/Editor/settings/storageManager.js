export const storageManager = {
    id: 'gjs-', // Prefix identifier that will be used inside storing and loading
    type: 'local', // Type of the storage
    autosave: true, // Store data automatically
    autoload: false, // Autoload stored data on init
    stepsBeforeSave: 1, // If autosave enabled, indicates how many changes are necessary before store method is triggered
    storeComponents: true, // Enable/Disable storing of components in JSON format
    storeStyles: true, // Enable/Disable storing of rules/style in JSON format
    storeHtml: true, // Enable/Disable storing of components as HTML string
    storeCss: true, // Enable/Disable storing of rules/style as CSS string
    // urlLoad: data,
    // urlStore: localhost,
    // params: {
    //     'Access-Control-Allow-Origin': 'http://localhost:3000', // TODO: fix CORS
    // },
    contentTypeJson: true,
    headers: {
        'Content-Type': 'application/json'
    }
}