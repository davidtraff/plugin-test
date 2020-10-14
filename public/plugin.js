console.log('Plugin loading...');

const plugin = (props) => {
    /* Ska ju egentligen bli transpilad från JSX så det hade ju sett ut mer typ
    return (<h1>Root-appen säger {props.text}</h1>);
    */
    return React.createElement('h1', {
        children: `Root-appen säger ${props.text}`,
    });
};

// pusha på den på nått globalt state, eller ännu bättre om man skickar med pluginen i ett argument i eventet.
(window.plugins || (window.plugins = [])).push({ name: 'skit', plugin });

// bam
window.dispatchEvent(new Event('plugin-loaded'));
