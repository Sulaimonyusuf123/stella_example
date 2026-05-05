import React from 'react'
import card1 from '../Components/Images/Top.png'
import card2 from '../components/Images/406.png'
import card3 from '../Components/Images/bottom.png'
import card4 from '../Components/Images/Card4.png'
import card5 from '../Components/Images/Card5.png'
import card6 from '../Components/Images/407.png'
import card7 from '../Components/Images/408.png'
import card8 from '../Components/Images/409.png'

export const Community = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <div className="hidden md:block" style={{width: '160%'}}>
              <img 
                src={card1} 
                alt="testimonial" 
                className="rounded-3xl object-cover w-full" 
                style={{height: '150px'}} 
              />
            </div>
            
          <div 
  className="bg-[#1a1a1a] rounded-3xl p-6 text-center md:text-left md:p-10 flex flex-col items-center md:flex-row md:items-center justify-between gap-4 md:gap-0 w-full md:w-[160%]" 
  style={{minHeight: '200px'}}
>
  <div>
    <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-1">
      What Our Community
    </h2>
    <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-1">
      Has to Say <span className="text-teal-400">About Us</span>
    </h2>
  </div>
  <button className="border-2 border-teal-400 text-teal-400 px-8 py-3 md:px-10 md:py-4 rounded-full hover:bg-teal-400 hover:text-white transition-colors font-medium text-sm md:text-base whitespace-nowrap">
    View all comments
  </button>
</div>
            
            <div className="hidden md:block" style={{width: '160%'}}>
              <img 
                src={card3} 
                alt="testimonial" 
                className="rounded-3xl object-cover w-full" 
                style={{height: '150px'}} 
              />
            </div>
          </div>

          {/* Middle Column */}
          <div className="flex flex-col gap-3 items-center md:items-stretch md:translate-x-60">
            <img src={card2} alt="testimonial" className="w-full max-w-sm md:max-w-none rounded-3xl" />
            <img src={card4} alt="testimonial" className="w-full max-w-sm md:max-w-none rounded-3xl" />
            <img src={card5} alt="testimonial" className="w-full max-w-sm md:max-w-none rounded-3xl" />
            <img src={card6} alt="testimonial" className="w-full max-w-sm md:max-w-none rounded-3xl" />
          </div>

         {/* Right Column - Half visible, flush right */}
          <div className="hidden md:flex flex-col gap-6 absolute right-[-130px] top-0 w-1/2 translate-x-1/2">
            <img src={card7} alt="testimonial" className="w-full rounded-3xl object-cover" style={{height: '100px'}} />
            <img src={card4} alt="testimonial" className="w-full rounded-3xl object-cover" style={{height: '250px'}} />
            <img src={card8} alt="testimonial" className="w-full rounded-3xl object-cover" style={{height: '150px'}} />
          </div>
        </div>
      </div>
    </div>
  )
}