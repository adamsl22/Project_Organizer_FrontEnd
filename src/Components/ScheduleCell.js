import React from 'react';

class ScheduleCell extends React.Component{


    render(){
        const hour = parseInt(this.props.time.split(':')[0])
        const minute = parseInt(this.props.time.split(':')[1])
        return (
            <div className='schedule-cell'>
                {this.props.h === hour && this.props.m[0] < minute && this.props.m[1] > minute && this.props.d === 0 && <div>current</div>}
            </div>
        )
    }
}

export default ScheduleCell