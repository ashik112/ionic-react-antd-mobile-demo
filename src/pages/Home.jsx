import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import { NavBar, Icon, Card, WhiteSpace } from 'antd-mobile';
import CalendarDemo from '../components/antd/CalendarDemo';
import DatePickerDemo from '../components/antd/DatePickerDemo';
import ImagePickerExample from '../components/antd/ImagePickerExample';


const Home = () => {
  return (
    <IonPage>
      <NavBar
        leftContent="Back"
        mode="dark"
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >Ionic + Antd Mobile</NavBar>
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
