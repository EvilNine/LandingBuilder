export const canvas = (props) => {
    const {category, url} = {...props};
    const canvasScriptsArr = category === 'landing' ? 
        [
            'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js',
            `${url}/v1/js/main.js`
        ]:[
            'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js',
        ];
    const options = {
        styles: [
            'https://fonts.googleapis.com/css?family=Roboto',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css',
        ],
        scripts: canvasScriptsArr
    }
    return options;
}