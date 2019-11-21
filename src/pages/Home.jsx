import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import { Card, WhiteSpace } from 'antd-mobile';
import Header from '../components/shared/Header';


const Home = () => {
  return (
    <IonPage>
      <Header title="Ionic+Antd Mobile" />
      <IonContent className="ion-padding">
        <WhiteSpace/>
        <Card>
          <Card.Header
            title="Antd Components"
          />
          <Card.Body>
            See the Sidebar
          </Card.Body>
        </Card>
      </IonContent>
    </IonPage>
  );
};

export default Home;
