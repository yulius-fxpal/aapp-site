import React, { Component } from 'react';
import uuid from 'react-uuid';
import Link from 'next/link';
import { stateCounties } from '../data/stateCounties';

export default class Adopt extends Component {
  static makeLIs(item) {
    return (
      <option key={uuid()} value={item}>
        {item}
      </option>
    );
  }

  constructor(props) {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.state = {
      currentState: '',
      states: [],
      counties: []
    };
  }

  componentDidMount() {
    const stateList = Object.keys(stateCounties).map((k) => (k));
    const countyList = stateCounties[stateList[0]].map((k) => (k));
    this.setState({
      currentState: stateList[0],
      states: stateList,
      counties: countyList
    });
  }

  handleStateChange = (event) => {
    const countyList = stateCounties[event.target.value].map((k) => (k));
    this.setState({
      currentState: event.target.value,
      counties: countyList
    });
  }

  render() {
    const { currentState, states, counties } = this.state;
    const statesList = states.length > 0 && states.map(Adopt.makeLIs);
    const countyList = counties.length > 0 && counties.map(Adopt.makeLIs);
    return (
      <div className='bg-bg2 bg-cover h-screen '>
        <div className='container mx-auto h-screen relative'>
          <div className='flex flex-col w-full text-center'>
            <div className='mt-10'>
              <div className='md:flex md:items-center mb-6'>
                <div className='md:w-5/6' />
                <div className='md:w-1/6 text-right'>
                  <Link href='/'>
                    <button type='submit' className='bg-white active:bg-red-400 hover:bg-blue-700 hover:text-white focus:outline-none focus:shadow-outline text-black py-2 px-4 w-1/1 rounded-full mr-4'>
                      <img src='/img/star.svg' alt='Home button' style={{ float: 'none', width: '300px' }} />
                      Main
                    </button>
                  </Link>
                </div>
              </div>
              <div className='md:flex md:items-center mb-6'>
                <div className='md:w-1/4' />
                <select
                  onChange={this.handleStateChange}
                  value={currentState}
                  className='md:w-1/2 bg-white hover:bg-blue-700 hover:text-white focus:outline-none focus:shadow-outline text-black py-2 px-4 w-1/3 rounded-full'
                >
                  {statesList}
                </select>
              </div>
              <div className='md:flex md:items-center mb-6'>
                <div className='md:w-1/4' />
                <select className='md:w-1/2 bg-white hover:bg-blue-700 hover:text-white focus:outline-none focus:shadow-outline text-black py-2 px-4 w-1/3 rounded-full'>
                  {countyList}
                </select>
              </div>
              <div className='md:flex md:items-center mb-6'>
                <div className='md:w-1/4' />
                <input className='md:w-1/2 appearance-none bg-white block border border-gray-300 focus:outline-none focus:outline-none focus:shadow-outline focus:shadow-outline hover:bg-blue-700 hover:text-white leading-normal px-4 py-2 rounded-full rounded-lg text-black w-1/3 ' type='email' placeholder='you@example.com' />
              </div>
              <div className='text-white absolute p-10 text-center'>
                <div className='md:flex md:items-center mb-6'>
                  <div className='md:w-1/4' />
                  <label className='w-1/2 block font-bold' htmlFor='promiseCheck'>
                    <p className='text-sm text-left'>
                      <input className='mr-2 leading-tight' type='checkbox' name='promiseCheck' />
                      By checking this box you&apos;re promising to help real people cast real
                      votes. You may receive updates about this project with specific ways you
                      can help your neighbors as they cast their votes.
                    </p>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
