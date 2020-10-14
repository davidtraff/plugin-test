console.log('Plugin loading...');

const plugin = (props) => {
    return React.createElement('h1', {
        children: `Root-appen säger ${props.text}`,
    });
};

(window.plugins || (window.plugins = [])).push({ name: 'skit', plugin });

window.dispatchEvent(new Event('plugin-loaded'));
