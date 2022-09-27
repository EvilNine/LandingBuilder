export const deviceButtons = (props) => {
    const back = props;
    
    const settings = [{
        id: 'back',
        command: () => { back('list') } ,
        className: 'lnir lni-left-arrow-box',
        active: 0,
    },
    { 
        id: "set-device-desktop", 
        command: function (e) { return e.setDevice("Desktop") }, 
        className: "lni lni-display-alt", active: 1
    },
    { 
        id: "set-device-tablet", 
        command: function (e) { return e.setDevice("Tablet") }, 
        className: "lni lni-tab" },
    {
        id: "set-device-mobile", 
        command: function (e) { return e.setDevice("Mobile portrait") }, 
        className: "lnir lni-mobile-alt-2"
    }];

    return settings;
}