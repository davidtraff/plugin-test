import React from 'react';

function App() {
    const [plugins, setPlugins] = React.useState<any[]>([]);

    const pluginAdded = () => {
        console.log('Lägger till plugins');
        setPlugins((window as any).plugins);
    };

    React.useEffect(() => {
        window.addEventListener('plugin-loaded', pluginAdded);

        return () => window.removeEventListener('plugin-loaded', pluginAdded);
    }, []);

    return (
        <div className="App">
            <p>Main-appen</p>

            {plugins.map(({ plugin }) => React.createElement(plugin, { text: 'Hello world!', key: plugin.name }))}
        </div>
    );
}

export default App;
