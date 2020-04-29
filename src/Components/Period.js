import React from 'react';
import '../Styles/Period.css';

class Period extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open:false,
        }
    }

    handleOpen = () => {
        let open = !this.state.open;
        this.setState({ open })
    }

    render() {
        return(
            <div className="period-bloc-container">
                <div className={this.state.open ? "period-bloc-banner opened" : "period-bloc-banner closed"}>
                    <h2>Antiquité</h2>
                    <h3>VIIème siècle avant JC - 1er siècle avant JC</h3>
                    <div onClick={this.handleOpen} className="open-content-container">
                        <span className={this.state.open ? 'close-content' : 'open-content'} />
                    </div>
                </div>
                <div className={this.state.open ? 'period-bloc-content opened' : 'period-bloc-content closed'}>
                    <p>LOREM IPSUM</p>
                </div>
            </div>
            )
    }    
}

export default Period;