import React from 'react';
import ScheduleCell from './ScheduleCell'

class Schedule extends React.Component{
    state = {
        currentDate: '',
        today: '',
        tomorrow: '',
        dayAfterTomorrow: '',
        currentTime: ''
    }

    componentDidMount(){
        const present = new Date();
        const weekArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        this.setState({
            currentDate: weekArray[present.getDay()] + ', ' + (present.getMonth()+1) + '-' + present.getDate(),
            today: weekArray[present.getDay()],
            currentTime: present.getHours() + ':' + present.getMinutes()
        })
        if (present.getDay() === 5){
            this.setState({
                tomorrow: weekArray[6],
                dayAfterTomorrow: weekArray[0]
            })
        } else if (present.getDay() === 6){
            this.setState({
                tomorrow: weekArray[0],
                dayAfterTomorrow: weekArray[1]
            })
        } else {
            this.setState({
                tomorrow: weekArray[(present.getDay() + 1)],
                dayAfterTomorrow: weekArray[(present.getDay() + 2)]
            })
        }
    }

    render(){
        return(
            <div>
                <h1>My Schedule</h1>
                Currently: {this.state.currentDate}, {this.state.currentTime}
                <br></br>
                <div id="schedule">
                    <div className="schedule-header">Time</div>
                    <div className="schedule-header">{this.state.today}</div>
                    <div className="schedule-header">{this.state.tomorrow}</div>
                    <div className="schedule-header">{this.state.dayAfterTomorrow}</div>
                    <div className="schedule-time">9:00 AM</div>
                    <ScheduleCell h={9} m={[-1, 30]} d={0} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={9} m={[-1, 30]} d={1} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={9} m={[-1, 30]} d={2} time={this.state.currentTime} user={this.props.user}/>
                    <div className="schedule-time">9:30 AM</div>
                    <ScheduleCell h={9} m={[29, 60]} d={0} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={9} m={[29, 60]} d={1} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={9} m={[29, 60]} d={2} time={this.state.currentTime} user={this.props.user}/>
                    <div className="schedule-time">10:00 AM</div>
                    <ScheduleCell h={10} m={[-1, 30]} d={0} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={10} m={[-1, 30]} d={1} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={10} m={[-1, 30]} d={2} time={this.state.currentTime} user={this.props.user}/>
                    <div className="schedule-time">10:30 AM</div>
                    <ScheduleCell h={10} m={[29, 60]} d={0} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={10} m={[29, 60]} d={1} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={10} m={[29, 60]} d={2} time={this.state.currentTime} user={this.props.user}/>
                    <div className="schedule-time">11:00 AM</div>
                    <ScheduleCell h={11} m={[-1, 30]} d={0} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={11} m={[-1, 30]} d={1} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={11} m={[-1, 30]} d={2} time={this.state.currentTime} user={this.props.user}/>
                    <div className="schedule-time">11:30 AM</div>
                    <ScheduleCell h={11} m={[29, 60]} d={0} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={11} m={[29, 60]} d={1} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={11} m={[29, 60]} d={2} time={this.state.currentTime} user={this.props.user}/>
                    <div className="schedule-time">12:00 PM</div>
                    <ScheduleCell h={12} m={[-1, 30]} d={0} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={12} m={[-1, 30]} d={1} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={12} m={[-1, 30]} d={2} time={this.state.currentTime} user={this.props.user}/>
                    <div className="schedule-time">12:30 PM</div>
                    <ScheduleCell h={12} m={[29, 60]} d={0} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={12} m={[29, 60]} d={1} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={12} m={[29, 60]} d={2} time={this.state.currentTime} user={this.props.user}/>
                    <div className="schedule-time">1:00 PM</div>
                    <ScheduleCell h={13} m={[-1, 30]} d={0} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={13} m={[-1, 30]} d={1} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={13} m={[-1, 30]} d={2} time={this.state.currentTime} user={this.props.user}/>
                    <div className="schedule-time">1:30 PM</div>
                    <ScheduleCell h={13} m={[29, 60]} d={0} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={13} m={[29, 60]} d={1} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={13} m={[29, 60]} d={2} time={this.state.currentTime} user={this.props.user}/>
                    <div className="schedule-time">2:00 PM</div>
                    <ScheduleCell h={14} m={[-1, 30]} d={0} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={14} m={[-1, 30]} d={1} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={14} m={[-1, 30]} d={2} time={this.state.currentTime} user={this.props.user}/>
                    <div className="schedule-time">2:30 PM</div>
                    <ScheduleCell h={14} m={[29, 60]} d={0} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={14} m={[29, 60]} d={1} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={14} m={[29, 60]} d={2} time={this.state.currentTime} user={this.props.user}/>
                    <div className="schedule-time">3:00 PM</div>
                    <ScheduleCell h={15} m={[-1, 30]} d={0} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={15} m={[-1, 30]} d={1} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={15} m={[-1, 30]} d={2} time={this.state.currentTime} user={this.props.user}/>
                    <div className="schedule-time">3:30 PM</div>
                    <ScheduleCell h={15} m={[29, 60]} d={0} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={15} m={[29, 60]} d={1} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={15} m={[29, 60]} d={2} time={this.state.currentTime} user={this.props.user}/>
                    <div className="schedule-time">4:00 PM</div>
                    <ScheduleCell h={16} m={[-1, 30]} d={0} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={16} m={[-1, 30]} d={1} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={16} m={[-1, 30]} d={2} time={this.state.currentTime} user={this.props.user}/>
                    <div className="schedule-time">4:30 PM</div>
                    <ScheduleCell h={16} m={[29, 60]} d={0} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={16} m={[29, 60]} d={1} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={16} m={[29, 60]} d={2} time={this.state.currentTime} user={this.props.user}/>
                    <div className="schedule-time">5:00 PM</div>
                    <ScheduleCell h={17} m={[-1, 30]} d={0} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={17} m={[-1, 30]} d={1} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={17} m={[-1, 30]} d={2} time={this.state.currentTime} user={this.props.user}/>
                    <div className="schedule-time">5:30 PM</div>
                    <ScheduleCell h={17} m={[29, 60]} d={0} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={17} m={[29, 60]} d={1} time={this.state.currentTime} user={this.props.user}/>
                    <ScheduleCell h={17} m={[29, 60]} d={2} time={this.state.currentTime} user={this.props.user}/>
                </div>
            </div>
        )
    }
}

export default Schedule;