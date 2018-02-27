


    <div id="root"></div>
    
    <script src="https://unpkg.com/react@16.0.0-rc.3/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.0.0-rc.3/umd/react-dom.development.js"></script>
    <script src="text/javascript">
    
        const rootElement=document.getElementById('root');
    
        const element= React.createElement(
            'div' , {className: 'container'} ,'Hello Word'
        );
        console.log(element);
        var ReactDOM = require('react-dom');
        ReactDom.render(element, rootElement);
    </script>
