import React, { Component } from 'react';
import Link from 'next/link';

export default class Home extends Component {
  render() {
    return (
      <div className='bg-bg1 bg-cover h-screen '>
        <div className='h-screen bg-gradient-to-b from-white via-grey-500 to-black-500 opacity-60'>
          <div className='container mx-auto h-screen relative'>
            <div className='flex flex-col w-full text-center'>
              <img src='/img/banner.svg' className='' alt='Decorative banner' />
              <div className='mt-10'>
                <Link href='/adopt'>
                  <button type='submit' className='bg-white active:bg-red-400 hover:bg-blue-700 hover:text-white focus:outline-none focus:shadow-outline text-black py-2 px-4 w-1/5 rounded-full mr-4'>
                    ADOPT A LOCATION
                  </button>
                </Link>
                <Link href='/adopt'>
                  <button type='submit' className='bg-white hover:bg-blue-700 hover:text-white focus:outline-none focus:shadow-outline text-black py-2 px-4 w-1/5 rounded-full'>
                    ROLL CALL
                  </button>
                </Link>
              </div>
            </div>
            <div className='text-white absolute bottom-0 p-10 text-center'>
              Voting is our patriotic duty and our right. Many Americans will be asked
              to do too much in order to exercise that right. By adopting a polling place,
              you&apos;re promising to support your neighbors as they in the next election.
              You&apos;re pledging to bring a few boxes of Pizza, lawn chairs or maybe some
              games to help them deal with the unfairly long lines in some communities.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
