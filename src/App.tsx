import React from 'react';

function App() {
    const [plugins, setPlugins] = React.useState<any[]>([]);

    const pluginAdded = () => {
        console.log('Lägger till plugins');
        setPlugins([...(window as any).plugins]); // Kopiera för att inte mutera staten.
    };

    React.useEffect(() => {
        // Lyssna efter eventet från plugin.js.
        window.addEventListener('plugin-loaded', pluginAdded);

        return () => window.removeEventListener('plugin-loaded', pluginAdded);
    }, []);

    // Sen skapar vi bara upp varje element här med createElement. Nu kommer den ligga under samma root å allt så man kan smacka på med context, props, etc hur man vill.
    return (
        <div className="App">
            <p>Main-appen</p>

            {plugins.map(({ plugin }) => React.createElement(plugin, { text: 'Hello world!', key: plugin.name }))}
        </div>
    );
}

export default App;
