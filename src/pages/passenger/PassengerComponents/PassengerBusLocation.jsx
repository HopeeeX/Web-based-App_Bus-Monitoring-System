import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
const PassengerBusLocation = () => {
  return (
    <div className='bg-passengerBusLocation flex flex-col gap-6 lg:flex-row font-inter px-3 lg:px-32 pt-10 pb-16 justify-between'>
        <div className='flex flex-col gap-4'>
            <h3 className='font-medium text-center  text-2xl md:text-3xl lg:text-[32px] text-[#303030]'>Bus Location Update</h3>
            <div className='lg:w-[40vw] xl:w-[628px] h-96 lg:h-[451px] border-white border-8 rounded-lg'>
                <MapContainer center={[14.512483419936494, 121.01646945941637]} zoom={13} scrollWheelZoom={true} zoomControl={false} className='z-0 h-full w-full'>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[14.512483419936494, 121.01646945941637]}>
                        <Popup>
                            Hi! Annyeonghaseyo.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <div className='flex flex-col gap-3 lg:gap-6 xl:gap-8 text-white text-lg lg:text-xl xl:text-2xl justify-center'>
           <div className='bg-primary/60 px-14 lg:px-18 xl:px-20 py-4 lg:py-6 xl:py-8 rounded-xl text-center'>
                <h4 className='font-bold lg:mb-3 xl:mb-5'>Bus Details</h4>
                <h4 className='font-medium lg:mb-3 xl:mb-5'>Bus Number: 00001</h4>
                <h4 className='font-medium'>Plate Number: ABC1234</h4>
           </div>
           <div className='bg-primary/60 px-14 lg:px-18 xl:px-20 py-4 lg:py-6 xl:py-8 rounded-xl text-center'>
                <h4 className='font-bold lg:mb-3 xl:mb-5'>Driver Details</h4>
                <h4 className='font-medium'>Driver Name: Kyle Mabuna</h4>
           </div>
        </div>
    </div>
  )
}

export default PassengerBusLocation
