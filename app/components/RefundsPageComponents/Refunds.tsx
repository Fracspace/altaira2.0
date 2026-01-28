"use client"
import Link from "next/link"

const Refunds = () => {
    return (
        <div className='min-h-screen'>
            <div className='flex flex-col gap-5 p-10'>
                <h2 className='font-montserrat text-gray-500 text-xl md:text-4xl pt-20'>Refund & Cancellation Policy</h2>
                <h2 className='font-poppins text-lg'><span className='font-bold'>Last Updated:</span> December 2025</h2>
                <p className='font-poppins text-base leading-relaxed'>This Refund & Cancellation Policy applies to all online and offline bookings, enquiries, and payments made towards the Altaira Project.</p>
                 <div className="text-gray-600 flex flex-col gap-5">
                    <h2 className=" text-3xl">1. Definitions</h2>
                    <ul className="list-disc md:pl-10">
                        <li><b>Booking Amount / Token</b> – A preliminary payment made to reserve interest in a unit or fractional share.</li>
                        <li><b>Agreement</b> – The legally binding purchase or participation agreement executed between the Customer and the Developer.</li>
                        <li><b>Customer</b> – Any individual or entity making a booking or payment toward the Project.</li>
                    </ul>
                    <p className="font-inter text-base leading-relaxed">All sales shall be governed solely by the executed legal agreement between the customer and the developer.</p>
                </div>

                <div className="text-gray-600 flex flex-col gap-5">
                    <h2 className=" text-3xl">2. General Conditions</h2>
                    <p className='font-poppins text-base leading-relaxed'>2.1 All bookings are provisional until accepted in writing by the Developer.</p>
                    <p className='font-poppins text-base leading-relaxed'>2.2 Booking Amounts are generally non-refundable, except as expressly provided below.</p>
                    <p className='font-poppins text-base leading-relaxed'>2.3 Refunds, where applicable, shall be processed only to the original payer's bank account.</p>
                </div>

                <div className="text-gray-600 flex flex-col gap-5">
                    <h2 className="text-3xl">3. Customer-Initiated Cancellation</h2>
                    <p className="font-inter text-lg font-medium leading-relaxed">A. BEFORE EXECUTION OF THE MAIN AGREEMENT</p>
                    
                    <ul className="list-disc md:pl-10">
                        <li className="font-bold">Cancellation within 7 days of booking:</li>
                        <li className="font-bold">Cancellation after 7 days but before 30 days:</li>
                        <li className="font-bold">Cancellation after 30 days but before Agreement.</li>
                    </ul>
                     <p className="font-inter text-lg font-medium leading-relaxed">B. AFTER EXECUTION OF THE MAIN AGREEMENT</p>
                    
                    <ul className="list-disc md:pl-10">
                        <li className="font-bold">Refunds or cancellations will be governed solely by the Agreement,</li>
                        <li className="font-bold">Booking Amount becomes non-refundable,</li>
                        <li className="font-bold">Any exit will depend on resale, transfer rules, and applicable fees stated in the Agreement.</li>
                    </ul>
                </div>

                <div className="text-gray-600 flex flex-col gap-5">
                    <h2 className=" text-3xl">4. Developer-Initiated Cancellation</h2>
                    <p className="font-inter text-base leading-relaxed">The Developer may cancel a booking if:</p>
 <ul className="list-disc md:pl-10">
                        <li>KYC/AML verification fails,</li>
                        <li>Payment defaults persist beyond permitted grace period,</li>
                        <li>False or misleading information is provided,</li>
                        <li>Legal/regulatory issues prevent continuation of the sale.</li>
                        
                    </ul>
                    <p>Refunds (if any) will be issued after deducting administrative costs already incurred.</p>
                </div>

                <div className="text-gray-600 flex flex-col gap-5">
                    <h2 className=" text-3xl">5. Refund Processing Timeline</h2>
                    <p className="font-inter text-base leading-relaxed">Eligible refunds will be processed within 30–60 working days from the date all required documentation is submitted and approved.</p>
                </div>

                <div className="text-gray-600 flex flex-col gap-5">
                    <h2 className="text-3xl">6. Currency & Bank Charges</h2>
<ul className="list-disc md:pl-10">
                        <li>For payments made in a foreign currency, refund amounts may vary due to exchange rate fluctuations, intermediary banking fees, or conversion charges.</li>
                        <li>The Customer bears all such charges.</li>
                        <li>The Developer’s obligation is limited to refunding the net amount actually received in its account.</li>
                    </ul>
                </div>

                <div className="text-gray-600 flex flex-col gap-5">
                    <h2 className="text-3xl">7. Failed or Duplicate Transactions</h2>
                    <p className="font-inter text-base leading-relaxed">In case of payment gateway failure or duplicate payments:</p>
                    <ul className="list-disc md:pl-10">
                        <li>The Customer must notify <span className="text-gray-500">altaira.lk@fracspace.com</span> with proof of transaction.</li>
                        <li>Refunds of duplicate or failed payments will be processed within <b>7–15 working days</b>, after bank confirmation.</li>
                    </ul>
                </div>

                <div className="text-gray-600 flex flex-col gap-5">
                    <h2 className="text-3xl">8. Non-Refundable Items</h2>
                    <ul className="list-disc md:pl-10">
                        <li>Convenience fees, processing charges, bank fees, and payment gateway fees.</li>
                        <li>Any optional add-ons, service fees, or administrative fees already incurred.</li>
                        <li>Taxes paid to government authorities (if non-recoverable)</li>
                    </ul>
                </div>

                {/* <div className="text-gray-600 flex flex-col gap-5">
                    <h2 className="text-3xl">9. Indemnification</h2>
                    <p className="font-inter text-base leading-relaxed">You agree to indemnify and hold harmless the Developer, its affiliates, partners, employees, agents and representatives against any claims, damages, losses, costs, or liabilities arising from your use of the Site or violation of these Terms.</p>
                </div>

                 <div className="text-gray-600 flex flex-col gap-5">
                    <h2 className="text-3xl">10. Amendments</h2>
                    <p className="font-inter text-base leading-relaxed">These Terms may be updated periodically. The updated version will be posted on the Site with a revised “Last Updated” date. Continued use of the Site constitutes acceptance of the revised Terms.</p>
                </div>

                  <div className="text-gray-600 flex flex-col gap-5">
                    <h2 className="text-3xl">11. Governing Law & Jurisdiction</h2>
                    <p className="font-inter text-base leading-relaxed">These Terms are governed by the laws of [Sri Lanka]. Any disputes shall be subject to the exclusive jurisdiction of the courts located in [Colombo/Sri Lanka], unless otherwise mandated by governing agreements.</p>
                </div> */}
            </div>
        </div>
    )
}

export default Refunds