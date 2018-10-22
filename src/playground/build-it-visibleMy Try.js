console.log('build-it-visible.js is running!!!!');

const appRoot = document.getElementById('app');

const app = {
    details: "Show Details",
    para: ""
};


const onClickShow = () => {
    if (app.details === "Show Details"){
        app.details = "Hide Details";
        app.para = "This is done by Veena";
    }
    else {
        app.details = "Show Details";
        app.para = '';
    }
    
    render1();
};
const render1 = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick = {onClickShow}>{app.details}</button>
            <p>{app.para = "" ? Null : app.para}</p>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render1();

