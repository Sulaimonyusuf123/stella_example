import React from 'react'
import {Header} from './Header'; // Update path as needed
import Feature from './Feature';
import { Market } from './Market';
import { Community } from './Community';
import { Frequent } from './Frequent';
import { Footer } from './Footer';

export const Landing = () => {
  return (
    <div className="bg-slate-950 min-h-screen">
         <Header />
         <Feature/>
         <Market/>
         <Community/>
         <Frequent/>
         <Footer/>
    </div>
  )
}