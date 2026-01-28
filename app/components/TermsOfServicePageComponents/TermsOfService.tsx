"use client"
import Link from "next/link"

const TermsOfService = () => {
    return (
        <div className='min-h-screen'>
            <div className='flex flex-col gap-5 p-10'>
                <h2 className='font-montserrat  text-center font-bold text-xl md:text-2xl pt-20'>Terms and Conditions</h2>
                <h2 className='font-inter text-lg'><span className='font-semibold'>Last Updated:</span> December 2025</h2>
                <p className='font-inter text-gray-600 text-base leading-relaxed '>Welcome to the official website of <b>Altaira – Above The Clouds</b> (“Altaira”, “Project”, “We”, “Us”, “Our”). By accessing, browsing, filling forms, downloading material, or making any transaction on this website (“Site”), you (“User”, “Customer”, “Visitor”) agree to be bound by the following Terms & Conditions. If you do not agree to these Terms, please discontinue use of the Site.</p>

                <div className="text-gray-600 flex flex-col gap-5">
                    <h2 className=" text-3xl">1. Purpose of the Website</h2>
                    <p className="font-inter text-base leading-relaxed">1.1 The website provides general information, conceptual visuals, investment options, project descriptions, and booking facilities for the Altaira – Above The Clouds development.</p>
                    <p className="font-inter text-base leading-relaxed">1.2 All visuals, renders, floor plans, videos, specifications and written content are illustrative and conceptual. Actual development may vary based on technical, regulatory, design and execution requirements.</p>
                    <p>1.3 Nothing contained on this website constitutes:</p>
                    <ul className="list-disc md:pl-10">
                        <li>a legally binding offer,</li>
                        <li>a contract of sale,</li>
                        <li>an assurance of returns, or</li>
                        <li>a guarantee of timelines, features, or specifications.</li>
                    </ul>
                    <p className="font-inter text-base leading-relaxed">All sales shall be governed solely by the executed legal agreement between the customer and the developer.</p>
                </div>

                <div className="text-gray-600 flex flex-col gap-5">
                    <h2 className=" text-3xl">2. Eligibility to Use</h2>
                    <p>By using this Site, you confirm that:</p>
                    <ul className="list-disc md:pl-10">
                        <li>You are at least 18 years of age,</li>
                        <li>You are legally capable of entering binding contracts,</li>
                        <li>You are not barred under any applicable laws from accessing or investing in real estate/hospitality products.</li>
                    </ul>
                </div>

                <div className="text-gray-600 flex flex-col gap-5">
                    <h2 className=" text-3xl">3. Intellectual Property Rights</h2>
                    <p className="font-inter text-base leading-relaxed">3.1  All content on the Site—including logos, brand elements, design layouts, images, videos, renders, brochures, articles, text, icons, and software—is the exclusive intellectual property of [Company Name].</p>
                    <p className="font-inter text-base leading-relaxed">3.2 Users are prohibited from:</p>
                    <ul className="list-disc md:pl-10">
                        <li>copying, distributing, modifying or reproducing Site content,</li>
                        <li>uploading Site content elsewhere without written permission,</li>
                        <li>misusing trademarks or branding related to Altaira.</li>
                    </ul>
                </div>

                <div className="text-gray-600 flex flex-col gap-5">
                    <h2 className=" text-3xl">4. Accuracy of Information</h2>
                    <p className="font-inter text-base leading-relaxed">4.1 While we strive for accuracy, all information on the Site is subject to change without notice.</p>
                    <p className="font-inter text-base leading-relaxed">4.2 Pricing, availability, payment plans, unit details and timelines are indicative and may be updated at the Developer’s discretion.</p>
                </div>

                <div className="text-gray-600 flex flex-col gap-5">
                    <h2 className=" text-3xl">5. Third-Party Links</h2>
                    <p className="font-inter text-base leading-relaxed">The Site may contain links to third-party websites for convenience (e.g., bank payment portals, social media, government authorities). We do not control or endorse the content of those websites and shall not be liable for any losses arising from their use.</p>
                </div>


                <div className="text-gray-600 flex flex-col gap-5">
                    <h2 className="text-3xl">6. Online Booking & Payments</h2>
                    <p className="font-inter text-base leading-relaxed">6.1 Online form submissions and payments constitute an expression of interest, not a confirmed purchase.</p>
                    <p className="font-inter text-base leading-relaxed">6.2 Confirmation of booking is subject to:</p>
                    <ul className="list-disc md:pl-10">
                        <li>KYC/AML clearance,</li>
                        <li>Acceptance by the Developer,</li>
                        <li>Execution of the relevant legal agreement,</li>
                        <li>Compliance with payment schedules.</li>
                    </ul>
                    <p className="font-inter text-base leading-relaxed">6.3 The Developer is not responsible for:</p>
                    <ul className="list-disc md:pl-10">
                        <li>failed transactions,</li>
                        <li>duplicate payments,</li>
                        <li>payment gateway errors,</li>
                        <li>delays caused by banks or intermediaries.</li>
                    </ul>
                     <p className="font-inter text-base leading-relaxed">Refunds related to failed transactions will be processed as per the Refund Policy.</p>
                </div>


                <div className="text-gray-600 flex flex-col gap-5">
                    <h2 className="text-3xl">7. Prohibited Activities</h2>
                    <p className="font-inter text-base leading-relaxed">Users shall not:</p>
                    <ul className="list-disc md:pl-10">
                        <li>attempt to hack, disrupt, inject malware, or interfere with Site operations,</li>
                        <li>engage in unauthorised scraping or data harvesting,</li>
                        <li>impersonate another individual or submit fraudulent information,</li>
                        <li>use the Site in a way that violates applicable laws.</li>
                    </ul>
                </div>

                <div className="text-gray-600 flex flex-col gap-5">
                    <h2 className="text-3xl">8. Limitation of Liability</h2>
                    <p className="font-inter text-base leading-relaxed">To the fullest extent permitted by law:</p>
                    <ul className="list-disc md:pl-10">
                        <li>We shall not be liable for any indirect, incidental, consequential, or punitive damages arising from the use of this Site.</li>
                        <li>Our total liability for any claim relating to this Site shall not exceed the total amount, if any, paid by the User for accessing the Site or making a booking online.</li>
                    </ul>
                </div>

                <div className="text-gray-600 flex flex-col gap-5">
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
                </div>
            </div>
        </div>
    )
}

export default TermsOfService