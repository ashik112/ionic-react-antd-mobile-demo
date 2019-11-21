import React from 'react';
import { NavBar } from 'antd-mobile';
import { IonMenuButton } from '@ionic/react';

const Header = ({ title }) => (
    <>
       <NavBar
        leftContent={<IonMenuButton />}
        mode="light"
        // rightContent={[
        //   <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        //   <Icon key="1" type="ellipsis" />,
        // ]}
      >{title}</NavBar>
        {/* <IonRouterOutlet id="drawer"></IonRouterOutlet> */}
    </>
);

export default Header;