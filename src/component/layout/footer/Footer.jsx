import { Button } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div>
        <div className='border-t border-grey-200 xs:mt-4 md:mt-0 absolute bottom-0 left-0 w-full'>
            <div className='container flex flex-col'>
                <div className='flex flex-col rounded-lg bg-gray-100 m-3 p-4 md:mx-0'>
                     <div className='flex items-center justify-between'>
                        <h1 className='font-bold text-lg text-gray-800'>دانلود اپلیکیشن اُکالا</h1>
                        <p className='font-medium text-sm text-[#545454] hidden md:block'>
                        با دانلود اپلیکیشن اُکالا برای گوشی‌های  اندروید و آیفون (iOS)، آسان تر خرید کنید و از تخفیف‌ها استفاده کنید
                        </p>
                        <Button sx={{backgroundColor:"#f01436",color:"#fff",fontSize:"14px",borderRadius:"10px",boxShadow:"none",padding:"4px 12px","&:hover":{backgroundColor:"#f01436"}}} variant="contained">دریافت اپلیکیشن</Button>
                     </div>
                </div>
                <div className='flex flex-row justify-between border-b border-gray-50 py-8'>
                    <ul className='text-start'>
                        <li className='mb-3'>
                            <p className='text-black text-base font-medium'>بلاگ</p>
                        </li>
                        <li>
                            <p className='text-black text-base font-medium'>اُکالارنک</p>
                        </li>
                        <li className='mt-3'>
                            <p className='text-black text-base font-medium'>فرصت های شغلی</p>
                        </li>
                    </ul>
                    <div className='flex flex-col text-start'>
                    <h1 className='font-medium'>تماس با ما</h1>
                    <p className='font-normal text-sm my-3 text-gray-600'>
                    تماس با پشتیبانی :
                    <span className='text-teal-400 font-medium mr-1'>1536</span>
                    </p>
                    <div className='grid grid-cols-4'> 
                    <div className='h-6 w-6 flex items-center justify-center ml-4'>
                            <GroupWorkIcon sx={{color:"#686868",width:"20px",height:"20px"}}/>
                        </div>
                       
                        <div className='h-6 w-6 flex items-center justify-center ml-4'>
                            <TelegramIcon sx={{color:"#686868",width:"20px",height:"20px"}}/>
                        </div>
                        <div className='h-6 w-6 flex items-center justify-center ml-4'>
                            <TwitterIcon sx={{color:"#686868",width:"20px",height:"20px"}}/>
                        </div>
                        <div className='h-6 w-6 flex items-center justify-center ml-4'>
                            <InstagramIcon sx={{color:"#686868",width:"20px",height:"20px"}}/>
                        </div>       
                    </div>
                   
                    </div>
                     <div className='flex flex-col text-start'>
                        <h1 className='font-medium mb-3'>نماد‌های اعتماد</h1>
                        <div className='flex py-2'>
                            <div className='flex justify-center items-center border rounded-lg border-gray-200 ml-3 p-1 h-[60px] w-[60px]'>
                                <img src="https://logo.samandehi.ir/logo.aspx?id=105734&p=nbpdlymaujynyndtqftishwl" alt="" className='h-[40px] w-[40px] object-cover'/>
                            </div>
                            <div className='flex justify-center items-center border rounded-lg border-gray-200 ml-3 p-1 h-[60px] w-[60px]'>
                                <img src="https://cdn.okala.com/unsigned/rs:fill/size:0:0/plain/s3:/cdn/static/ecunionLogo.png" alt="" className='h-[40px] w-[40px] object-cover'/>
                            </div>
                            <div className='flex justify-center items-center border rounded-lg border-gray-200 ml-3 p-1 h-[60px] w-[60px]'>
                                <img src="https://cdn.okala.com/unsigned/rs:fill/size:0:0/plain/s3:/cdn/static/ecunionLogo.png" alt="" className='h-[40px] w-[40px] object-cover'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center py-4'>
                    <img src="https://cdn.okala.com/unsigned/rs:fill/size:0:0/plain/s3:/cdn/static/Okala-logo-grey.svg" alt="" className='h-[16px] w-[24px] object-cover'/>
                    <p className='text-gray-500 text-sm font-normal'>
                    © کلیه حقوق مادی و معنوی این سایت محفوظ و متعلق به شرکت توسعه تجارت الکترونیک کوروش است.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer