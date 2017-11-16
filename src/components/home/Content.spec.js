import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Content} from './Content';
import * as homeRedux from './HomeRedux';
import * as homeSaga from './HomeSaga';
import {takeEvery,delay} from 'redux-saga';
import { put, call,take } from 'redux-saga/effects';
import {requestGetBooks} from '../../service/books';
configure({ adapter: new Adapter() });

const setup = () => {
    const props = {
        count: 10,
        addCount: jest.fn(),
        reduceCount: jest.fn()
    }
    const wrapper = shallow(<Content {...props} />);

    return {
        wrapper,
        props
    }
}

describe('Content', () => {
    const {wrapper, props} = setup();
    it('Content Component should render', () => {
        expect(wrapper.find('button').exists);
    })

    it('when then  was click, onClick should be called', () => {

        wrapper.find('button').at(0).simulate('click');
        expect(props.addCount).toBeCalled();
        
        wrapper.find('button').at(1).simulate('click');            
        expect(props.reduceCount).toBeCalled();
    })
    
})  

describe('home actions', () => {
    it('shoule create an action to add count', () => {
        const addAction = {
            type: homeRedux.HOME_ADD
        }
        expect(homeRedux.addCount()).toEqual(addAction);
    })
    it('shoule create an action to reduce count', () => {
        const addAction = {
            type: homeRedux.HOME_REDUCE
        }
        expect(homeRedux.reduceCount()).toEqual(addAction);
    })
})

describe('home reducer', () => {
    it('should return the initial state', () => {
        expect(homeRedux.reducer(undefined, {})).toEqual(homeRedux.initState)
    })
    it('should handle homeReducer', () => {
        expect(homeRedux.reducer({count:8}, homeRedux.addCount())).toEqual({count:9});
        expect(homeRedux.reducer({count:8}, homeRedux.reduceCount())).toEqual({count:7})
    })
})

describe('home saga', () => {
    const genTest = homeSaga.getBooks();
    const genWatch = homeSaga.watch();
    it('shoule handle homeSaga', () => {

        // console.log(genTest.next().value, call(requestGetBooks));
       expect(genTest.next().value).toEqual(call(requestGetBooks));
    //    expect(genTest.next()).toEqual({done: true,value: undefined });


        // expect(genWatch.next().value).toEqual(take(homeRedux.HOME_ADD));
        // expect(genWatch.next().value).toEqual(put(homeRedux.addCount()));
        
    })
})