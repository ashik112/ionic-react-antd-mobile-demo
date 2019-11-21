import React, { useState } from 'react';
import { List, Calendar, Button, Card, WhiteSpace } from 'antd-mobile';
import enUS from 'antd-mobile/lib/calendar/locale/en_US';
import { IonPage, IonContent } from '@ionic/react';
import Header from '../shared/Header';

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
        <Button
          type='primary'
          onClick={() => {
            document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
            setShowCalendar(true);
          }}
        >
          Select Date Range
        </Button>
      </>
    );
  };

  return (
    <IonPage>
      <Header title="Calendar Demo" />
      <IonContent className="ion-padding">
        <WhiteSpace />
        <Card>
          <Card.Header
            title="Calendar"
          />
          <Card.Body>
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
          </Card.Body>
        </Card>
      </IonContent>
    </IonPage>
  );
}
export default CalendarDemo;