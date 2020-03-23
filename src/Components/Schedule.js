import React from 'react';

class Schedule extends React.Component{
    state = {
        currentDate: '',
        currentTime: ''
    }

    componentDidMount(){
        const present = new Date();
        this.setState({
            currentDate: (present.getMonth()+1) + '-' + present.getDate(),
            currentTime: present.getHours() + ':' + present.getMinutes()
        })
    }

    render(){
        return(
            <div>
                <h1>My Schedule</h1>
                Currently:<br></br>
                {this.state.currentDate}<br></br>
                {this.state.currentTime}
            </div>
        )
    }
}

export default Schedule;