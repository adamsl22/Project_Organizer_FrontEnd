import React from 'react';

class ScheduleCell extends React.Component{


    render(){
        const hour = this.props.time.split(':')[0]
        const minute = this.props.time.split(':')[1]
        return (
            <div>
                {this.props.h === hour && this.props.m[0] < minute && this.props.m[1] > minute && this.props.d === 0 && <div>current</div>}
            </div>
        )
    }
}

export default ScheduleCell