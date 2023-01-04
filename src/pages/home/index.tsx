import React from 'react'
import './home.css'
export default function Home() {
  return (
    <div className='min-w-[1200px] px-[150px] z-10'>
      <div className='flex items-center'>

        <div className='text-left w-[70%] py-[120px]'>
          <p className='text-[#DF6951] text-[20px] leading-[30px] font-bold uppercase'>Best Destinations around the world</p>
          <p className='text-[#181E4B] leading-[89px] text-[84px] font-bold mt-[25px] tracking-tighter'>Travel, enjoy and live a new and full life</p>
          <p className='text-[16px] leading-[30px] text-[#5E6282] font-normal mt-[20px]'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
          <div className='flex gap-[44px] mt-[32px]'>
            <button className='text-white rounded-[10px] p-[15px] bg-[#F1A501] text-[18px]'>Find out more</button>
            <button className='flex items-center text-[17px] font-medium leading-[26px] text-[#686D77] gap-[10px]'><img src ='images/play.png' className ='w-[52px] h-[52px]' />Play Demo</button>

          </div>
        </div>
        <div>
          <img src="/images/headertop.png" />
        </div>

      </div>
      <div className='text-center'>
        <div className='uppercase text-[18px] leading-[27px] text-[#5E6282] font-semibold'>Category</div>
        <div className='capitalize text-[50px] leading-[64px] font-bold mb-[60px]
        '>
          We Offer Best Services
        </div>
        <div className='flex gap-10'>
          <div className='items-center w-[260px] rounded-[36px] shadow-lg p-[22px]'>
            <div className='flex justify-center'>
            <img src='images/item1.png' className = 'w-[92px] h-[78px]' />
            </div>
            <div className='text-center font-semibold text-[20px] leading-[27px] my-[21px] text-[#1E1D4C]'>Calculated Weather</div>
            <div className='font-medium font-[16px] leading-[26px] text-[#5E6282]'>Built Wicket longer admire do barton vanity itself do in it.</div>
          </div>
          <div className='items-center w-[260px] rounded-[36px] shadow-lg p-[22px]'>
          <div className='flex justify-center'>
            <img src='images/item2.png' className = 'w-[92px] h-[78px]' />
            </div>
            <div className='text-center font-semibold text-[20px] leading-[27px] my-[21px] text-[#1E1D4C]'>Best Flights</div>
            <div className='font-medium font-[16px] leading-[26px] text-[#5E6282]'>Engrossed listening. Park gate sell they west hard for the.</div>
          </div>
          <div className='items-center w-[260px] rounded-[36px] shadow-lg p-[22px]'>
          <div className='flex justify-center'>
            <img src='images/item3.png' className = 'w-[92px] h-[78px]' />
            </div>
            <div className='text-center font-semibold text-[20px] leading-[27px] my-[21px] text-[#1E1D4C]'>Local Events</div>
            <div className='font-medium font-[16px] leading-[26px] text-[#5E6282]'>Barton vanity itself do in it. Preferd to men it engrossed listening. </div>
          </div>
          <div className='items-center w-[260px] rounded-[36px] shadow-lg p-[22px]'>
          <div className='flex justify-center'>
            <img src='images/item4.png' className = 'w-[92px] h-[78px]' />
            </div>
            <div className='text-center font-semibold text-[20px] leading-[27px] my-[21px] text-[#1E1D4C]'>Customization</div>
            <div className='font-medium font-[16px] leading-[26px] text-[#5E6282]'>We deliver outsourced aviation services for military customers</div>
          </div>

        </div>
      </div>
      <div className='text-center mt-[123px]'>
        <div className='uppercase text-[18px] leading-[27px] text-[#5E6282] font-semibold'>Top Selling</div>
        <div className='capitalize text-[50px] leading-[64px] font-bold
        '>
          Top Destinations
        </div>
        <div className='flex gap-[100px]  text-[#5E6282] font-medium mt-[60px] justify-center'>
          <div className='rounded-[20px] shadow-lg'>
            <img src='images/des1.png' className='w-[254px] h-[359px] rounded-[20px]' />
            <div className='p-[25px]'>
              <div className='flex font-[18px] leading-[22px] justify-between'>
                <div>Rome, Italy</div>
                <div>$5,42k</div>
              </div>
              <div className='flex items-center mt-[18px] gap-4'>
                <img src='images/arrow.png' className='w-[16px] h-[16px]' />
                <p className='leading-[20px] text-[16px]'>10 Days Trip</p>
              </div>
            </div>
          </div>
          <div className='rounded-[20px] shadow-lg'>
            <img src='images/des2.png' className='w-[254px] h-[359px] rounded-[20px]' />
            <div className='p-[25px]'>
              <div className='flex font-[18px] leading-[22px] justify-between'>
                <div>London, UK</div>
                <div>$4,2k</div>
              </div>
              <div className='flex items-center mt-[18px] gap-4'>
                <img src='images/arrow.png' className='w-[16px] h-[16px]' />
                <p className='leading-[20px] text-[16px]'>12 Days Trip</p>
              </div>
            </div>
          </div>
          <div className='rounded-[20px] shadow-lg'>
            <img src='images/des3.png' className='w-[254px] h-[359px] rounded-[20px]' />
            <div className='p-[25px]'>
              <div className='flex font-[18px] leading-[22px] justify-between'>
                <div>Full Europe</div>
                <div>$15k</div>
              </div>
              <div className='flex items-center mt-[18px] gap-4'>
                <img src='images/arrow.png' className='w-[16px] h-[16px]' />
                <p className='leading-[20px] text-[16px]'>28 Days Trip</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='flex mt-[150px] items-center gap-[40px]'>
        <div className='text-left w-[60%]'>
          <div className='uppercase text-[18px] leading-[27px] text-[#5E6282] font-semibold'>Easy and Fast</div>
          <div className='capitalize text-[50px] leading-[64px] font-bold color-[#14183E]
          '>
            Book your next trip in 3 easy steps
          </div>

          <div className='w-[450px]'>
            <div className='mt-[48px]'>
              <div className='flex items-center gap-4'>
                <div >
                  <img src='images/bo1.png'/>
                </div>
                <div>
                  <div>Choose Destination</div>
                  <div className='text-[#5E6282] text-[16px] leading-[20px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </div>
                </div>
              </div>
            </div>
            <div className='mt-[48px]'>
              <div className='flex items-center gap-4'>
                <div>
                  <img src='images/bo2.png'/>
                </div>
                <div>
                  <div>Make Payment</div>
                  <div className='text-[#5E6282] text-[16px] leading-[20px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </div>
                </div>
              </div>
            </div>
            <div className='mt-[48px]'>
              <div className='flex items-center gap-4'>
                <div>
                  <img src='images/bo3.png' />
                </div>
                <div>
                  <div>Reach Airport on Selected Date</div>
                  <div className='text-[#5E6282] text-[16px] leading-[20px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='text-left'>
          <div className='rounded-[40px] shadow-lg p-[20px]'>
            <img src='images/girl.png' />
            <div className='text-[18px] leading-[22px] font-medium tracking-tight mt-[20px]'>
              Trip to Greece
            </div>
            <div className='text-[16px] leading-[18px] font-medium text-[#84829A] mt-[20px]'>
              14-29 June | by Robbin joseph
            </div>
            <div className='flex gap-4 mt-[20px]'>
              <img src = 'images/icon1.png' className='w-[36px] h-[36px]' />
              <img src = 'images/icon2.png' className='w-[36px] h-[36px]' />
              <img src = 'images/icon3.png' className='w-[36px] h-[36px]' />

            </div>

            <div className='items-center flex gap-4 mt-[20px] justify-between'>
              <div className='flex items-center gap-4'>
                <img src = 'images/icon0.png' className='w-[16px] h-[16px]' />
                <div>24 people going</div>
              </div>
              <img src = 'images/kiss.png' />
            </div>
            
          </div>
          <div className='flex shadow-lg relative top-[-150px] left-[200px] bg-white w-[250px] rounded-[18px] p-[18px] gap-[11px]'>
              <img src = 'images/temple.png' className='w-[50px] h-[50px]'  />
              <div>
                <div className='text-[16px] leading-[18px] font-medium text-[#84829A]'>Ongoing</div>
                <div className='text-[18px] leading-[22px] font-medium tracking-tight mt-[5px] mb-[12px]'>Trip to Rome</div>
                <div className='font-medium text-[14px] leading-[17px]'><span className='text-[#8A79DF]'>40%</span> completed</div>
                <div className="progress h-[5px] mt-[10px] text-[#8A79DF] w-[140px]">
                  <div className="progress-bar h-[5px] w-[40%]"></div>
                </div>
              </div>
            </div>
        </div>

      </div>


      <div className='flex mt-[200px]'>
        <div className='text-left'>
          <div className='uppercase text-[18px] leading-[27px] text-[#5E6282] font-semibold'>TESTIMONIALS</div>
          <div className='capitalize text-[50px] leading-[64px] font-bold color-[#14183E]
          '>
            What People Say About Us.
          </div>

        </div>

        <div className='text-left w-[60%]'>
          <div>
            <div className='relative bottom-[-40px] left-[-25px]'>
              <img src = "images/avatar.png" />
            </div>

            <div className='mt-[20px] shadow-lg text-[#5E6282] pt-[28px] pl-[34px] pr-[88px] pb-[30px] rounded-[15px]'>
              <div className='font-medium text-[16px] leading-[32px]'>
              “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
              </div>

              <div className='text-[18px] font-bold leading-[27px] mt-[20px]'>Mike Taylor</div>
              <div className='text-[14px] leading-[21px] font-medium'>Lahore, Pakistan</div>
            </div>

          </div>
        </div>

      </div>
      {/* references */}
      <div className='flex justify-between items-center  mt-[100px]'>
        <img src = 'images/ref1.png' className='w-[150px]' />
        <img src = 'images/ref2.png' className='w-[150px]' />
        <img src = 'images/ref3.png' className='w-[150px]' />
        <img src = 'images/ref4.png' className='w-[150px] h-[30px]' />
        <img src = 'images/ref5.png' className='w-[150px] h-[20px]' />
      </div>

      <div className='py-[60px] px-[120px] bg-complex'>
        
        <div className='items-center text-center'>
          <div className='text-[33px] leading-[54px] font-bold text-[#5E6282]'>
          Subscribe to get information, latest news and other interesting offers about Cobham
          </div>
          <div className='flex gap-4 justify-center mt-[80px]'>
            <input type='text' placeholder='Your email' className='rounded-[10px] p-[25px] w-[421px]' />
            <button className='rounded-[10px] py-[25px] px-[50px] text-white bg-[#D85950]'>Subscribe</button>
          </div> 
        </div>
      </div>
    </div>
  )
}
