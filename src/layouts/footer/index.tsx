import React from 'react'

export default function Footer() {
  return (
    <div className='p-[70px]'>
      <div className='flex justify-around'>
        <div className='text-[#181E4B] text-left'>
          <div className='text-[44px] font-medium leading-[66px] mb-[15px]'>Jadoo.</div>
          <div className='text-[13px] leading-[16px] font-medium w-[207px]'>
          Book your trip in minute, get full Control for much longer.

          </div>
        </div>
        <div>
          <div className='font-bold text-[21px] leading-[25px] text-[#080809]'>Company</div>
          <div className='mt-[34px] text-left flex flex-col text-[#5E6282] font-medium text-[18px] leading-[22px] gap-[12px]'>
            <div>About</div>
            <div>Careers</div>
            <div>Mobile</div>
          </div>
        </div>
        <div>
          <div className='font-bold text-[21px] leading-[25px] text-[#080809]'>Contact</div>
          <div className='mt-[34px] text-left flex flex-col text-[#5E6282] font-medium text-[18px] leading-[22px] gap-[12px]'>
            <div>Help/FAQ</div>
            <div>Press</div>
            <div>Affilates</div>
          </div>
        </div>
        <div>
          <div className='font-bold text-[21px] leading-[25px] text-[#080809]'>More</div>
          <div className='mt-[34px] text-left flex flex-col text-[#5E6282] font-medium text-[18px] leading-[22px] gap-[12px]'>
            <div>About</div>
            <div>Careers</div>
            <div>Mobile</div>
          </div>
        </div>
        <div>
          <div className='flex items-center justify-center gap-[20px]'>
            <button className='shadow-lg rounded-[50px] w-[41px] h-[41px] text-[#080809] text-[30px] font-bold'>f</button>
            <img src = "images/foo_b1.png" className = 'w-[55px] h-[55px]' />
            <button className='shadow-lg rounded-[50px] w-[41px] h-[41px] text-[#080809] flex justify-center items-center'><img src ='images/twitter.png' className='w-[21px] h-[21px]' /></button>
          </div>
          <div className='font-medium text-[20px] leading-[25px] text-[#5E6282] mt-[26px]'>Discover our app</div>
          <div className='flex justify-between gap-[10px] mt-[14px]'>
            <button className='rounded-[30px] bg-black py-[10px] px-[14px]' >
              <img src = 'images/googlestore.png' />
            </button>
            <button className='rounded-[30px] bg-black py-[10px] px-[14px]' >
              <img src = 'images/applestore.png' />
            </button>
          </div>
        </div>

      </div>
      <div className='text-[14px] leading-[17px] text-[#5E6282] font-medium mt-[80px]'>All rights reserved@jadoo.co</div>
    </div>

  )
}
