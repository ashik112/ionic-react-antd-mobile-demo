import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import 'antd-mobile/dist/antd-mobile.css';
/* Theme variables */
import './theme/variables.css';
import Sidebar from './components/layout/Sidebar';
import Lists from './components/antd/Lists';
import ImagePickerExample from './components/antd/ImagePickerExample';
import CalendarDemo from './components/antd/CalendarDemo';
import DatePickerDemo from './components/antd/DatePickerDemo';

const App = () => (
  <IonApp>
    <IonReactRouter id="drawer">
        <Sidebar />
        <IonRouterOutlet id="drawer">
          <Route path="/home" component={Home} exact={true} />
          <Route path="/list-demo" component={Lists} exact={true} />
          <Route path="/image-picker-demo" component={ImagePickerExample} exact={true} />
          <Route path="/datepicker-demo" component={DatePickerDemo} exact={true} />
          <Route path="/calendar-demo" component={CalendarDemo} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
