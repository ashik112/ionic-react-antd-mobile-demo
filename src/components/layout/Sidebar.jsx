import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonMenuToggle } from '@ionic/react';
import { withRouter } from 'react-router';

const Sidebar = () => (
    <>
        <IonMenu type="push" side="start" menuId="mySidebar" contentId="drawer">
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Start Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent id="mySidebar">
                <IonList>
                   <IonMenuToggle autoHide={true}>
                   <IonItem routerLink="/home" routerDirection="forward">
                            Home
                    </IonItem>
                    <IonItem routerLink="/list" routerDirection="forward">
                            Lists
                    </IonItem>
                    <IonItem routerLink="/image-picker" routerDirection="forward">
                            Image Picker
                    </IonItem>
                   </IonMenuToggle>
                </IonList>
            </IonContent>
        </IonMenu>
        {/* <IonRouterOutlet id="drawer"></IonRouterOutlet> */}
    </>
);

export default withRouter(Sidebar);