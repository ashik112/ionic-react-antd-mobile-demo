import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { NavBar, Icon, Card } from 'antd-mobile';
import CalendarDemo from '../components/antd/CalendarDemo';


const Home = () => {
  return (
    <IonPage>
      <NavBar
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
      </IonContent>
    </IonPage>
  );
};

export default Home;
