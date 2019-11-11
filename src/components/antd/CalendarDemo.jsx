import React, { useState } from 'react';
import { List, Calendar } from 'antd-mobile';
import enUS from 'antd-mobile/lib/calendar/locale/en_US';

const CalendarDemo = () => {
    const [showCalendar, setShowCalendar] = useState(false);
    const originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY;
    const today = new Date();
    const now = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const onConfirm = (startTime, endTime) => {
        document.getElementsByTagName('body')[0].style.overflowY = originbodyScrollY;
        setShowCalendar(false);
        console.log('Date range selected:  ', startTime, ' - ', endTime);
    }
    const onCancel = () => {
        document.getElementsByTagName('body')[0].style.overflowY = originbodyScrollY;
        setShowCalendar(false);
    }
    const renderBtn = () => {
        return (
            <>
                <List.Item arrow="horizontal"
                    onClick={() => {
                        document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
                        setShowCalendar(true);
                    }}
                >
                    Select Date Range
        </List.Item>
            </>
        );
    };

    return (
        <>
            <List>
                {renderBtn()}
            </List>
            <Calendar
                pickTime
                locale={enUS}
                visible={showCalendar}
                defaultDate={now}
                minDate={new Date(+now - 5184000000)}
                maxDate={new Date(+now + 31536000000)}
                onConfirm={onConfirm}
                onCancel={onCancel}
            />
        </>
    );
}
export default CalendarDemo;