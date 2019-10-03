import React from 'react';
import Acceleration from './Acceleration';
import AccelerationItem from '../components/AccelerationItem';
import renderer from 'react-test-renderer';
import { FlatList, Text } from 'react-native';

describe('Acceleration Initial', () => {
  it('Should have the codenation logo', () => {
    const instance = renderer.create(<Acceleration />).root;

    expect(instance.findAllByType('Image')[0].props.source).toEqual({uri: "https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png"});
  })
})

describe('Acceleration Normal', () => {
  const navigation = {
    navigate: () => {}
  }

  it('Should have a list of accelerations', () => {
    const instance = renderer.create(<Acceleration />).root;

    expect(instance.findAllByType(FlatList).length).toBe(1)
  })

  it('Should have a list of accelerations', () => {
    const instance = renderer.create(<Acceleration />).root;

    expect(instance.findAllByType(AccelerationItem).length).toBe(6)
  })

  it('Should have the image from the acceleration json', () => {
    const instance = renderer.create(<Acceleration />).root;

    expect(instance.findAllByType('Image')[2].props.source).toEqual({
      uri: "https://s3-us-west-1.amazonaws.com/acceleration-assets-highway/reactnative-online-1/banner.jpg"
    })

    expect(instance.findAllByType('Image')[7].props.source).toEqual({
      uri: "https://s3-us-west-1.amazonaws.com/acceleration-assets-highway/python-online-1/banner.jpg"
    })
  })

  it('Should have the acceleration title', () => {
    const instance = renderer.create(<Acceleration />).root;

    expect(instance.findAllByType(Text)[0].children[0].children[0]).toBe('Acelerações')
  })

  it('Should have the acceleration name for each acceleration', () => {
    const instance = renderer.create(<Acceleration />).root;

    expect(instance.findAllByType(Text)[1].children[0].children[0]).toBe('React Native')
    expect(instance.findAllByType(Text)[4].children[0].children[0]).toBe('ADxp Data Science')
    expect(instance.findAllByType(Text)[7].children[0].children[0]).toBe('ADxp Data Science')
    expect(instance.findAllByType(Text)[10].children[0].children[0]).toBe('ADxp Data Science')
    expect(instance.findAllByType(Text)[13].children[0].children[0]).toBe('ADxp Data Science')
    expect(instance.findAllByType(Text)[16].children[0].children[0]).toBe('Python Women')
  })

  it('Should have the acceleration location for each acceleration', () => {
    const instance = renderer.create(<Acceleration />).root;

    expect(instance.findAllByType(Text)[2].children[0].children[0]).toBe('Online')
    expect(instance.findAllByType(Text)[5].children[0].children[0]).toBe('DevHub Joinville, SC')
    expect(instance.findAllByType(Text)[8].children[0].children[0]).toBe('DevHub Joinville, SC')
    expect(instance.findAllByType(Text)[11].children[0].children[0]).toBe('a confirmar')
    expect(instance.findAllByType(Text)[14].children[0].children[0]).toBe('a confirmar')
    expect(instance.findAllByType(Text)[17].children[0].children[0]).toBe('Online')
  })

  it('Should have the user photo as a button to go to user profile', () => {
    const instance = renderer.create(<Acceleration />).root;

    expect(instance.findAllByProps({className: 'user-image-btn'}).length).toBe(1)
    expect(instance.findAllByType('Image')[1].props.source).toEqual({
      uri: "https://secure.gravatar.com/avatar/f50a9db56e231198af3507f10b5d5491?d=mm"
    })
  })

  it('Should go to user profile when click on user photo', () => {
    const spy = jest.spyOn(navigation, 'navigate');

    const instance = renderer.create(<Acceleration navigation={navigation} />).root;
    instance.findAllByProps({className: 'user-image-btn'})[0].props.onPress();

    expect(spy).toHaveBeenCalledWith('Profile');
  })

  it('Should open the modal when click on an acceleration', () => {

    const instance = renderer.create(<Acceleration />).root;

    expect(instance.findAllByProps({className: 'modal'})[0].props.visible).toBe(false);

    instance.findAllByProps({className: 'acceleration-item-btn'})[0].props.onPress();

    expect(instance.findAllByProps({className: 'modal'})[0].props.visible).toBe(true);
  })

  it('Should close the modal when click at the button', () => {

    const instance = renderer.create(<Acceleration />).root;

    expect(instance.findAllByProps({className: 'modal'})[0].props.visible).toBe(false);

    instance.findAllByProps({className: 'acceleration-item-btn'})[0].props.onPress();

    expect(instance.findAllByProps({className: 'modal'})[0].props.visible).toBe(true);

    instance.findAllByProps({className: 'close-modal-btn'})[0].props.onPress();

    expect(instance.findAllByProps({className: 'modal'})[0].props.visible).toBe(false);
  })
})

describe('Acceleration Advanced', () => {
  it('Should have the default image when it comes blank from acceleration json', () => {
    const instance = renderer.create(<Acceleration />).root;

    expect(instance.findAllByType('Image')[3].props.source).toEqual({
      uri: "http://denrakaev.com/wp-content/uploads/2015/03/no-image.png"
    })

    expect(instance.findAllByType('Image')[4].props.source).toEqual({
      uri: "http://denrakaev.com/wp-content/uploads/2015/03/no-image.png"
    })

    expect(instance.findAllByType('Image')[5].props.source).toEqual({
      uri: "http://denrakaev.com/wp-content/uploads/2015/03/no-image.png"
    })

    expect(instance.findAllByType('Image')[6].props.source).toEqual({
      uri: "http://denrakaev.com/wp-content/uploads/2015/03/no-image.png"
    })
  })

  it('Should have the acceleration date for each acceleration', () => {
    const instance = renderer.create(<Acceleration />).root;

    expect(instance.findAllByType(Text)[3].children[0].children[0]).toBe('28/07/2019')
    expect(instance.findAllByType(Text)[6].children[0].children[0]).toBe('19/08/2019')
    expect(instance.findAllByType(Text)[9].children[0].children[0]).toBe('20/08/2019')
    expect(instance.findAllByType(Text)[12].children[0].children[0]).toBe('23/09/2019')
    expect(instance.findAllByType(Text)[15].children[0].children[0]).toBe('24/09/2019')
    expect(instance.findAllByType(Text)[18].children[0].children[0]).toBe('11/08/2019')
  })
})
