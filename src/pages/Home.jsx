import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import { Card, WhiteSpace } from 'antd-mobile';
import CalendarDemo from '../components/antd/CalendarDemo';
import DatePickerDemo from '../components/antd/DatePickerDemo';
import ImagePickerExample from '../components/antd/ImagePickerExample';
import Header from '../components/shared/Header';


const Home = () => {
  return (
    <IonPage>
      <Header title="Ionic+Antd Mobile" />
      <IonContent className="ion-padding">
        <Card>
          <Card.Header
            title="Calendar"
          />
          <Card.Body>
            <CalendarDemo />
          </Card.Body>
        </Card>
        <WhiteSpace/>
        <Card>
          <Card.Header
            title="Date Picker"
          />
          <Card.Body>
            <DatePickerDemo/>
          </Card.Body>
        </Card>
        <WhiteSpace/>
        <Card>
          <Card.Header
            title="Image Picker"
          />
          <Card.Body>
            <ImagePickerExample/>
          </Card.Body>
        </Card>
      </IonContent>
    </IonPage>
  );
};

export default Home;
