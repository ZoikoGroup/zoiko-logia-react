import Image from "next/image";
import Link from "next/link";

// Helper components for repeated patterns

function SectionDivider() {
  return <div className="h-[1px] w-full bg-slate-200" />;
}

export default function ProviderDueDiligencePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#071a33] selection:bg-[#00bfa6]/20">
      <main className="w-full">
        
        {/* HERO SECTION */}
        <section className="relative bg-[#0A1628] py-20 px-6 md:py-[120px] md:px-12 lg:px-24 xl:px-[120px] overflow-hidden min-h-[500px]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/provider-due-diligence/hero-bg.png" 
              alt="Hero Background" 
              fill 
              className="object-cover opacity-30 object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/90 to-transparent"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-[1200px] flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Content */}
            <div className="flex-1 flex flex-col gap-6 lg:max-w-[600px]">
              <div className="flex items-center gap-2">
                <div className="h-[2px] w-4 bg-[#00bfa6]" />
                <span className="text-[11.5px] font-bold uppercase tracking-[0.15em] text-[#00bfa6]">
                  PROVIDER DUE DILIGENCE
                </span>
              </div>
              
              <h1 className="font-serif text-[32px] font-medium leading-[41px] tracking-tight text-white w-full max-w-[491px]">
                Evaluate the provider with source <br /> context intact.
              </h1>
              
              <p className="text-[15.5px] leading-[1.6] text-[#8b93a0] max-w-[540px]">
                Review approved provider information, evidence availability, ownership, currentness, limitations, and due-diligence paths — without turning missing information into assumptions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <button suppressHydrationWarning className="bg-[#f59a23] text-[#071a33] text-[14px] font-bold px-7 py-3.5 rounded-[8px] shadow hover:bg-[#e59819] transition-colors">
                  Explore Provider Profile
                </button>
                <button suppressHydrationWarning className="bg-transparent border border-[#2b3a50] text-white text-[14px] font-bold px-7 py-3.5 rounded-[8px] hover:bg-white/5 transition-colors">
                  View Evidence Availability
                </button>
              </div>
              
              <p className="text-[12px] leading-[1.6] text-[#5c6672] mt-4 max-w-[500px]">
                Provider facts render only when source-approved. Restricted, unanswered, not-published, and not-applicable states remain explicit — never inferred.
              </p>
            </div>

            {/* Right Content - Visual Example Cards */}
            <div className="flex-1 w-full flex flex-col gap-5 items-start lg:items-end">
              
              {/* Card 1 */}
              <div className="w-full max-w-[551px] h-[91px] bg-[#0A1628]/90 backdrop-blur-md border border-[#00bfa6]/28 rounded-[8px] p-4 flex flex-col justify-between shadow-2xl">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#8b93a0]">PROVIDER RECORD A</span>
                  <span className="bg-[#00bfa6]/10 text-[#00bfa6] text-[9px] font-bold uppercase px-3 py-1 rounded-full">CURRENT</span>
                </div>
                
                <div className="flex flex-nowrap items-center gap-3 overflow-hidden">
                  <div className="flex items-center gap-2 bg-white/[0.06] border border-[#00bfa6]/[0.22] px-3 py-1.5 rounded-full shrink-0">
                    <div className="w-[5px] h-[5px] rounded-full bg-[#00bfa6]"></div>
                    <span className="text-[11px] text-[#8b93a0] whitespace-nowrap">Corporate Identity</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/[0.06] border border-[#00bfa6]/[0.22] px-3 py-1.5 rounded-full shrink-0">
                    <div className="w-[5px] h-[5px] rounded-full bg-[#f59a23]"></div>
                    <span className="text-[11px] text-[#8b93a0] whitespace-nowrap">Compliance</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/[0.06] border border-[#00bfa6]/[0.22] px-3 py-1.5 rounded-full shrink-0">
                    <div className="w-[5px] h-[5px] rounded-full bg-[#00bfa6]"></div>
                    <span className="text-[11px] text-[#8b93a0] whitespace-nowrap">Privacy & Security</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/[0.06] border border-[#00bfa6]/[0.22] px-3 py-1.5 rounded-full shrink-0">
                    <div className="w-[5px] h-[5px] rounded-full bg-[#5c6672]"></div>
                    <span className="text-[11px] text-[#8b93a0] whitespace-nowrap">Financial</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-full max-w-[551px] h-[91px] bg-[#0A1628]/90 backdrop-blur-md border border-[#00bfa6]/28 rounded-[8px] p-4 flex flex-col justify-between shadow-2xl">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#8b93a0]">EVIDENCE CATEGORY</span>
                  <span className="bg-[#f59a23]/10 text-[#d97f0e] text-[9px] font-bold uppercase px-3 py-1 rounded-full">AVAILABLE BY REQUEST</span>
                </div>
                
                <div className="flex flex-nowrap items-center gap-3 overflow-hidden">
                  <div className="flex items-center gap-2 bg-white/[0.06] border border-[#00bfa6]/[0.22] px-3 py-1.5 rounded-full shrink-0">
                    <div className="w-[5px] h-[5px] rounded-full bg-[#f59a23]"></div>
                    <span className="text-[11px] text-[#8b93a0] whitespace-nowrap">Open question — clarification needed</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
        {/* 1. WHO EVALUATES PROVIDERS HERE */}
        <section className="bg-white py-16 px-6 md:px-12 lg:px-24 xl:px-[120px] flex justify-center w-full">
            <div className="w-[1200px] max-w-[1200px] px-8 inline-flex flex-col justify-start items-start gap-7">
                <div className="w-[700px] max-w-[700px] pt-1.5 flex flex-col justify-start items-start gap-3">
                    <div className="inline-flex justify-start items-center gap-2">
                        <div className="w-4 h-0.5 bg-amber-600 rounded-xs" />
                        <div className="justify-center text-amber-600 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">Who Uses This Page</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="self-stretch justify-center text-[#0A1628] text-2xl font-semibold font-['Source_Serif_4'] leading-8">Every evaluator has a different job to do here.</div>
                    </div>
                </div>
                <div className="self-stretch inline-flex justify-center items-start gap-3.5">
                    <div className="w-[177px] h-[277px] shrink-0 bg-white rounded-xl border border-[#e3d9c2] inline-flex flex-col justify-start items-start overflow-hidden shadow-sm">
                        <div className="self-stretch flex flex-col justify-center items-start overflow-hidden">
                            <div className="self-stretch h-44 relative bg-slate-50">
                                <Image src="/images/provider-due-diligence/procurement-reviewer.png" alt="Procurement" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="self-stretch px-3 py-3 flex flex-col justify-start items-start gap-[3px]">
                            <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="self-stretch justify-center text-color-azure-11 text-xs font-bold font-['Inter'] leading-4">Procurement / Vendor Risk</div>
                            </div>
                            <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="self-stretch justify-center text-gray-500 text-[10.30px] font-normal font-['Inter'] leading-4">Readiness, evidence, and<br/>unanswered questions.</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[177px] h-[277px] shrink-0 bg-white rounded-xl border border-[#e3d9c2] inline-flex flex-col justify-start items-start overflow-hidden shadow-sm">
                        <div className="self-stretch flex flex-col justify-center items-start overflow-hidden">
                            <div className="self-stretch h-44 relative bg-slate-50">
                                <Image src="/images/provider-due-diligence/security-reviewer.png" alt="Security" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="self-stretch px-3 py-3 flex flex-col justify-start items-start gap-[2.40px]">
                            <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="self-stretch justify-center text-color-azure-11 text-xs font-bold font-['Inter'] leading-4">Security / Privacy<br/>Reviewer</div>
                            </div>
                            <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="self-stretch justify-center text-gray-500 text-[10.30px] font-normal font-['Inter'] leading-4">Authoritative security<br/>information and restricted<br/>evidence.</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[177px] h-[277px] shrink-0 bg-white rounded-xl border border-[#e3d9c2] inline-flex flex-col justify-start items-start overflow-hidden shadow-sm">
                        <div className="self-stretch flex flex-col justify-center items-start overflow-hidden">
                            <div className="self-stretch h-44 relative bg-slate-50">
                                <Image src="/images/provider-due-diligence/compliance-reviewer.png" alt="Compliance" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="self-stretch px-3 py-3 flex flex-col justify-start items-start gap-[3px]">
                            <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="self-stretch justify-center text-color-azure-11 text-xs font-bold font-['Inter'] leading-4">Compliance / Legal</div>
                            </div>
                            <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="self-stretch justify-center text-gray-500 text-[10.30px] font-normal font-['Inter'] leading-4">Assurance, regulatory, and<br/>legal boundary validation.</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[177px] h-[277px] shrink-0 bg-white rounded-xl border border-[#e3d9c2] inline-flex flex-col justify-start items-start overflow-hidden shadow-sm">
                        <div className="self-stretch flex flex-col justify-center items-start overflow-hidden">
                            <div className="self-stretch h-44 relative bg-slate-50">
                                <Image src="/images/provider-due-diligence/finance-reviewer.png" alt="Finance" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="self-stretch px-3 py-3 flex flex-col justify-start items-start gap-[3px]">
                            <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="self-stretch justify-center text-color-azure-11 text-xs font-bold font-['Inter'] leading-4">Finance Evaluator</div>
                            </div>
                            <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="self-stretch justify-center text-gray-500 text-[10.30px] font-normal font-['Inter'] leading-4">Provider stability information<br/>only where approved.</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[177px] h-[277px] shrink-0 bg-white rounded-xl border border-[#e3d9c2] inline-flex flex-col justify-start items-start overflow-hidden shadow-sm">
                        <div className="self-stretch flex flex-col justify-center items-start overflow-hidden">
                            <div className="self-stretch h-44 relative bg-slate-50">
                                <Image src="/images/provider-due-diligence/it-architecture-reviewer.png" alt="IT" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="self-stretch px-3 py-3 flex flex-col justify-start items-start gap-[3px]">
                            <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="self-stretch justify-center text-color-azure-11 text-xs font-bold font-['Inter'] leading-4">IT / Architecture</div>
                            </div>
                            <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="self-stretch justify-center text-gray-500 text-[10.30px] font-normal font-['Inter'] leading-4">Technical interfaces and<br/>operational dependencies.</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[177px] h-[277px] shrink-0 bg-white rounded-xl border border-[#e3d9c2] inline-flex flex-col justify-start items-start overflow-hidden shadow-sm">
                        <div className="self-stretch flex flex-col justify-center items-start overflow-hidden">
                            <div className="self-stretch h-44 relative bg-slate-50">
                                <Image src="/images/provider-due-diligence/executive-sponsor.png" alt="Executive Sponsor" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="self-stretch px-3 py-3 flex flex-col justify-start items-start gap-[3px]">
                            <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="self-stretch justify-center text-color-azure-11 text-xs font-bold font-['Inter'] leading-4">Executive Sponsor</div>
                            </div>
                            <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="self-stretch justify-center text-gray-500 text-[10.30px] font-normal font-['Inter'] leading-4">Material open questions and<br/>evaluation readiness.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <SectionDivider />

        {/* 2. DUE-DILIGENCE MODEL */}
        <section className="bg-[#ece5d3] py-16 px-6 md:px-12 lg:px-24 xl:px-[120px] flex justify-center w-full">
            <div className="w-[1200px] max-w-[1200px] px-8 inline-flex flex-col justify-start items-start gap-7">
                <div className="w-[700px] max-w-[700px] pt-1.5 flex flex-col justify-start items-start gap-3">
                    <div className="inline-flex justify-start items-center gap-2">
                        <div className="w-4 h-0.5 bg-amber-600 rounded-xs" />
                        <div className="justify-center text-amber-600 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">HOW DUE DILIGENCE WORKS HERE</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="self-stretch justify-center text-[#0A1628] text-2xl font-semibold font-['Source_Serif_4'] leading-8">Six principles, not a scoring algorithm.</div>
                    </div>
                </div>
                
                <div className="flex flex-col gap-[15px]">
                    {/* Row 1 */}
                    <div className="flex items-start gap-[15px]">
                        <div className="w-[366px] h-[133px] bg-white rounded-xl border border-[#e3d9c2] p-[19px] flex flex-col gap-[7px]">
                            <h4 className="text-[#0A1628] text-[14px] font-bold font-['Inter']">Source-Owned</h4>
                            <p className="text-[#5c6672] text-[13px] font-normal leading-5">
                                Every answer belongs to an authoritative source<br />
                                or owner — shown with metadata and a deep link, not<br />
                                asserted in the abstract.
                            </p>
                        </div>
                        
                        <div className="w-[366px] h-[133px] bg-white rounded-xl border border-[#e3d9c2] p-[19px] flex flex-col gap-[7px]">
                            <h4 className="text-[#0A1628] text-[14px] font-bold font-['Inter']">Scoped</h4>
                            <p className="text-[#5c6672] text-[13px] font-normal leading-5">
                                Provider statements apply only to their defined<br />
                                scope — product, service, geography, or<br />
                                relationship — visible before you act on them.
                            </p>
                        </div>
                        
                        <div className="w-[366px] h-[133px] bg-white rounded-xl border border-[#e3d9c2] p-[19px] flex flex-col gap-[7px]">
                            <h4 className="text-[#0A1628] text-[14px] font-bold font-['Inter']">Current</h4>
                            <p className="text-[#5c6672] text-[13px] font-normal leading-5">
                                Review and version state is visible whenever it's<br />
                                decision-relevant — never a cosmetic "updated<br />
                                today."
                            </p>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex items-start gap-[15px]">
                        <div className="w-[366px] h-[133px] bg-white rounded-xl border border-[#e3d9c2] p-[19px] flex flex-col gap-[7px]">
                            <h4 className="text-[#0A1628] text-[14px] font-bold font-['Inter']">Access-Aware</h4>
                            <p className="text-[#5c6672] text-[13px] font-normal leading-5">
                                Public and controlled evidence are clearly<br />
                                differentiated with a state chip before you click, not<br />
                                after.
                            </p>
                        </div>
                        
                        <div className="w-[366px] h-[133px] bg-white rounded-xl border border-[#e3d9c2] p-[19px] flex flex-col gap-[7px]">
                            <h4 className="text-[#0A1628] text-[14px] font-bold font-['Inter']">Question-Aware</h4>
                            <p className="text-[#5c6672] text-[13px] font-normal leading-5">
                                Unanswered or clarification-needed items stay visible<br />
                                — they don't quietly disappear to make the page look<br />
                                more complete.
                            </p>
                        </div>
                        
                        <div className="w-[366px] h-[133px] bg-white rounded-xl border border-[#e3d9c2] p-[19px] flex flex-col gap-[7px]">
                            <h4 className="text-[#0A1628] text-[14px] font-bold font-['Inter']">No Hidden Scoring</h4>
                            <p className="text-[#5c6672] text-[13px] font-normal leading-5">
                                No generic "pass" or risk score without an approved<br />
                                methodology — domain status uses factual states<br />
                                only.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <SectionDivider />

        {/* 3. PROVIDER PROFILE */}
        <section className="bg-[#F7F3EA] py-10 px-6 md:px-12 lg:px-24 xl:px-[120px] flex justify-center w-full">
            <div className="w-[1200px] max-w-[1200px] px-8 flex flex-col gap-6 items-start">
                
                {/* Top Row: Info & Image */}
                <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8">
                    <div className="flex-1 max-w-[540px] flex flex-col gap-3">
                        <div className="inline-flex justify-start items-center gap-2">
                            <div className="w-4 h-0.5 bg-amber-600 rounded-xs" />
                            <div className="text-amber-600 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">PROVIDER PROFILE</div>
                        </div>
                        <h2 className="text-[#0A1628] text-2xl font-semibold font-['Source_Serif_4'] leading-8">
                            The anchor record for this evaluation.
                        </h2>
                        <p className="text-[#5c6672] text-[12.5px] font-normal font-['Inter'] leading-5">
                            This is meant to feel like a controlled enterprise record, not a corporate "About"<br />
                            page. Every field is optional until an approved source exists for it.
                        </p>
                    </div>

                    <div className="w-[544px] h-[435px] relative rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                        <Image 
                            src="/images/provider-due-diligence/team-reviewing-profile.png" 
                            alt="Provider Profile" 
                            fill 
                            className="object-cover object-top"
                        />
                    </div>
                </div>

                {/* Profile Card */}
                <div className="w-full max-w-[1128px] bg-white border border-[#e3d9c2] rounded-2xl p-[26px] flex flex-col gap-5 shadow-sm">
                    
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-0.5">
                            <h3 className="text-[16px] font-bold font-['Inter'] text-[#0A1628]">Zoiko Tech Inc. — Provider Record</h3>
                            <p className="text-[12px] font-normal font-['Inter'] text-[#8b93a0]">Publisher of ZoikoLogia™ with Kriton™</p>
                        </div>
                        <div className="bg-[#00bfa6]/10 px-3 py-1 rounded-[4px]">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#00bfa6] font-['Inter']">CURRENT</span>
                        </div>
                    </div>

                    {/* 9-box table: 1074px x 257px */}
                    <div className="w-full max-w-[1074px] h-[257px] bg-[#e3d9c2] border border-[#e3d9c2] rounded-xl overflow-hidden grid grid-cols-3 grid-rows-3 gap-[1px]">
                        {/* Cell 1 */}
                        <div className="bg-[#e3d9c2] px-4 py-2.5 flex flex-col justify-between">
                            <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#8b93a0] font-['Inter']">IDENTITY & RELATIONSHIP</span>
                            <span className="text-[11.5px] font-medium text-[#0A1628] font-['Inter']">Zoiko Tech Inc. — public brand ZoikoLogia™</span>
                        </div>

                        {/* Cell 2 */}
                        <div className="bg-[#e3d9c2] px-4 py-2.5 flex flex-col justify-between">
                            <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#8b93a0] font-['Inter']">OPERATIONAL FOOTPRINT</span>
                            <span className="text-[11.5px] font-medium text-[#0A1628] font-['Inter']">USA HQ: Sacramento, CA · EU Office: London, UK</span>
                        </div>

                        {/* Cell 3 */}
                        <div className="bg-[#e3d9c2] px-4 py-2.5 flex flex-col justify-between">
                            <div className="flex justify-between items-center">
                                <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#8b93a0] font-['Inter']">OWNERSHIP / GOVERNANCE</span>
                                <span className="text-[8.5px] font-bold uppercase tracking-wider text-[#8b93a0] font-['Inter']">SOURCE REQUIRED</span>
                            </div>
                            <span className="text-[11.5px] font-medium text-[#0A1628] font-['Inter']">Not currently published</span>
                        </div>

                        {/* Cell 4 */}
                        <div className="bg-[#e3d9c2] px-4 py-2.5 flex flex-col justify-between">
                            <div className="flex justify-between items-center">
                                <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#8b93a0] font-['Inter']">FINANCIAL / INSURANCE EVIDENCE</span>
                                <span className="text-[8.5px] font-bold uppercase tracking-wider text-[#8b93a0] font-['Inter']">SOURCE REQUIRED</span>
                            </div>
                            <span className="text-[11.5px] font-medium text-[#0A1628] font-['Inter']">Availability state only — no values published</span>
                        </div>

                        {/* Cell 5 */}
                        <div className="bg-[#e3d9c2] px-4 py-2.5 flex flex-col justify-between">
                            <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#8b93a0] font-['Inter']">TRUST & ASSURANCE</span>
                            <span className="text-[11.5px] font-medium text-[#0A1628] font-['Inter'] leading-tight">Routed to Compliance, Privacy & Security,<br/>Governance</span>
                        </div>

                        {/* Cell 6 */}
                        <div className="bg-[#e3d9c2] px-4 py-2.5 flex flex-col justify-between">
                            <div className="flex justify-between items-center">
                                <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#8b93a0] font-['Inter']">CONTINUITY / RESILIENCE</span>
                                <span className="text-[8.5px] font-bold uppercase tracking-wider text-[#8b93a0] font-['Inter']">SOURCE REQUIRED</span>
                            </div>
                            <span className="text-[11.5px] font-medium text-[#0A1628] font-['Inter']">Not currently published</span>
                        </div>

                        {/* Cell 7 */}
                        <div className="bg-[#e3d9c2] px-4 py-2.5 flex flex-col justify-between">
                            <div className="flex justify-between items-center">
                                <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#8b93a0] font-['Inter']">THIRD PARTIES / SUBPROCESSORS</span>
                                <span className="text-[8.5px] font-bold uppercase tracking-wider text-[#8b93a0] font-['Inter']">SOURCE REQUIRED</span>
                            </div>
                            <span className="text-[11.5px] font-medium text-[#0A1628] font-['Inter']">Not currently published</span>
                        </div>

                        {/* Cell 8 */}
                        <div className="bg-[#e3d9c2] px-4 py-2.5 flex flex-col justify-between">
                            <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#8b93a0] font-['Inter']">ACCESSIBILITY / TECHNICAL</span>
                            <span className="text-[11.5px] font-medium text-[#0A1628] font-['Inter']">Routed to Accessibility and API Reference</span>
                        </div>

                        {/* Cell 9 */}
                        <div className="bg-[#e3d9c2] px-4 py-2.5 flex flex-col justify-between">
                            <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#8b93a0] font-['Inter']">CURRENTNESS</span>
                            <span className="text-[11.5px] font-medium text-[#0A1628] font-['Inter']">Owner: Trust Team · Reviewed: Oct 2026</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <SectionDivider />

        {/* 4. EVALUATION DOMAINS */}
        <section className="bg-[#ece5d3] py-14 px-6 md:px-12 lg:px-24 xl:px-[120px] flex justify-center w-full">
            <div className="w-[1200px] max-w-[1200px] px-8 flex flex-col justify-start items-start gap-7">
                <div className="w-[700px] max-w-[700px] pt-1.5 flex flex-col justify-start items-start gap-3">
                    <div className="inline-flex justify-start items-center gap-2">
                        <div className="w-4 h-0.5 bg-amber-600 rounded-xs" />
                        <div className="text-amber-600 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">EVALUATION DOMAINS</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="self-stretch justify-center text-[#0A1628] text-2xl font-semibold font-['Source_Serif_4'] leading-8">
                            Ten categories, routed to the owner who can actually answer.
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col gap-[15px] w-full">
                    {/* Row 1 */}
                    <div className="flex items-start gap-[15px]">
                        {/* Card 1 */}
                        <div className="w-[212px] h-[185px] bg-white rounded-xl border border-[#e3d9c2] p-4 flex flex-col justify-between shrink-0 shadow-xs">
                            <div className="flex flex-col gap-1.5">
                                <h4 className="text-[#0A1628] text-[13px] font-bold font-['Inter']">Corporate Identity</h4>
                                <p className="text-[#5c6672] text-[10.5px] font-normal font-['Inter'] leading-[15px]">
                                    Purpose, scope, and record<br />state for the provider entity.
                                </p>
                            </div>
                            <p className="text-[#d97f0e] text-[9.5px] font-medium font-['Inter'] leading-[13px]">
                                Not a legal-entity or ownership<br />claim unless sourced.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="w-[212px] h-[185px] bg-white rounded-xl border border-[#e3d9c2] p-4 flex flex-col justify-between shrink-0 shadow-xs">
                            <div className="flex flex-col gap-1.5">
                                <h4 className="text-[#0A1628] text-[13px] font-bold font-['Inter'] leading-tight">Governance &<br />Accountability</h4>
                                <p className="text-[#5c6672] text-[10.5px] font-normal font-['Inter'] leading-[15px]">
                                    Routes to Governance plus<br />approved provider-level<br />metadata.
                                </p>
                            </div>
                            <span className="text-[#00bfa6] text-[11px] font-semibold font-['Inter'] flex items-center gap-1 cursor-pointer hover:underline">
                                Explore Governance <span className="text-[10px]">→</span>
                            </span>
                        </div>

                        {/* Card 3 */}
                        <div className="w-[212px] h-[185px] bg-white rounded-xl border border-[#e3d9c2] p-4 flex flex-col justify-between shrink-0 shadow-xs">
                            <div className="flex flex-col gap-1.5">
                                <h4 className="text-[#0A1628] text-[13px] font-bold font-['Inter']">Compliance & Assurance</h4>
                                <p className="text-[#5c6672] text-[10.5px] font-normal font-['Inter'] leading-[15px]">
                                    Routes to Compliance plus<br />evidence availability<br />metadata.
                                </p>
                            </div>
                            <span className="text-[#00bfa6] text-[11px] font-semibold font-['Inter'] flex items-center gap-1 cursor-pointer hover:underline">
                                Explore Compliance <span className="text-[10px]">→</span>
                            </span>
                        </div>

                        {/* Card 4 */}
                        <div className="w-[212px] h-[185px] bg-white rounded-xl border border-[#e3d9c2] p-4 flex flex-col justify-between shrink-0 shadow-xs">
                            <div className="flex flex-col gap-1.5">
                                <h4 className="text-[#0A1628] text-[13px] font-bold font-['Inter']">Privacy & Security</h4>
                                <p className="text-[#5c6672] text-[10.5px] font-normal font-['Inter'] leading-[15px]">
                                    Routes to Privacy & Security<br />plus evidence/access<br />metadata.
                                </p>
                            </div>
                            <span className="text-[#00bfa6] text-[11px] font-semibold font-['Inter'] flex items-center gap-1 cursor-pointer hover:underline">
                                Explore Privacy & Security <span className="text-[10px]">→</span>
                            </span>
                        </div>

                        {/* Card 5 */}
                        <div className="w-[212px] h-[185px] bg-white rounded-xl border border-[#e3d9c2] p-4 flex flex-col justify-between shrink-0 shadow-xs">
                            <div className="flex flex-col gap-1.5">
                                <h4 className="text-[#0A1628] text-[13px] font-bold font-['Inter']">Financial / Insurance</h4>
                                <p className="text-[#5c6672] text-[10.5px] font-normal font-['Inter'] leading-[15px]">
                                    Approved record/evidence<br />availability only.
                                </p>
                            </div>
                            <p className="text-[#d97f0e] text-[9.5px] font-medium font-['Inter'] leading-[13px]">
                                Not a solvency, coverage, or<br />rating claim.
                            </p>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex items-start gap-[15px]">
                        {/* Card 6 */}
                        <div className="w-[212px] h-[185px] bg-white rounded-xl border border-[#e3d9c2] p-4 flex flex-col justify-between shrink-0 shadow-xs">
                            <div className="flex flex-col gap-1.5">
                                <h4 className="text-[#0A1628] text-[13px] font-bold font-['Inter']">Continuity / Resilience</h4>
                                <p className="text-[#5c6672] text-[10.5px] font-normal font-['Inter'] leading-[15px]">
                                    Approved record/evidence<br />availability only.
                                </p>
                            </div>
                            <p className="text-[#d97f0e] text-[9.5px] font-medium font-['Inter'] leading-[13px]">
                                Not an RTO/RPO, uptime, or<br />SLA claim.
                            </p>
                        </div>

                        {/* Card 7 */}
                        <div className="w-[212px] h-[185px] bg-white rounded-xl border border-[#e3d9c2] p-4 flex flex-col justify-between shrink-0 shadow-xs">
                            <div className="flex flex-col gap-1.5">
                                <h4 className="text-[#0A1628] text-[13px] font-bold font-['Inter']">Third Parties</h4>
                                <p className="text-[#5c6672] text-[10.5px] font-normal font-['Inter'] leading-[15px]">
                                    Authoritative pointer and<br />currentness only.
                                </p>
                            </div>
                            <p className="text-[#d97f0e] text-[9.5px] font-medium font-['Inter'] leading-[13px]">
                                No subprocessor names unless<br />approved.
                            </p>
                        </div>

                        {/* Card 8 */}
                        <div className="w-[212px] h-[185px] bg-white rounded-xl border border-[#e3d9c2] p-4 flex flex-col justify-between shrink-0 shadow-xs">
                            <div className="flex flex-col gap-1.5">
                                <h4 className="text-[#0A1628] text-[13px] font-bold font-['Inter']">Accessibility</h4>
                                <p className="text-[#5c6672] text-[10.5px] font-normal font-['Inter'] leading-[15px]">
                                    Routes to Accessibility once<br />approved content exists.
                                </p>
                            </div>
                            <span className="text-[#00bfa6] text-[11px] font-semibold font-['Inter'] flex items-center gap-1 cursor-pointer hover:underline">
                                Explore Accessibility <span className="text-[10px]">→</span>
                            </span>
                        </div>

                        {/* Card 9 */}
                        <div className="w-[212px] h-[185px] bg-white rounded-xl border border-[#e3d9c2] p-4 flex flex-col justify-between shrink-0 shadow-xs">
                            <div className="flex flex-col gap-1.5">
                                <h4 className="text-[#0A1628] text-[13px] font-bold font-['Inter']">Technical / Change</h4>
                                <p className="text-[#5c6672] text-[10.5px] font-normal font-['Inter'] leading-[15px]">
                                    Routes to API Reference<br />and Release Notes once<br />approved.
                                </p>
                            </div>
                            <span className="text-[#00bfa6] text-[11px] font-semibold font-['Inter'] flex items-center gap-1 cursor-pointer hover:underline">
                                Explore API Reference <span className="text-[10px]">→</span>
                            </span>
                        </div>

                        {/* Card 10 */}
                        <div className="w-[212px] h-[185px] bg-white rounded-xl border border-[#e3d9c2] p-4 flex flex-col justify-between shrink-0 shadow-xs">
                            <div className="flex flex-col gap-1.5">
                                <h4 className="text-[#0A1628] text-[13px] font-bold font-['Inter']">Legal / Procurement</h4>
                                <p className="text-[#5c6672] text-[10.5px] font-normal font-['Inter'] leading-[15px]">
                                    Routes to Legal and<br />Procurement Support once<br />approved.
                                </p>
                            </div>
                            <p className="text-[#d97f0e] text-[9.5px] font-medium font-['Inter'] leading-[13px]">
                                No contract terms or SLA<br />stated here.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <SectionDivider />

        {/* 5. EVIDENCE & DOCUMENT CENTER */}
        <section className="bg-[#F7F3EA] py-14 px-6 md:px-12 lg:px-24 xl:px-[120px] flex justify-center w-full">
            <div className="w-[1200px] max-w-[1200px] px-8 flex flex-col justify-start items-start gap-6">
                <div className="w-[700px] max-w-[700px] pt-1.5 flex flex-col justify-start items-start gap-3">
                    <div className="inline-flex justify-start items-center gap-2">
                        <div className="w-4 h-0.5 bg-amber-600 rounded-xs" />
                        <div className="text-amber-600 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">EVIDENCE & DOCUMENT CENTER</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="self-stretch justify-center text-[#0A1628] text-2xl font-semibold font-['Source_Serif_4'] leading-8">
                            Filter to what your evaluation actually needs.
                        </div>
                    </div>
                </div>

                {/* Filter Bar */}
                <div className="w-full max-w-[1128px] bg-white border border-[#e3d9c2] rounded-2xl p-5 flex flex-col gap-4 shadow-xs">
                    <input suppressHydrationWarning 
                        type="text" 
                        placeholder="Search evidence title, domain, or scope…" 
                        className="w-full bg-[#fdfdfc] border border-[#e3d9c2] rounded-lg px-4 py-2.5 text-[13px] font-['Inter'] text-[#0A1628] placeholder:text-[#8b93a0] outline-none focus:border-[#00bfa6]"
                    />
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col gap-1 w-[160px]">
                            <label className="text-[10px] font-bold uppercase tracking-wider text-[#8b93a0] font-['Inter']">DOMAIN</label>
                            <select suppressHydrationWarning className="bg-[#fdfdfc] border border-[#e3d9c2] rounded-lg px-3 py-1.5 text-[12px] font-['Inter'] text-[#0A1628] outline-none">
                                <option>All Domains</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1 w-[160px]">
                            <label className="text-[10px] font-bold uppercase tracking-wider text-[#8b93a0] font-['Inter']">ACCESS STATE</label>
                            <select suppressHydrationWarning className="bg-[#fdfdfc] border border-[#e3d9c2] rounded-lg px-3 py-1.5 text-[12px] font-['Inter'] text-[#0A1628] outline-none">
                                <option>All States</option>
                            </select>
                        </div>
                        <div className="pt-4">
                            <button suppressHydrationWarning className="text-[12px] font-semibold text-[#00bfa6] hover:underline cursor-pointer">
                                Clear filters
                            </button>
                        </div>
                    </div>
                </div>

                <p className="text-[12px] text-[#8b93a0] font-['Inter']">8 records</p>

                {/* Cards Container: 2 rows of 4 cards */}
                <div className="flex flex-col gap-[16px] w-full">
                    {/* Row 1 */}
                    <div className="flex items-start gap-[16px]">
                        {/* Card 1 */}
                        <div className="w-[270px] h-[196px] bg-white rounded-xl border border-[#e3d9c2] p-5 flex flex-col justify-between shrink-0 shadow-xs">
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between items-start gap-2">
                                    <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#8b93a0] font-['Inter'] leading-tight">CORPORATE IDENTITY</span>
                                    <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-[#00bfa6]/10 text-[#00bfa6] font-['Inter'] whitespace-nowrap shrink-0">PUBLIC</span>
                                </div>
                                <h4 className="text-[14px] font-bold font-['Inter'] text-[#0A1628] leading-snug">Provider Entity Overview</h4>
                                <p className="text-[11px] font-normal text-[#8b93a0] font-['Inter']">Scope: Provider-wide</p>
                            </div>
                            <div>
                                <span className="text-[12px] font-bold text-[#00bfa6] font-['Inter'] flex items-center gap-1 cursor-pointer hover:underline">
                                    View <span className="text-[10px]">→</span>
                                </span>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="w-[270px] h-[196px] bg-white rounded-xl border border-[#e3d9c2] p-5 flex flex-col justify-between shrink-0 shadow-xs">
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between items-start gap-2">
                                    <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#8b93a0] font-['Inter'] leading-tight">COMPLIANCE & ASSURANCE</span>
                                    <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-[#00bfa6]/10 text-[#00bfa6] font-['Inter'] whitespace-nowrap shrink-0">PUBLIC SUMMARY</span>
                                </div>
                                <h4 className="text-[14px] font-bold font-['Inter'] text-[#0A1628] leading-snug">Compliance Evidence Pointer</h4>
                                <p className="text-[11px] font-normal text-[#8b93a0] font-['Inter']">Scope: Platform</p>
                            </div>
                            <div>
                                <span className="text-[12px] font-bold text-[#00bfa6] font-['Inter'] flex items-center gap-1 cursor-pointer hover:underline">
                                    View Summary <span className="text-[10px]">→</span>
                                </span>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="w-[270px] h-[196px] bg-white rounded-xl border border-[#e3d9c2] p-5 flex flex-col justify-between shrink-0 shadow-xs">
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between items-start gap-2">
                                    <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#8b93a0] font-['Inter'] leading-tight">PRIVACY & SECURITY</span>
                                    <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-[#00bfa6]/10 text-[#00bfa6] font-['Inter'] whitespace-nowrap shrink-0">PUBLIC SUMMARY</span>
                                </div>
                                <h4 className="text-[14px] font-bold font-['Inter'] text-[#0A1628] leading-snug">Privacy & Security Evidence<br />Pointer</h4>
                                <p className="text-[11px] font-normal text-[#8b93a0] font-['Inter']">Scope: Platform</p>
                            </div>
                            <div>
                                <span className="text-[12px] font-bold text-[#00bfa6] font-['Inter'] flex items-center gap-1 cursor-pointer hover:underline">
                                    View Summary <span className="text-[10px]">→</span>
                                </span>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="w-[270px] h-[196px] bg-white rounded-xl border border-[#e3d9c2] p-5 flex flex-col justify-between shrink-0 shadow-xs">
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between items-start gap-2">
                                    <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#8b93a0] font-['Inter'] leading-tight">FINANCIAL / INSURANCE</span>
                                    <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-[#e3d9c2] text-[#5c6672] font-['Inter'] whitespace-nowrap shrink-0">NOT PUBLISHED</span>
                                </div>
                                <h4 className="text-[14px] font-bold font-['Inter'] text-[#0A1628] leading-snug">Financial Stability Record</h4>
                                <p className="text-[11px] font-normal text-[#8b93a0] font-['Inter']">Scope: Provider-wide</p>
                            </div>
                            <div>
                                <span className="text-[12px] font-bold text-[#00bfa6] font-['Inter'] flex items-center gap-1 cursor-pointer hover:underline">
                                    View Status <span className="text-[10px]">→</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex items-start gap-[16px]">
                        {/* Card 5 */}
                        <div className="w-[270px] h-[196px] bg-white rounded-xl border border-[#e3d9c2] p-5 flex flex-col justify-between shrink-0 shadow-xs">
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between items-start gap-2">
                                    <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#8b93a0] font-['Inter'] leading-tight">FINANCIAL / INSURANCE</span>
                                    <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-[#f59a23]/10 text-[#d97f0e] font-['Inter'] whitespace-nowrap shrink-0">REQUEST</span>
                                </div>
                                <h4 className="text-[14px] font-bold font-['Inter'] text-[#0A1628] leading-snug">Insurance Coverage Summary</h4>
                                <p className="text-[11px] font-normal text-[#8b93a0] font-['Inter']">Scope: Provider-wide</p>
                            </div>
                            <div>
                                <span className="text-[12px] font-bold text-[#00bfa6] font-['Inter'] flex items-center gap-1 cursor-pointer hover:underline">
                                    Request Evidence <span className="text-[10px]">→</span>
                                </span>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="w-[270px] h-[196px] bg-white rounded-xl border border-[#e3d9c2] p-5 flex flex-col justify-between shrink-0 shadow-xs">
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between items-start gap-2">
                                    <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#8b93a0] font-['Inter'] leading-tight">CONTINUITY / RESILIENCE</span>
                                    <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-[#e3d9c2] text-[#5c6672] font-['Inter'] whitespace-nowrap shrink-0">NOT PUBLISHED</span>
                                </div>
                                <h4 className="text-[14px] font-bold font-['Inter'] text-[#0A1628] leading-snug">Business Continuity Statement</h4>
                                <p className="text-[11px] font-normal text-[#8b93a0] font-['Inter']">Scope: Platform</p>
                            </div>
                            <div>
                                <span className="text-[12px] font-bold text-[#00bfa6] font-['Inter'] flex items-center gap-1 cursor-pointer hover:underline">
                                    View Status <span className="text-[10px]">→</span>
                                </span>
                            </div>
                        </div>

                        {/* Card 7 */}
                        <div className="w-[270px] h-[196px] bg-white rounded-xl border border-[#e3d9c2] p-5 flex flex-col justify-between shrink-0 shadow-xs">
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between items-start gap-2">
                                    <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#8b93a0] font-['Inter'] leading-tight">THIRD PARTIES</span>
                                    <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-[#f59a23]/10 text-[#d97f0e] font-['Inter'] whitespace-nowrap shrink-0">REQUEST</span>
                                </div>
                                <h4 className="text-[14px] font-bold font-['Inter'] text-[#0A1628] leading-snug">Subprocessor Disclosure</h4>
                                <p className="text-[11px] font-normal text-[#8b93a0] font-['Inter']">Scope: Platform</p>
                            </div>
                            <div>
                                <span className="text-[12px] font-bold text-[#00bfa6] font-['Inter'] flex items-center gap-1 cursor-pointer hover:underline">
                                    Request Evidence <span className="text-[10px]">→</span>
                                </span>
                            </div>
                        </div>

                        {/* Card 8 */}
                        <div className="w-[270px] h-[196px] bg-white rounded-xl border border-[#e3d9c2] p-5 flex flex-col justify-between shrink-0 shadow-xs">
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between items-start gap-2">
                                    <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#8b93a0] font-['Inter'] leading-tight">PRIVACY & SECURITY</span>
                                    <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-[#f59a23]/10 text-[#d97f0e] font-['Inter'] whitespace-nowrap shrink-0">ENTITLEMENT</span>
                                </div>
                                <h4 className="text-[14px] font-bold font-['Inter'] text-[#0A1628] leading-snug">Security Questionnaire Response<br />Set</h4>
                                <p className="text-[11px] font-normal text-[#8b93a0] font-['Inter']">Scope: Enterprise customers</p>
                            </div>
                            <div>
                                <span className="text-[12px] font-bold text-[#00bfa6] font-['Inter'] flex items-center gap-1 cursor-pointer hover:underline">
                                    Request Evidence <span className="text-[10px]">→</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <SectionDivider />

        {/* 6. QUESTIONNAIRE & ASSESSMENT SUPPORT */}
        <section className="bg-[#ece5d3] py-14 px-6 md:px-12 lg:px-24 xl:px-[120px] flex justify-center w-full">
            <div className="w-[1200px] max-w-[1200px] px-8 flex flex-col justify-start items-start gap-7">
                <div className="w-[700px] max-w-[700px] pt-1.5 flex flex-col justify-start items-start gap-3">
                    <div className="inline-flex justify-start items-center gap-2">
                        <div className="w-4 h-0.5 bg-amber-600 rounded-xs" />
                        <div className="text-amber-600 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">QUESTIONNAIRE & ASSESSMENT SUPPORT</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="self-stretch justify-center text-[#0A1628] text-2xl font-semibold font-['Source_Serif_4'] leading-8">
                            Eight answer states — none of them a risk score.
                        </div>
                    </div>
                    <p className="text-[#5c6672] text-[12.5px] font-normal font-['Inter'] leading-5">
                        The page may support questionnaire workflows only to the extent the approved product/process<br />
                        supports them.
                    </p>
                </div>

                <div className="flex flex-col gap-[10px] w-full max-w-[1128px]">
                    {[
                        { title: 'Unmapped', desc: 'Question not yet assigned to a domain or owner.', tag: 'NEEDS CLASSIFICATION', tagBg: 'bg-[#efe8d6]', tagText: 'text-[#5c6672]' },
                        { title: 'Mapped', desc: 'Domain and owner identified; answer not yet finalized.', tag: 'MAPPED TO PRIVACY & SECURITY', tagBg: 'bg-[#f59a23]/10', tagText: 'text-[#d97f0e]' },
                        { title: 'Sourced', desc: 'An approved source answer exists.', tag: 'SOURCE-BACKED ANSWER AVAILABLE', tagBg: 'bg-[#00bfa6]/10', tagText: 'text-[#00bfa6]' },
                        { title: 'Owner Review', desc: 'A potential answer requires responsible-owner review before publication.', tag: 'OWNER REVIEW REQUIRED', tagBg: 'bg-[#f59a23]/10', tagText: 'text-[#d97f0e]' },
                        { title: 'Clarification Needed', desc: 'The question\'s scope is ambiguous as asked.', tag: 'CLARIFICATION REQUIRED', tagBg: 'bg-[#f59a23]/10', tagText: 'text-[#d97f0e]' },
                        { title: 'Not Published', desc: 'The answer or evidence is not public.', tag: 'NOT PUBLISHED', tagBg: 'bg-[#efe8d6]', tagText: 'text-[#5c6672]' },
                        { title: 'Not Applicable', desc: 'The approved owner has determined this category doesn\'t apply to the defined scope.', tag: 'NOT APPLICABLE TO THIS SCOPE', tagBg: 'bg-[#efe8d6]', tagText: 'text-[#5c6672]' },
                        { title: 'Superseded', desc: 'The answer has been replaced by a newer version.', tag: 'SUPERSEDED — OPEN CURRENT ANSWER', tagBg: 'bg-[#efe8d6]', tagText: 'text-[#5c6672]' },
                    ].map((row, i) => (
                        <div key={i} className="w-full bg-white rounded-xl border border-[#e3d9c2] px-5 py-3 flex justify-between items-center shadow-xs">
                            <div className="flex flex-col gap-0.5">
                                <h5 className="text-[13px] font-bold text-[#0A1628] font-['Inter'] leading-tight">{row.title}</h5>
                                <p className="text-[10.5px] text-[#5c6672] font-normal font-['Inter']">{row.desc}</p>
                            </div>
                            <div className="shrink-0">
                                <span className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded font-['Inter'] whitespace-nowrap ${row.tagBg} ${row.tagText}`}>
                                    {row.tag}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <SectionDivider />

        {/* 7. OPEN QUESTIONS & LIMITATIONS */}
        <section className="bg-[#F7F3EA] py-14 px-6 md:px-12 lg:px-24 xl:px-[120px] flex justify-center w-full">
            <div className="w-[1200px] max-w-[1200px] px-8 flex flex-col justify-start items-start gap-7">
                <div className="w-[700px] max-w-[700px] pt-1.5 flex flex-col justify-start items-start gap-3">
                    <div className="inline-flex justify-start items-center gap-2">
                        <div className="w-4 h-0.5 bg-amber-600 rounded-xs" />
                        <div className="text-amber-600 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">OPEN QUESTIONS & LIMITATIONS</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="self-stretch justify-center text-[#0A1628] text-2xl font-semibold font-['Source_Serif_4'] leading-8">
                            What stays visible, even when it's unresolved.
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-[16px] w-full max-w-[1128px]">
                    <div className="flex-1 bg-white border border-[#e3d9c2] border-l-[3px] border-l-[#d97f0e] p-6 rounded-r-xl rounded-l-none flex flex-col gap-3 shadow-xs">
                        <h5 className="text-[14px] font-bold text-[#0A1628] font-['Inter']">Example: Insurance coverage limits</h5>
                        <p className="text-[13px] leading-[20px] text-[#5c6672] font-normal font-['Inter']">
                            No approved insurance record currently exists for public evaluation. This is shown as an open<br />question rather than answered with an assumed industry-standard figure.
                        </p>
                    </div>
                    <div className="flex-1 bg-white border border-[#e3d9c2] border-l-[3px] border-l-[#d97f0e] p-6 rounded-r-xl rounded-l-none flex flex-col gap-3 shadow-xs">
                        <h5 className="text-[14px] font-bold text-[#0A1628] font-['Inter']">Example: Named subprocessor list</h5>
                        <p className="text-[13px] leading-[20px] text-[#5c6672] font-normal font-['Inter']">
                            A source-approved subprocessor disclosure is not yet published at the provider-record level.<br />See Privacy & Security for related data-processing disclosures.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <SectionDivider />

        {/* WHY WE HOLD THIS LINE */}
        <section className="bg-[#ece5d3] py-16 px-6 md:px-12 lg:px-24 xl:px-[120px] flex justify-center w-full">
            <div className="w-[1200px] max-w-[1200px] px-8 flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="flex-1 pt-1.5 flex flex-col justify-start items-start gap-4">
                    <div className="flex justify-start items-center gap-2">
                        <div className="w-4 h-0.5 bg-[#d97f0e] rounded-xs" />
                        <div className="justify-center text-[#d97f0e] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">Why We Hold This Line</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="self-stretch justify-center text-[#0A1628] text-2xl font-semibold font-['Source_Serif_4'] leading-8">
                            A due-diligence page that invents answers isn&apos;t<br/>due diligence.
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="self-stretch justify-center text-[#5c6672] text-sm font-normal font-['Inter'] leading-6">
                            It would be easy to fill every domain with reassuring language. It would also<br/>undermine the entire point of this page — procurement and risk teams need to<br/>trust that what&apos;s shown here is real.
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-2 mt-2">
                        <div className="self-stretch pl-4 relative flex flex-col justify-start items-start">
                            <div className="w-[5px] h-[5px] left-0 top-[8px] absolute bg-[#d97f0e] rounded-full" />
                            <div className="justify-center text-[#0A1628] text-xs font-normal font-['Inter'] leading-5">Every provider statement traces to an approved source with an owner and scope</div>
                        </div>
                        <div className="self-stretch pl-4 relative flex flex-col justify-start items-start">
                            <div className="w-[5px] h-[5px] left-0 top-[8px] absolute bg-[#d97f0e] rounded-full" />
                            <div className="justify-center text-[#0A1628] text-xs font-normal font-['Inter'] leading-5">Unanswered and not-applicable states stay visible, never hidden to look complete</div>
                        </div>
                        <div className="self-stretch pl-4 relative flex flex-col justify-start items-start">
                            <div className="w-[5px] h-[5px] left-0 top-[8px] absolute bg-[#d97f0e] rounded-full" />
                            <div className="justify-center text-[#0A1628] text-xs font-normal font-['Inter'] leading-5">No risk score or &quot;pass&quot; badge without an approved methodology behind it</div>
                        </div>
                        <div className="self-stretch pl-4 relative flex flex-col justify-start items-start">
                            <div className="w-[5px] h-[5px] left-0 top-[8px] absolute bg-[#d97f0e] rounded-full" />
                            <div className="justify-center text-[#0A1628] text-xs font-normal font-['Inter'] leading-5">Conflicting sources are flagged for owner review, never silently resolved</div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 w-full max-w-[544px] h-[435px] rounded-2xl overflow-hidden relative shadow-sm shrink-0">
                    <img className="w-full h-full object-cover" src="/images/provider-due-diligence/why-we-hold-this-line.png" alt="Why We Hold This Line" />
                </div>
            </div>
        </section>
        <SectionDivider />

        {/* CURRENTNESS & CHANGE HISTORY */}
        <section className="bg-[#F7F3EA] py-16 px-6 md:px-12 lg:px-24 xl:px-[120px] flex justify-center w-full">
            <div className="w-[1200px] max-w-[1200px] px-8 flex flex-col justify-start items-start gap-4">
                <div className="w-[700px] max-w-[700px] pt-1.5 pb-3.5 flex flex-col justify-start items-start gap-3">
                    <div className="flex justify-start items-center gap-2">
                        <div className="w-4 h-0.5 bg-[#d97f0e] rounded-xs" />
                        <div className="text-[#d97f0e] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">CURRENTNESS & CHANGE HISTORY</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="self-stretch text-[#0A1628] text-2xl font-semibold font-['Source_Serif_4'] leading-8">This record's own version state.</div>
                    </div>
                </div>

                <div className="w-full max-w-[820px] bg-[#e3d9c2] rounded-[10px] border border-[#e3d9c2] flex justify-center items-stretch gap-[1px] overflow-hidden">
                    <div className="flex-1 px-5 py-4 bg-[#ece5d3] flex flex-col justify-start items-start gap-2">
                        <div className="text-[#8b93a0] text-[10px] font-bold font-['Inter'] uppercase tracking-wider">Status</div>
                        <div className="text-[#0A1628] text-[13px] font-semibold font-['Inter']">Current</div>
                    </div>
                    <div className="flex-1 px-5 py-4 bg-[#ece5d3] flex flex-col justify-start items-start gap-2">
                        <div className="text-[#8b93a0] text-[10px] font-bold font-['Inter'] uppercase tracking-wider">Version</div>
                        <div className="text-[#0A1628] text-[13px] font-semibold font-['Inter']">1.0</div>
                    </div>
                    <div className="flex-1 px-5 py-4 bg-[#ece5d3] flex flex-col justify-start items-start gap-2">
                        <div className="text-[#8b93a0] text-[10px] font-bold font-['Inter'] uppercase tracking-wider">Last Reviewed</div>
                        <div className="text-[#0A1628] text-[13px] font-semibold font-['Inter']">Oct 2026</div>
                    </div>
                    <div className="flex-1 px-5 py-4 bg-[#ece5d3] flex flex-col justify-start items-start gap-2">
                        <div className="text-[#8b93a0] text-[10px] font-bold font-['Inter'] uppercase tracking-wider">Owner</div>
                        <div className="text-[#0A1628] text-[13px] font-semibold font-['Inter']">Trust Team</div>
                    </div>
                </div>

                <div className="w-full pt-3">
                    <p className="text-[#8b93a0] text-[12.5px] font-normal font-['Inter'] leading-5 max-w-[900px]">
                        Material changes to provider profile, evidence, or questionnaire records will be logged here with date, change type, and affected domain once those records exist.
                    </p>
                </div>
            </div>
        </section>
        <SectionDivider />

        {/* WHERE ELSE TO LOOK */}
        <section className="bg-[#ece5d3] py-16 px-6 md:px-12 lg:px-24 xl:px-[120px] flex justify-center w-full">
            <div className="w-[1200px] max-w-[1200px] px-8 flex flex-col justify-start items-start gap-6">
                <div className="w-[700px] max-w-[700px] pt-1.5 flex flex-col justify-start items-start gap-3">
                    <div className="flex justify-start items-center gap-2">
                        <div className="w-4 h-0.5 bg-[#d97f0e] rounded-xs" />
                        <div className="text-[#d97f0e] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">WHERE ELSE TO LOOK</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="self-stretch text-[#0A1628] text-2xl font-semibold font-['Source_Serif_4'] leading-8">Routed to the authoritative owner — never duplicated here.</div>
                    </div>
                </div>

                <div className="self-stretch flex flex-col lg:flex-row justify-start items-stretch gap-[16px] w-full">
                    {/* Card 1 */}
                    <div className="flex-1 p-5 bg-white rounded-xl border border-[#e3d9c2] flex flex-col justify-between items-start gap-3 shadow-xs">
                        <div className="flex flex-col gap-1.5">
                            <h4 className="text-[#0A1628] text-[14px] font-semibold font-['Source_Serif_4'] leading-6">Compliance</h4>
                            <p className="text-[#5c6672] text-[12.5px] font-normal font-['Inter'] leading-[20px]">
                                Framework, regulatory, and assurance<br/>evidence availability.
                            </p>
                        </div>
                        <span className="text-[#00bfa6] text-[13.5px] font-semibold font-['Inter'] flex items-center gap-1 cursor-pointer hover:underline mt-2">
                            Explore Compliance <span className="text-[10px]">→</span>
                        </span>
                    </div>

                    {/* Card 2 */}
                    <div className="flex-1 p-5 bg-white rounded-xl border border-[#e3d9c2] flex flex-col justify-between items-start gap-3 shadow-xs">
                        <div className="flex flex-col gap-1.5">
                            <h4 className="text-[#0A1628] text-[14px] font-semibold font-['Source_Serif_4'] leading-6">Governance</h4>
                            <p className="text-[#5c6672] text-[12.5px] font-normal font-['Inter'] leading-[20px]">
                                Accountability, decision rights, and<br/>oversight structures.
                            </p>
                        </div>
                        <span className="text-[#00bfa6] text-[13.5px] font-semibold font-['Inter'] flex items-center gap-1 cursor-pointer hover:underline mt-2">
                            Explore Governance <span className="text-[10px]">→</span>
                        </span>
                    </div>

                    {/* Card 3 */}
                    <div className="flex-1 p-5 bg-white rounded-xl border border-[#e3d9c2] flex flex-col justify-between items-start gap-3 shadow-xs">
                        <div className="flex flex-col gap-1.5">
                            <h4 className="text-[#0A1628] text-[14px] font-semibold font-['Source_Serif_4'] leading-6">Privacy &amp; Security</h4>
                            <p className="text-[#5c6672] text-[12.5px] font-normal font-['Inter'] leading-[20px]">
                                Data protection, security architecture,<br/>and technical trust content.
                            </p>
                        </div>
                        <span className="text-[#00bfa6] text-[13.5px] font-semibold font-['Inter'] flex items-center gap-1 cursor-pointer hover:underline mt-2">
                            Explore Privacy &amp; Security <span className="text-[10px]">→</span>
                        </span>
                    </div>

                    {/* Card 4 */}
                    <div className="flex-1 p-5 bg-white rounded-xl border border-[#e3d9c2] flex flex-col justify-between items-start gap-3 shadow-xs">
                        <div className="flex flex-col gap-1.5">
                            <h4 className="text-[#0A1628] text-[14px] font-semibold font-['Source_Serif_4'] leading-6">Accessibility</h4>
                            <p className="text-[#5c6672] text-[12.5px] font-normal font-['Inter'] leading-[20px]">
                                Accessibility posture and issue-<br/>reporting routes.
                            </p>
                        </div>
                        <span className="text-[#00bfa6] text-[13.5px] font-semibold font-['Inter'] flex items-center gap-1 cursor-pointer hover:underline mt-2">
                            Explore Accessibility <span className="text-[10px]">→</span>
                        </span>
                    </div>
                </div>

                <div className="w-full max-w-[720px] p-5 bg-white rounded-xl border border-[#e3d9c2] flex flex-col justify-start items-start gap-2 shadow-xs mt-2">
                    <h4 className="text-[#0A1628] text-[14px] font-bold font-['Inter'] leading-5">
                        Procurement Support — A Separate Destination
                    </h4>
                    <p className="text-[#5c6672] text-[12.5px] font-normal font-['Inter'] leading-[20px]">
                        Provider Due Diligence owns the structured evaluation record and evidence context. Procurement process help, onboarding checklists, and commercial/legal coordination belong to Procurement Support — a separate destination, pending its own approval. We won't duplicate that process here.
                    </p>
                </div>
            </div>
        </section>
        <SectionDivider />

        {/* 8. CONTROLLED REQUEST EXPERIENCE */}
        <section className="bg-[#F7F3EA] py-16 px-6 md:px-12 lg:px-24 xl:px-[120px] flex justify-center w-full">
            <div className="w-[1200px] max-w-[1200px] px-8 flex flex-col justify-start items-center gap-7">
                <div className="w-[700px] max-w-[700px] pt-1.5 flex flex-col justify-start items-center gap-3">
                    <div className="flex justify-center items-center gap-2">
                        <div className="w-4 h-0.5 bg-[#d97f0e] rounded-xs" />
                        <div className="text-[#d97f0e] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide text-center">Controlled Request Experience</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-center text-center">
                        <div className="text-[#0A1628] text-2xl font-semibold font-['Source_Serif_4'] leading-8 text-center">Request restricted evidence, with context preserved.</div>
                    </div>
                </div>

                <div className="w-full flex flex-col lg:flex-row justify-start items-stretch gap-[32px] pt-2">
                    {/* Left Column (Pointers) */}
                    <div className="flex-1 flex flex-col justify-start items-start gap-4 pt-4">
                        {/* Pointer 1 */}
                        <div className="w-full pb-4 border-b border-[#e3d9c2] flex justify-start items-start gap-3">
                            <div className="w-7 h-7 bg-[#ece5d3] rounded-md flex justify-center items-center shrink-0">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 6.5L4.5 8.5L9.5 3.5" stroke="#00bfa6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-0.5 pt-1">
                                <div className="text-[#0A1628] text-xs font-bold font-['Inter'] leading-5">Context carried forward</div>
                                <div className="text-[#5c6672] text-xs font-normal font-['Inter'] leading-5">Items you selected from the Evidence Center appear below — no retyping.</div>
                            </div>
                        </div>

                        {/* Pointer 2 */}
                        <div className="w-full pb-4 border-b border-[#e3d9c2] flex justify-start items-start gap-3">
                            <div className="w-7 h-7 bg-[#ece5d3] rounded-md flex justify-center items-center shrink-0">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="6" width="6" height="4" rx="1" stroke="#00bfa6" strokeWidth="1.5" strokeLinejoin="round"/>
                                    <path d="M4.5 6V4.5C4.5 3.67157 5.17157 3 6 3C6.82843 3 7.5 3.67157 7.5 4.5V6" stroke="#00bfa6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-0.5 pt-1">
                                <div className="text-[#0A1628] text-xs font-bold font-['Inter'] leading-5">Minimal identity collection</div>
                                <div className="text-[#5c6672] text-xs font-normal font-['Inter'] leading-5">Work email, organization, and role — nothing more than needed.</div>
                            </div>
                        </div>

                        {/* Pointer 3 */}
                        <div className="w-full pb-4 flex justify-start items-start gap-3">
                            <div className="w-7 h-7 bg-[#ece5d3] rounded-md flex justify-center items-center shrink-0">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 2.5L2.5 4V6.5C2.5 8.5 4 10 6 10.5C8 10 9.5 8.5 9.5 6.5V4L6 2.5Z" stroke="#00bfa6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-[1.43px] pt-1">
                                <div className="text-[#0A1628] text-xs font-bold font-['Inter'] leading-5">No guaranteed approval or timing</div>
                                <div className="text-[#5c6672] text-xs font-normal font-['Inter'] leading-5">
                                    Submission starts a real review — it doesn&apos;t promise access or a response<br/>window we haven&apos;t approved.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Form) */}
                    <div className="flex-1 w-full bg-white rounded-2xl border border-[#e3d9c2] px-7 py-7 flex flex-col justify-start items-start shadow-sm shrink-0">
                        {/* Requested Items Box */}
                        <div className="w-full px-3.5 pt-2.5 pb-3 bg-[#ece5d3] rounded-lg flex flex-col justify-start items-start gap-2 mb-3.5">
                            <div className="text-[#8b93a0] text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wide">Requested Items</div>
                            <div className="text-[#8b93a0] text-xs font-normal font-['Inter'] leading-5">
                                No items selected yet — use &quot;Request Evidence&quot; on any record above, or describe your request below.
                            </div>
                        </div>
                        
                        {/* Inputs */}
                        <div className="w-full flex flex-col md:flex-row gap-3.5 mb-3.5">
                            <div className="flex-1 flex flex-col gap-1.5">
                                <div className="text-[#0A1628] text-xs font-semibold font-['Inter'] leading-5">Work email <span className="text-[#d97f0e]">*</span></div>
                                <input suppressHydrationWarning type="email" className="w-full h-9 bg-white rounded-lg border border-[#e3d9c2] px-3 focus:outline-none focus:border-[#d97f0e]" />
                            </div>
                            <div className="flex-1 flex flex-col gap-1.5">
                                <div className="text-[#0A1628] text-xs font-semibold font-['Inter'] leading-5">Organization <span className="text-[#d97f0e]">*</span></div>
                                <input suppressHydrationWarning type="text" className="w-full h-9 bg-white rounded-lg border border-[#e3d9c2] px-3 focus:outline-none focus:border-[#d97f0e]" />
                            </div>
                        </div>

                        <div className="w-full flex flex-col gap-1.5 mb-4">
                            <div className="text-[#0A1628] text-xs font-semibold font-['Inter'] leading-5">Role / function <span className="text-[#d97f0e]">*</span></div>
                            <select suppressHydrationWarning className="w-full h-9 bg-white rounded-lg border border-[#e3d9c2] px-3 text-[#5c6672] text-[13px] focus:outline-none focus:border-[#d97f0e] appearance-none">
                                <option>Select…</option>
                            </select>
                        </div>

                        <div className="w-full flex flex-col gap-1.5 mb-3.5">
                            <div className="text-[#0A1628] text-xs font-semibold font-['Inter'] leading-5">Evaluation purpose</div>
                            <select suppressHydrationWarning className="w-full h-9 bg-white rounded-lg border border-[#e3d9c2] px-3 text-[#5c6672] text-[13px] focus:outline-none focus:border-[#d97f0e] appearance-none">
                                <option>Select…</option>
                            </select>
                        </div>

                        <div className="w-full flex flex-col gap-1.5 mb-4">
                            <div className="text-[#0A1628] text-xs font-semibold font-['Inter'] leading-5">Note (optional)</div>
                            <div className="w-full bg-white rounded-lg border border-[#e3d9c2] px-3 pt-2.5 pb-10 overflow-hidden">
                                <textarea suppressHydrationWarning placeholder="Please don't include confidential or regulated data here." className="w-full bg-transparent text-[#8b93a0] text-[13px] font-normal font-['Inter'] focus:outline-none resize-none h-full" />
                            </div>
                        </div>

                        <div className="w-full flex items-start gap-2 py-4">
                            <div className="pt-0.5">
                                <input suppressHydrationWarning type="checkbox" className="w-3.5 h-3.5 rounded-sm border-[#8b93a0] text-[#d97f0e] focus:ring-[#d97f0e]" />
                            </div>
                            <div className="text-[#5c6672] text-xs font-normal font-['Inter'] leading-4">
                                I acknowledge the Privacy Policy and understand this request does not guarantee approval or a<br className="hidden md:block"/>specific response time.
                            </div>
                        </div>

                        <button suppressHydrationWarning className="w-full py-2.5 bg-[#f59a23] hover:bg-[#e0891d] transition-colors rounded-md text-[#0A1628] text-sm font-semibold font-['Inter'] flex justify-center items-center mt-2">
                            Submit Request
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <SectionDivider />

        {/* 9. CTA BANNER */}
        <section className="bg-[#EFE8D6] py-16 px-6 md:px-12 lg:px-24 xl:px-[120px] flex justify-center w-full">
            <div className="w-[1200px] max-w-[1200px] relative rounded-2xl overflow-hidden flex items-center min-h-[256px]">
                {/* Background Image */}
                <Image 
                    src="/accounting-education/oo.png" 
                    alt="Professionals high-fiving" 
                    fill 
                    className="object-cover object-center"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/70 to-transparent pointer-events-none" />
                
                {/* Content */}
                <div className="relative z-10 w-full max-w-[560px] px-8 md:px-12 py-10 flex flex-col justify-start items-start gap-4">
                    <h3 className="text-white text-[24px] font-semibold font-['Source_Serif_4'] leading-[32px]">
                        Bring provider due diligence into the<br className="hidden md:block" />evaluation.
                    </h3>
                    <p className="text-[#c2c7ce] text-[13px] font-normal font-['Inter'] leading-[20px] mb-1">
                        Review provider information, evidence availability, and open<br className="hidden md:block" />questions first. Then choose the evaluation path that fits your<br className="hidden md:block" />team.
                    </p>
                    <button suppressHydrationWarning className="px-5 py-2.5 bg-[#f59a23] hover:bg-[#e0891d] transition-colors rounded-md text-[#0A1628] text-[13px] font-semibold font-['Inter'] flex items-center justify-center gap-1.5 mt-1 shadow-sm">
                        Book a Demo <span className="text-[11px]">→</span>
                    </button>
                </div>
            </div>
        </section>

        <SectionDivider />

        {/* 10. FREQUENTLY ASKED */}
        <section className="bg-[#F7F3EA] py-16 px-6 md:px-12 lg:px-24 xl:px-[120px] flex justify-center w-full">
            <div className="w-full max-w-[1200px] px-8 flex flex-col justify-start items-start gap-10">
                <div className="w-full max-w-[700px] pt-1.5 flex flex-col justify-start items-start gap-3">
                    <div className="flex justify-start items-center gap-2">
                        <div className="w-4 h-0.5 bg-[#d97f0e] rounded-xs" />
                        <div className="text-[#d97f0e] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">Frequently Asked</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="text-[#0A1628] text-2xl font-semibold font-['Source_Serif_4'] leading-8">Due-diligence questions, answered honestly.</div>
                    </div>
                </div>
                
                <div className="self-stretch border-t border-[#e3d9c2] flex flex-col justify-start items-start w-full">
                    {/* Item 1 */}
                    <details className="group self-stretch border-b border-[#e3d9c2] w-full" open>
                        <summary className="self-stretch py-5 flex justify-between items-center w-full cursor-pointer hover:bg-slate-50/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                            <div className="text-[#0A1628] text-sm font-semibold font-['Source_Serif_4']">What is ZoikoLogia™ Provider Due Diligence?</div>
                            <div className="w-4 h-4 relative flex items-center justify-center shrink-0">
                                <div className="w-3.5 h-0.5 absolute bg-[#0A1628] group-open:hidden" />
                                <div className="w-0.5 h-3.5 absolute bg-[#0A1628] group-open:hidden" />
                                <div className="w-3.5 h-0.5 absolute bg-[#0A1628] hidden group-open:block" />
                            </div>
                        </summary>
                        <div className="w-full max-w-[720px] pb-5 flex flex-col justify-start items-start">
                            <div className="text-[#5c6672] text-[13px] font-normal font-['Inter'] leading-[20px]">
                                A structured destination for reviewing approved provider-level information, evidence availability, currentness, and<br className="hidden md:block"/>evaluation paths. Not every category has a published answer yet.
                            </div>
                        </div>
                    </details>
                    
                    {/* Item 2 */}
                    <details className="group self-stretch border-b border-[#e3d9c2] w-full">
                        <summary className="self-stretch py-5 flex justify-between items-center w-full cursor-pointer hover:bg-slate-50/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                            <div className="text-[#0A1628] text-sm font-semibold font-['Source_Serif_4']">What provider information is available?</div>
                            <div className="w-4 h-4 relative flex items-center justify-center shrink-0">
                                <div className="w-3.5 h-0.5 absolute bg-[#0A1628] group-open:hidden" />
                                <div className="w-0.5 h-3.5 absolute bg-[#0A1628] group-open:hidden" />
                                <div className="w-3.5 h-0.5 absolute bg-[#0A1628] hidden group-open:block" />
                            </div>
                        </summary>
                        <div className="w-full max-w-[720px] pb-5 flex flex-col justify-start items-start">
                            <div className="text-[#5c6672] text-[13px] font-normal font-['Inter'] leading-[20px]">
                                We provide comprehensive data regarding corporate governance, security architecture, privacy controls, and accessibility compliance. New provider disclosures are published as they clear our verification process.
                            </div>
                        </div>
                    </details>

                    {/* Item 3 */}
                    <details className="group self-stretch border-b border-[#e3d9c2] w-full">
                        <summary className="self-stretch py-5 flex justify-between items-center w-full cursor-pointer hover:bg-slate-50/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                            <div className="text-[#0A1628] text-sm font-semibold font-['Source_Serif_4']">Can I download a due-diligence pack?</div>
                            <div className="w-4 h-4 relative flex items-center justify-center shrink-0">
                                <div className="w-3.5 h-0.5 absolute bg-[#0A1628] group-open:hidden" />
                                <div className="w-0.5 h-3.5 absolute bg-[#0A1628] group-open:hidden" />
                                <div className="w-3.5 h-0.5 absolute bg-[#0A1628] hidden group-open:block" />
                            </div>
                        </summary>
                        <div className="w-full max-w-[720px] pb-5 flex flex-col justify-start items-start">
                            <div className="text-[#5c6672] text-[13px] font-normal font-['Inter'] leading-[20px]">
                                Yes, verified enterprise users can request and download aggregated evidence packs containing all source-approved security, privacy, and compliance documentation.
                            </div>
                        </div>
                    </details>

                    {/* Item 4 */}
                    <details className="group self-stretch border-b border-[#e3d9c2] w-full">
                        <summary className="self-stretch py-5 flex justify-between items-center w-full cursor-pointer hover:bg-slate-50/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                            <div className="text-[#0A1628] text-sm font-semibold font-['Source_Serif_4']">Can I submit a security or vendor-risk questionnaire?</div>
                            <div className="w-4 h-4 relative flex items-center justify-center shrink-0">
                                <div className="w-3.5 h-0.5 absolute bg-[#0A1628] group-open:hidden" />
                                <div className="w-0.5 h-3.5 absolute bg-[#0A1628] group-open:hidden" />
                                <div className="w-3.5 h-0.5 absolute bg-[#0A1628] hidden group-open:block" />
                            </div>
                        </summary>
                        <div className="w-full max-w-[720px] pb-5 flex flex-col justify-start items-start">
                            <div className="text-[#5c6672] text-[13px] font-normal font-['Inter'] leading-[20px]">
                                At this time, we do not accept custom vendor-risk questionnaires. We provide a standardized, comprehensive set of answers mapped to industry-standard frameworks to streamline evaluations.
                            </div>
                        </div>
                    </details>

                    {/* Item 5 */}
                    <details className="group self-stretch border-b border-[#e3d9c2] w-full">
                        <summary className="self-stretch py-5 flex justify-between items-center w-full cursor-pointer hover:bg-slate-50/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                            <div className="text-[#0A1628] text-sm font-semibold font-['Source_Serif_4']">How are questionnaire answers verified?</div>
                            <div className="w-4 h-4 relative flex items-center justify-center shrink-0">
                                <div className="w-3.5 h-0.5 absolute bg-[#0A1628] group-open:hidden" />
                                <div className="w-0.5 h-3.5 absolute bg-[#0A1628] group-open:hidden" />
                                <div className="w-3.5 h-0.5 absolute bg-[#0A1628] hidden group-open:block" />
                            </div>
                        </summary>
                        <div className="w-full max-w-[720px] pb-5 flex flex-col justify-start items-start">
                            <div className="text-[#5c6672] text-[13px] font-normal font-['Inter'] leading-[20px]">
                                All published answers are verified against source-approved documentation, including independent third-party audits (like SOC 2), certified policies, and explicit platform architecture terms.
                            </div>
                        </div>
                    </details>

                    {/* Item 6 */}
                    <details className="group self-stretch border-b border-[#e3d9c2] w-full">
                        <summary className="self-stretch py-5 flex justify-between items-center w-full cursor-pointer hover:bg-slate-50/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                            <div className="text-[#0A1628] text-sm font-semibold font-['Source_Serif_4']">Can I request restricted evidence?</div>
                            <div className="w-4 h-4 relative flex items-center justify-center shrink-0">
                                <div className="w-3.5 h-0.5 absolute bg-[#0A1628] group-open:hidden" />
                                <div className="w-0.5 h-3.5 absolute bg-[#0A1628] group-open:hidden" />
                                <div className="w-3.5 h-0.5 absolute bg-[#0A1628] hidden group-open:block" />
                            </div>
                        </summary>
                        <div className="w-full max-w-[720px] pb-5 flex flex-col justify-start items-start">
                            <div className="text-[#5c6672] text-[13px] font-normal font-['Inter'] leading-[20px]">
                                Yes, enterprise evaluators can request access to restricted evidence, subject to executing an NDA and receiving provider approval. Use the "Request Restricted Evidence" form on this page.
                            </div>
                        </div>
                    </details>

                    {/* Item 7 */}
                    <details className="group self-stretch border-b border-[#e3d9c2] w-full">
                        <summary className="self-stretch py-5 flex justify-between items-center w-full cursor-pointer hover:bg-slate-50/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                            <div className="text-[#0A1628] text-sm font-semibold font-['Source_Serif_4']">Where are compliance, governance, privacy, and security details?</div>
                            <div className="w-4 h-4 relative flex items-center justify-center shrink-0">
                                <div className="w-3.5 h-0.5 absolute bg-[#0A1628] group-open:hidden" />
                                <div className="w-0.5 h-3.5 absolute bg-[#0A1628] group-open:hidden" />
                                <div className="w-3.5 h-0.5 absolute bg-[#0A1628] hidden group-open:block" />
                            </div>
                        </summary>
                        <div className="w-full max-w-[720px] pb-5 flex flex-col justify-start items-start">
                            <div className="text-[#5c6672] text-[13px] font-normal font-['Inter'] leading-[20px]">
                                They are organized categorically within the Evidence Library. You can use the search bar or filter dropdowns by domain (e.g., Privacy, Security) to easily locate specific details.
                            </div>
                        </div>
                    </details>

                    {/* Item 8 */}
                    <details className="group self-stretch border-b border-[#e3d9c2] w-full">
                        <summary className="self-stretch py-5 flex justify-between items-center w-full cursor-pointer hover:bg-slate-50/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                            <div className="text-[#0A1628] text-sm font-semibold font-['Source_Serif_4']">Is ZoikoLogia™ accessible?</div>
                            <div className="w-4 h-4 relative flex items-center justify-center shrink-0">
                                <div className="w-3.5 h-0.5 absolute bg-[#0A1628] group-open:hidden" />
                                <div className="w-0.5 h-3.5 absolute bg-[#0A1628] group-open:hidden" />
                                <div className="w-3.5 h-0.5 absolute bg-[#0A1628] hidden group-open:block" />
                            </div>
                        </summary>
                        <div className="w-full max-w-[720px] pb-5 flex flex-col justify-start items-start">
                            <div className="text-[#5c6672] text-[13px] font-normal font-['Inter'] leading-[20px]">
                                We are committed to digital accessibility and actively target WCAG 2.2 AA compliance across all user-facing interfaces. Conformance reports are available upon request.
                            </div>
                        </div>
                    </details>

                    {/* Item 9 */}
                    <details className="group self-stretch border-b border-[#e3d9c2] w-full">
                        <summary className="self-stretch py-5 flex justify-between items-center w-full cursor-pointer hover:bg-slate-50/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                            <div className="text-[#0A1628] text-sm font-semibold font-['Source_Serif_4']">How do I get procurement help?</div>
                            <div className="w-4 h-4 relative flex items-center justify-center shrink-0">
                                <div className="w-3.5 h-0.5 absolute bg-[#0A1628] group-open:hidden" />
                                <div className="w-0.5 h-3.5 absolute bg-[#0A1628] group-open:hidden" />
                                <div className="w-3.5 h-0.5 absolute bg-[#0A1628] hidden group-open:block" />
                            </div>
                        </summary>
                        <div className="w-full max-w-[720px] pb-5 flex flex-col justify-start items-start">
                            <div className="text-[#5c6672] text-[13px] font-normal font-['Inter'] leading-[20px]">
                                Our dedicated procurement support team can assist with vendor onboarding, contract review, and customized evaluation paths. Contact your assigned representative to get started.
                            </div>
                        </div>
                    </details>

                    {/* Item 10 */}
                    <details className="group self-stretch border-b border-[#e3d9c2] w-full">
                        <summary className="self-stretch py-5 flex justify-between items-center w-full cursor-pointer hover:bg-slate-50/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                            <div className="text-[#0A1628] text-sm font-semibold font-['Source_Serif_4']">How current is provider information?</div>
                            <div className="w-4 h-4 relative flex items-center justify-center shrink-0">
                                <div className="w-3.5 h-0.5 absolute bg-[#0A1628] group-open:hidden" />
                                <div className="w-0.5 h-3.5 absolute bg-[#0A1628] group-open:hidden" />
                                <div className="w-3.5 h-0.5 absolute bg-[#0A1628] hidden group-open:block" />
                            </div>
                        </summary>
                        <div className="w-full max-w-[720px] pb-5 flex flex-col justify-start items-start">
                            <div className="text-[#5c6672] text-[13px] font-normal font-['Inter'] leading-[20px]">
                                Evidence currentness is explicitly stated on each individual record. We continuously monitor and update these disclosures when source documents are renewed or revised.
                            </div>
                        </div>
                    </details>

                    {/* Item 11 */}
                    <details className="group self-stretch border-b border-[#e3d9c2] w-full">
                        <summary className="self-stretch py-5 flex justify-between items-center w-full cursor-pointer hover:bg-slate-50/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                            <div className="text-[#0A1628] text-sm font-semibold font-['Source_Serif_4']">How do I start an enterprise evaluation?</div>
                            <div className="w-4 h-4 relative flex items-center justify-center shrink-0">
                                <div className="w-3.5 h-0.5 absolute bg-[#0A1628] group-open:hidden" />
                                <div className="w-0.5 h-3.5 absolute bg-[#0A1628] group-open:hidden" />
                                <div className="w-3.5 h-0.5 absolute bg-[#0A1628] hidden group-open:block" />
                            </div>
                        </summary>
                        <div className="w-full max-w-[720px] pb-5 flex flex-col justify-start items-start">
                            <div className="text-[#5c6672] text-[13px] font-normal font-['Inter'] leading-[20px]">
                                You can initiate an enterprise evaluation by booking a demo or requesting a pilot. Our team will guide you through the process and provision the necessary secure sandbox access.
                            </div>
                        </div>
                    </details>
                </div>
            </div>
        </section>

        {/* 11. FINAL CTA BLOCK */}
        <section className="bg-[#ece5d3] py-16 px-6 md:px-12 lg:px-24 xl:px-[120px] flex justify-center w-full">
            <div className="w-full max-w-[1200px] px-0 md:px-8">
                <div className="w-full px-6 md:px-10 pt-14 pb-12 relative bg-[#0A1628] rounded-[20px] flex flex-col justify-start items-center gap-4 overflow-hidden shadow-lg">
                    {/* Top Radial Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00e5c9]/15 via-[#0A1628]/0 to-transparent pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col items-center gap-4">
                        <div className="flex justify-center items-center gap-2">
                            <div className="w-4 h-0.5 bg-[#00e5c9] rounded-xs" />
                            <div className="text-center text-[#00e5c9] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">Evidence First, Then Evaluation</div>
                        </div>
                        
                        <div className="w-full max-w-[620px] flex flex-col justify-start items-center">
                            <div className="text-center text-white text-[24px] font-semibold font-['Source_Serif_4'] leading-[32px]">
                                Bring provider due diligence into the evaluation with<br className="hidden md:block"/>the source context intact.
                            </div>
                        </div>
                        
                        <div className="w-full max-w-[560px] pb-1 flex flex-col justify-start items-center">
                            <div className="text-center text-[#8b93a0] text-[13px] font-normal font-['Inter'] leading-[22px]">
                                Review provider information, evidence availability, open questions, and authoritative<br className="hidden md:block"/>trust sources first, then choose the evaluation path that fits your team.
                            </div>
                        </div>
                        
                        <div className="w-full pt-3 flex justify-center items-center gap-4 flex-wrap">
                            <button suppressHydrationWarning className="px-6 py-2.5 bg-[#f59a23] hover:bg-[#e0891d] transition-colors rounded-md text-[#0A1628] text-sm font-semibold font-['Inter'] flex justify-center items-center">
                                Book a Demo
                            </button>
                            <button suppressHydrationWarning className="px-6 py-2.5 bg-transparent hover:bg-white/5 transition-colors border border-white/40 rounded-md text-white text-sm font-semibold font-['Inter'] flex justify-center items-center">
                                Request Pilot
                            </button>
                        </div>
                        
                        <div className="w-full max-w-[560px] mt-4 flex flex-col justify-start items-center">
                            <div className="text-center text-[#5c6672] text-[12px] font-normal font-['Inter'] leading-5">
                                No implication of due-diligence completion, procurement acceptance, pilot<br className="hidden md:block"/>eligibility, risk score, SLA, or contract outcome.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
}
