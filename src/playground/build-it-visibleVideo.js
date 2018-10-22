class VisibilityToggle extends React.Component {
    constructor (props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            visibility: false
        }
    }

    toggle() {

        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggle}>
                    {
                        this.state.visibility ? 'Hide Details' : 'Show Details'
                    }
                </button>
                {
                    this.state.visibility && (
                        <div>
                            <p>Here are some details you can see</p>
                        </div>
                    )
                }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visible = false;


// const toggle = () => {
//     visible = !visible;
//     render();
// }
// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick = {toggle}>
//                 {
//                     visible ? 'Hide Details' : 'Show Details'
//                 }
//             </button>
//             {
//                 visible && (
//                     <div>
//                         <p>Here are some details you can see</p>
//                     </div>
//                 )
//             }
//         </div>
//     )

//     ReactDOM.render(jsx, document.getElementById('app'));
// };
// render();