import React, { Component } from 'react'
import styled from 'styled-components'
import ee from 'event-emitter'

const Container = styled.div`
    background-color: ${props => props.color};
    color: white;
    padding: 16px;
    position: absolute;
    top: ${props => props.top}px;
    right: 16px;
    z-index: 999;
    transition: top 0.5 ease;
    border-radius: 10px;
    min-width: 25%;
`;

const emitter = new ee();

export const notify = (msg, color) => {
    emitter.emit('notification', msg, color);
}

class Notifications extends Component {
    constructor(props){
        super(props);
        this.state = {
            top: -100,
            msg: '',
            color: '',
        };

        this.timeout = null;

        emitter.on('notification', (msg, color) => {
            this.onShow(msg, color);
        });
    }

    onShow = (msg, color) =>{
        if(this.timeout){
            clearTimeout(this.timeout);
            this.setState({ top: -100 }, () => {
                this.timeout = setTimeout(()=>{
                    this.showNotification(msg, color);
                }, 500);
            });
        } else {
            this.showNotification(msg, color);
        }
    }

    showNotification = (msg, color) =>{
        this.setState({
            top: 16,
            msg,
            color
        }, () => {
            this.timeout = setTimeout(() => {
                this.setState({
                    top: -100,
                })
            }, 3000);
        });
    }

    render() {
        return (                
            <Container top={this.state.top} color={this.state.color}>{this.state.msg}</Container>    
        )
    }
}

export default Notifications
