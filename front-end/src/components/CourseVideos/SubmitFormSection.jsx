import React from 'react'
import SubmitForm from '../common/SubmitForm';


export default function SubmitFormSection() {

  return (
 <div className="relative py-20 rounded-[100px] -mt-22 border bg-white border-gray-200 overflow-hidden  z-20">
  <SubmitForm>
    {/* الزرار الإضافي اللي هيظهر تحت */}
    <button className="bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform">
      Subscribe to the course
    </button>
  </SubmitForm>
</div>
  );
}
  

