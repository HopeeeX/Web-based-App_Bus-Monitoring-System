import React from 'react'
import Search from '../../assets/icons/Search.png'
const DriverTrips = () => {

  return (
    <div className='h-screen bg-gradient-to-b from-driverGradient-start to-driverGradient-end p-16 pb-10 flex flex-col gap-7' style={{ width: 'calc(100vw - 20rem)' }}>
      <div className="relative w-full max-w-xl self-end">
        <input
            type='text'
            placeholder='Search Trip ID'
            alt='Search Bus Number'
            className='border bg-primary/80 rounded-xl px-14 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent h-10 w-full font-inter align-middle text-white/70 text-sm'
          />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <img src={Search} alt='search icon'></img> {/* Replace with your desired icon */}
        </div>
      </div>

      <div className="w-full h-full rounded-lg bg-white">
        <table className="w-full text-center font-inter font-semibold text-base text-tableFontColor">
          <thead className='text-secondary'>
            <tr>
              <th className="border-b border-gray-300 px-4 py-2">Trip ID</th>
              <th className="border-b border-gray-300 px-4 py-2">Time Started</th>
              <th className="border-b border-gray-300 px-4 py-2">Time Ended</th>
              <th className="border-b border-gray-300 px-4 py-2">Date</th>
              <th className="border-b border-gray-300 px-4 py-2">Route</th>
            </tr>
          </thead>
          <tbody>
            {/* Table rows */}
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2">T000001</td>
              <td className="px-4 py-2">00:09:00</td>
              <td className="px-4 py-2">00:11:00</td>
              <td className="px-4 py-2">2023-04-19</td>
              <td className="px-4 py-2">Manila - Alabang</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2">T000002</td>
              <td className="px-4 py-2">00:12:00</td>
              <td className="px-4 py-2">00:15:00</td>
              <td className="px-4 py-2">2023-04-18</td>
              <td className="px-4 py-2">Alabang - Manila</td>
            </tr>
            
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2">T000003</td>
              <td className="px-4 py-2">00:14:00</td>
              <td className="px-4 py-2">00:19:00</td>
              <td className="px-4 py-2">2023-04-17</td>
              <td className="px-4 py-2">Alabang - Quezon</td>
            </tr>
          </tbody>
        </table>
    </div>
    </div>
  )
}

export default DriverTrips