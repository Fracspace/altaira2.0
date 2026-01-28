"use client"
import Link from "next/link"

const PrivacyPolicy = () => {
    return (
        <div className='min-h-screen'>
            <div className='flex flex-col gap-5 p-10'>
                <h2 className='font-montserrat  text-center font-bold text-xl md:text-2xl pt-20'>Privacy Policy</h2>
                <h2 className='font-poppins  text-lg'><span className='font-bold'>Last Updated:</span> December 2025</h2>
                <p className='font-poppins  text-base leading-relaxed '>We are committed to protecting your personal information and respecting your privacy. This Privacy Policy explains how we collect, use, store, share, and protect your data when you interact with the Altaira website, booking forms, marketing campaigns, or support channels.</p>
                <div className="flex flex-col gap-8">
                    <ol className="list-decimal pl-5 space-y-10">

                        {/* 1 */}
                        <li className="font-semibold">
                            Information We Collect

                            <div className="pl-5 mt-4 space-y-6 font-normal">

                                <div>
                                    <p className="font-bold">Personal Information:</p>
                                    <ul className="list-disc pl-5 space-y-1 mt-2">
                                        <li>Full name</li>
                                        <li>Email address</li>
                                        <li>Phone number</li>
                                        <li>Nationality & date of birth</li>
                                        <li>Residential address</li>
                                        <li>KYC documents (passport, ID, PAN, etc.)</li>
                                        <li>Tax identifiers and residency information</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-bold">Transaction Information:</p>
                                    <ul className="list-disc pl-5 space-y-1 mt-2">
                                        <li>Bank details (where required for payments/refunds)</li>
                                        <li>Payment history and receipts</li>
                                        <li>FX remittance details</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-bold">Technical Data:</p>
                                    <ul className="list-disc pl-5 space-y-1 mt-2">
                                        <li>IP address</li>
                                        <li>Device type, operating system, browser type</li>
                                        <li>Cookies and analytical tracking data</li>
                                    </ul>
                                </div>

                            </div>
                        </li>

                        {/* 2 */}
                        <li className="font-semibold">
                            How We Collect Information
                            <ul className="list-disc pl-5 space-y-2 mt-4 font-normal">
                                <li>Website forms</li>
                                <li>WhatsApp / Email communication</li>
                                <li>Phone calls</li>
                                <li>Online payment submissions</li>
                                <li>Cookies and analytics tools</li>
                                <li>Offline booking forms and submissions</li>
                                <li>Events, presentations, or expos where you provide your details</li>
                            </ul>
                        </li>

                        {/* 3 */}
                        <li className="font-semibold">
                            Purpose of Data Collection
                            <ul className="list-disc pl-5 space-y-2 mt-4 font-normal">
                                <li>Process enquiries, bookings, payments, and agreements</li>
                                <li>Verify identity for KYC / AML compliance</li>
                                <li>Send project updates, statements, and legally required notices</li>
                                <li>Provide customer support and respond to queries</li>
                                <li>Improve our website, marketing, and customer experience</li>
                                <li>Share promotional information (you may opt out anytime)</li>
                                <li>Maintain statutory and regulatory compliance in Sri Lanka and internationally</li>
                            </ul>
                        </li>

                        {/* 4 */}
                        <li className="font-semibold">
                            Sharing of Information
                            <ul className="list-disc pl-5 space-y-2 mt-4 font-normal">
                                <li>Group companies, SPVs, and affiliate entities related to Altaira</li>
                                <li>Banks, payment gateways, and remittance providers</li>
                                <li>Lawyers, auditors, consultants, and regulatory authorities</li>
                                <li>Technology and CRM vendors supporting our operations</li>
                                <li>Government bodies when required by law</li>
                            </ul>
                            <p className="mt-4 font-bold">
                                We do not sell your data to unaffiliated third parties.
                            </p>
                        </li>

                        {/* 5 */}
                        <li className="font-semibold">
                            Data Retention
                            <ul className="list-disc pl-5 space-y-2 mt-4 font-normal">
                                <li>Fulfil the purpose of collection</li>
                                <li>Maintain legal, tax, and regulatory compliance</li>
                                <li>Prevent fraud or misuse</li>
                                <li>Maintain project transaction history</li>
                            </ul>
                        </li>

                        {/* 6 */}
                        <li className="font-semibold">
                            Your Rights
                            <ul className="list-disc pl-5 space-y-2 mt-4 font-normal">
                                <li>Access to your personal data</li>
                                <li>Correction of inaccurate data</li>
                                <li>Deletion or restriction of certain data</li>
                                <li>Opt-out from marketing communication</li>
                            </ul>
                            <p className="mt-4 font-normal">
                                To exercise these rights, write to{" "}
                                <Link href="mailto:altaira.lk@fracspace.com" className="underline text-blue-600">
                                    altaira.lk@fracspace.com
                                </Link>
                            </p>
                        </li>

                        {/* 7 */}
                        <li className="font-semibold">
                            Data Security
                            <p className="mt-4 font-normal leading-relaxed">
                                We implement reasonable technical and administrative measures to safeguard your data from
                                unauthorised access, disclosure, alteration, or destruction. However, no system is completely
                                secure.
                            </p>
                        </li>

                        {/* 8 */}
                        <li className="font-semibold">
                            Cookies
                            <ul className="list-disc pl-5 space-y-2 mt-4 font-normal">
                                <li>Enhance user experience</li>
                                <li>Track website performance and analytics</li>
                                <li>Remember user session preferences</li>
                            </ul>
                            <p className="mt-4 font-normal">
                                You may disable cookies in your browser settings, but the Site may not function optimally.
                            </p>
                        </li>

                        {/* 9 */}
                        <li className="font-semibold">
                            International Users
                            <p className="mt-4 font-normal leading-relaxed">
                                Users accessing the site from outside Sri Lanka acknowledge that their data may be stored,
                                processed, or transferred as required for project operations.
                            </p>
                        </li>

                        {/* 10 */}
                        <li className="font-semibold">
                            Changes to This Policy
                            <p className="mt-4 font-normal">
                                We may update this Privacy Policy periodically. The latest version will always be posted on
                                this page.
                            </p>
                        </li>

                        {/* 11 */}
                        <li className="font-semibold">
                            Contact Us
                            <div className="mt-4 font-normal space-y-1">
                                <p>
                                    <span className="font-bold">Email:{" "}</span>
                                    <Link href="mailto:altaira.lk@fracspace.com" className="underline text-blue-600">
                                        altaira.lk@fracspace.com
                                    </Link>
                                </p>
                                <p><span className="font-bold">Company:</span> Altaira by Fracspace</p>
                                <p className="font-bold">Address:</p>
                                <p>
                                    No. 59, Gregorys Road <br />
                                    Colombo 07 <br />
                                    Western Province <br />
                                    Sri Lanka
                                </p>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy