import React from 'react';
import { ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';
import { IonPage, IonContent } from '@ionic/react';
import Header from '../shared/Header';

const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122',
}];

class ImagePickerExample extends React.Component {
  state = {
    files: data,
    multiple: false,
  }
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  }
  onSegChange = (e) => {
    const index = e.nativeEvent.selectedSegmentIndex;
    this.setState({
      multiple: index === 1,
    });
  }

  render() {
    const { files } = this.state;
    return (
      <IonPage>
        <IonContent>
          <Header title="Image Picker" />
          <WingBlank>
            <SegmentedControl
              values={['Single', 'Multiple']}
              selectedIndex={this.state.multiple ? 1 : 0}
              onChange={this.onSegChange}
            />
            <ImagePicker
              files={files}
              onChange={this.onChange}
              onImageClick={(index, fs) => console.log(index, fs)}
              selectable={files.length < 7}
              multiple={this.state.multiple}
            />
          </WingBlank>
        </IonContent>
      </IonPage>
    );
  }
}

export default ImagePickerExample;