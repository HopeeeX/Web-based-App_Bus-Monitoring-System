import React from 'react'
import Search from '../../assets/icons/Search.png'
const DriverReports = () => {

  const getStatusBackgroundColor = (status) => {
    if (status === "Pending") {
      return "bg-[#FBFB79E0]";
    } else if (status === "Approved") {
      return "bg-[#77DD77E0]";
    }else if (status === "Unapproved") {
      return "bg-[#FF6961E0]";
    }
  };

  return (
    <div className='h-screen bg-gradient-to-b from-driverGradient-start to-driverGradient-end p-16 pb-10 flex flex-col gap-7' style={{ width: 'calc(100vw - 20rem)' }}>
      <div className="relative w-full max-w-xl self-end">
        <input
            type='text'
            placeholder='Search Bus Number'
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
              <th className="border-b border-gray-300 px-4 py-2">Bus Number</th>
              <th className="border-b border-gray-300 px-4 py-2">Report ID</th>
              <th className="border-b border-gray-300 px-4 py-2">Date Submitted</th>
              <th className="border-b border-gray-300 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Table rows */}
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2">123</td>
              <td className="px-4 py-2">RPT001</td>
              <td className="px-4 py-2">2023-04-20</td>
              <td className="px-4 py-2">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium  ${getStatusBackgroundColor("Pending")}`}> Pending
                </span>
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2">456</td>
              <td className="px-4 py-2">RPT002</td>
              <td className="px-4 py-2">2023-04-19</td>
              <td className="px-4 py-2">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusBackgroundColor("Approved")}`}> Approved
                </span>
              </td>
            </tr>
            
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2">789</td>
              <td className="px-4 py-2">RPT003</td>
              <td className="px-4 py-2">2023-04-18</td>
              <td className="px-4 py-2">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusBackgroundColor("Unapproved")}`}> Unaproved
                </span>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
    </div>
  )
}

export default DriverReports