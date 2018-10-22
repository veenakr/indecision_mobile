console.log('app.js is running!!!!');

// JSX - Javascript XML  

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onformsubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.options.value;
    console.log(app.options);

    if(option){
        app.options.push(option);
        e.target.elements.options.value='';
        render1();
    }
};

const onRemoveAll = () => {
    app.options= [];
    render1();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}


const appRoot = document.getElementById('app');

//const numbers=[30,60,90];


const render1 = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options': 'No Options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            {
                /*numbers.map((num) => {
                    return <p key={num}>Number: {num}</p>;
                })*/
            }
            <ol>
                {
                    app.options.map((str) => {
                        return <li key={str}>{str}</li>;
                    })
                }
            </ol>
            <form onSubmit={onformsubmit}>
                <input type="text" name="options"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
};

render1();





 