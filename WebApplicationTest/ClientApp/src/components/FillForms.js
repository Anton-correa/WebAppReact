import React from 'react';


class FillForms extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            val: '',
            select: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({ val: e.target.value });
        this.props.selectVal(this.state.val);

        this.props.addItems(this.props.val())
    }
    render() {
        let endResults;

        if (this.props.type === 'select') {
            endResults = <Droplist name={this.props.name} placeholder={this.props.placeholder} type={this.props.type} items={this.props.items} />;
        } else {
            endResults = <Formenters name={this.props.name} placeholder={this.props.placeholder} type={this.props.type} />;
        }

        return (<div>{endResults}</div>);
    }
}
function Formenters(props) {
    return (<h3><label for={props.name}>{props.placeholder}</label><input type={props.type} class="validate" />
    </h3>)
    }

function Droplist(props) {
    let getSelec = "";
    
    return (<div><select name={props.name}>{props.items.map((e, key) => {
        return <option key={key} value={e.name}>{e.name}</option>;
    })}</select >
        <label>{props.placeholder}</label></div>)
    }





export default FillForms;
