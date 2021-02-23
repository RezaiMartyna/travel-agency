import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    //renderuje dla nas ten komponent- czy funkcja działa?
    const component = shallow(<TripSummary id='abc' image='exemplefottext' name='exemplefottext' tags={[]} />);

    //expect pozwala na sprawdzenie, czy otrzymany wynik (czyli wyrenderowany komponent) jest prawdziwy.
    expect(component).toBeTruthy();
  });


  it('should render correct link', () => {
    const expectedId = 'abc';

    const component = shallow(<TripSummary id={expectedId} tags={[]} />);

    expect(component.find('Link').prop('to')).toEqual('/trip/abc');
  });

  it('should render correct image', () => {
    const expectedSrc = 'abc';
    const expectedAlt = 'def';

    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} tags={[]} />);

    expect(component.find('img').prop('src')).toEqual('abc');
    expect(component.find('img').prop('alt')).toEqual('def');
  });

  it('should render correct name, cost i days', () => {
    const expectedName = 'abc';
    const expectedCost = 'def';
    const expectedDays = 12;

    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} tags={[]} />);

    expect(component.find('h3').text()).toEqual('abc');
    expect(component.find('span').at(0).text()).toEqual('12 days');
    expect(component.find('span').at(1).text()).toEqual('from def');
  });

  it('should render 3 tags', () => {
    const expectedTags = ['a', 'b', 'c'];

    const component = shallow(<TripSummary tags={expectedTags} />);

    expect(component.find('.tag').at(0).text()).toEqual('a');
    expect(component.find('.tag').at(1).text()).toEqual('b');
    expect(component.find('.tag').at(2).text()).toEqual('c');
  });

  it('should not render div without tags', () => {

    const component = shallow(<TripSummary tags={[]} />);

    expect(component.find('.tags').exists()).toEqual(false);
  });

});
