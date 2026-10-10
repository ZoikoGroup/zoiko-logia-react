import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Release Notes | ZoikoLogia",
  description: "View the latest release notes and updates for ZoikoLogia.",
};

const SectionDivider = () => (
    <div className="w-full flex justify-center">
        <div className="w-[1200px] max-w-[1200px] h-px bg-[#e3d9c2]" />
    </div>
);

export default function ReleaseNotesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#faf8f4]">
      <main className="flex-grow flex flex-col items-center w-full">
        
        {/* 1. HERO SECTION */}
        <section className="bg-[#071a33] py-11 px-6 md:px-12 lg:px-[120px] flex justify-center w-full">
            <div className="w-full max-w-[1200px] flex flex-col justify-start items-start gap-10">
                <div className="text-white text-sm font-semibold font-['Inter']">Release Notes</div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-white text-4xl md:text-5xl font-semibold font-['Source_Serif_4'] leading-tight">
                        Product team reviewing an approved release record
                    </h1>
                </div>
            </div>
        </section>

        {/* 2. WHO USES RELEASE NOTES */}
        <section className="bg-[#faf8f4] py-16 px-6 md:px-12 lg:px-24 xl:px-[120px] flex justify-center w-full">
            <div className="w-full max-w-[1200px] flex flex-col justify-start items-start gap-8">
                <div className="flex justify-start items-center gap-2">
                    <div className="w-4 h-0.5 bg-[#d97f0e] rounded-xs" />
                    <div className="text-[#d97f0e] text-xs font-bold font-['Inter'] uppercase tracking-wide">Who Uses This Page</div>
                </div>
                <h2 className="text-[#0A1628] text-2xl font-semibold font-['Source_Serif_4'] leading-8">
                    Different readers, different jobs to be done.
                </h2>
                
                {/* Cards for users */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="bg-white border border-[#e3d9c2] rounded-lg p-4 min-h-[140px]">
                            {/* Content extracted from figma */}
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <SectionDivider />

        {/* 3-5. LATEST RELEASES, BROWSE & ARCHIVE */}
        <section className="bg-[#faf8f4] py-16 px-6 md:px-12 lg:px-24 xl:px-[120px] flex justify-center w-full">
            <div className="w-full max-w-[1200px] flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-start items-center gap-2">
                        <div className="w-4 h-0.5 bg-[#d97f0e] rounded-xs" />
                        <div className="text-[#d97f0e] text-xs font-bold font-['Inter'] uppercase tracking-wide">Latest Releases</div>
                    </div>
                    <h2 className="text-[#0A1628] text-2xl font-semibold font-['Source_Serif_4'] leading-8">
                        Filter and browse by change type, area, and date.
                    </h2>
                </div>

                {/* Search Bar Placeholder */}
                <div className="w-full bg-white border border-[#e3d9c2] rounded-lg p-5">
                    <div className="w-full h-10 border border-[#e3d9c2] rounded flex items-center px-4 text-[#8b93a0] text-sm">
                        Search release notes...
                    </div>
                </div>

                {/* Empty State Banner */}
                <div className="w-full bg-white border border-[#e3d9c2] rounded-lg p-8 flex flex-col gap-3">
                    <h4 className="text-[#0A1628] text-lg font-semibold font-['Source_Serif_4']">
                        No approved public release notes are currently published
                    </h4>
                    <p className="text-[#5c6672] text-sm font-['Inter'] leading-relaxed max-w-[800px]">
                        This isn't a claim that ZoikoLogia™ has no product changes — it means no governed release registry has published a public entry yet. A fabricated "recent updates" feed would be a trust failure, so we show this honestly instead. Filters will populate automatically once approved entries exist.
                    </p>
                    <Link href="/contact" className="text-[#0A1628] font-semibold text-sm font-['Inter'] mt-2 inline-block">
                        Ask About Recent Changes →
                    </Link>
                </div>
            </div>
        </section>

        <SectionDivider />

        {/* 6. RELEASE DETAIL PATTERN (illustrative) */}
        <section className="bg-[#efe8d6] py-16 px-6 md:px-12 lg:px-[120px] flex justify-center w-full">
            <div className="w-full max-w-[1200px] flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-start items-center gap-2">
                        <div className="w-4 h-0.5 bg-[#d97f0e] rounded-xs" />
                        <div className="text-[#d97f0e] text-xs font-bold font-['Inter'] uppercase tracking-wide">Release Detail Pattern</div>
                    </div>
                    <div className="inline-flex bg-[#0A1628] text-white px-3 py-1 rounded-sm text-xs w-fit">
                        Illustrative Layout — Not a Real Release
                    </div>
                </div>
                
                <div className="w-full bg-white border border-[#e3d9c2] rounded-lg p-8 min-h-[400px]">
                    {/* Placeholder for illustrative pattern */}
                    <div className="w-full border-b border-[#e3d9c2] pb-4 mb-4">
                        <div className="w-1/3 h-6 bg-gray-100 rounded" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="w-full h-4 bg-gray-50 rounded" />
                        <div className="w-full h-4 bg-gray-50 rounded" />
                        <div className="w-3/4 h-4 bg-gray-50 rounded" />
                    </div>
                </div>
            </div>
        </section>

        {/* 7. CHANGE TAXONOMY & ELIGIBILITY */}
        <section className="bg-[#faf8f4] py-16 px-6 md:px-12 lg:px-24 xl:px-[120px] flex justify-center w-full">
            <div className="w-full max-w-[1200px] flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-start items-center gap-2">
                        <div className="w-4 h-0.5 bg-[#d97f0e] rounded-xs" />
                        <div className="text-[#d97f0e] text-xs font-bold font-['Inter'] uppercase tracking-wide">Change Taxonomy & Release Eligibility</div>
                    </div>
                    <h2 className="text-[#0A1628] text-2xl font-semibold font-['Source_Serif_4'] leading-8">
                        A production recommendation, not a claim about current use.
                    </h2>
                    <p className="text-[#5c6672] text-sm font-['Inter'] leading-relaxed max-w-[800px]">
                        This taxonomy is a recommended controlled vocabulary. It is not an assertion that ZoikoLogia™ currently uses exactly these release classes — the UI renders only values present in a governed registry.
                    </p>
                </div>

                <div className="w-full mt-4">
                    <h2 className="text-[#0A1628] text-xl font-semibold font-['Source_Serif_4'] mb-4">
                        Eligibility States
                    </h2>
                    <div className="w-full border border-[#e3d9c2] rounded-lg overflow-hidden bg-white">
                        {/* Table placeholder */}
                        <div className="w-full h-12 bg-gray-50 border-b border-[#e3d9c2]" />
                        <div className="w-full h-12 border-b border-[#e3d9c2]" />
                        <div className="w-full h-12 border-b border-[#e3d9c2]" />
                        <div className="w-full h-12" />
                    </div>
                </div>
            </div>
        </section>

        <SectionDivider />

        {/* 8. DEPRECATION, REMOVAL & MIGRATION */}
        <section className="bg-[#faf8f4] py-16 px-6 md:px-12 lg:px-24 xl:px-[120px] flex justify-center w-full">
            <div className="w-full max-w-[1200px] flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-start items-center gap-2">
                        <div className="w-4 h-0.5 bg-[#d97f0e] rounded-xs" />
                        <div className="text-[#d97f0e] text-xs font-bold font-['Inter'] uppercase tracking-wide">Deprecation, Removal & Migration</div>
                    </div>
                    <h2 className="text-[#0A1628] text-2xl font-semibold font-['Source_Serif_4'] leading-8">
                        How time-bound changes will be handled, when they exist.
                    </h2>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white border border-[#e3d9c2] rounded-lg p-6 min-h-[160px]" />
                    <div className="bg-white border border-[#e3d9c2] rounded-lg p-6 min-h-[160px]" />
                    <div className="bg-white border border-[#e3d9c2] rounded-lg p-6 min-h-[160px]" />
                </div>
            </div>
        </section>

        {/* PHOTO BANNER */}
        <section className="w-full py-10 flex justify-center bg-[#071a33] text-white">
            <div className="w-full max-w-[1200px] px-8 flex flex-col items-start gap-4">
                <h3 className="text-2xl font-semibold font-['Source_Serif_4']">
                    Ask about a specific change directly.
                </h3>
                <p className="text-sm font-['Inter'] text-[#aebbc8] max-w-[600px]">
                    If you need detail on something not yet published here, a conversation gets you a straight answer faster than waiting on a feed.
                </p>
                <Link href="/book-demo" className="text-[#00e5c9] font-semibold text-sm mt-2">
                    Book a Demo →
                </Link>
            </div>
        </section>

        {/* 11. FINAL CTA */}
        <section className="bg-[#071a33] py-16 px-6 md:px-[120px] flex justify-center w-full text-white">
            <div className="w-full max-w-[1200px] flex flex-col items-center gap-6">
                <div className="flex justify-center items-center gap-2">
                    <div className="w-4 h-0.5 bg-[#00e5c9] rounded-xs" />
                    <div className="text-center text-[#00e5c9] text-xs font-bold font-['Inter'] uppercase tracking-wide">See It in Practice</div>
                </div>
                <h2 className="text-center text-[26px] font-semibold font-['Source_Serif_4'] leading-[33px]">
                    Bring your change-management questions to a real<br className="hidden md:block"/>conversation.
                </h2>
                <p className="text-center text-[#aebbc8] text-sm font-normal font-['Inter'] max-w-[600px]">
                    Review what's published here, then talk to our team about anything that isn't — without waiting on a feed to catch up.
                </p>
                
                <div className="flex justify-center items-center gap-4 mt-4">
                    <button suppressHydrationWarning className="px-5 py-2.5 bg-[#f59a23] hover:bg-[#e0891d] rounded-md text-[#0A1628] text-sm font-semibold font-['Inter']">
                        Book a Demo
                    </button>
                    <button suppressHydrationWarning className="px-5 py-2.5 bg-transparent hover:bg-white/5 border border-white/40 rounded-md text-white text-sm font-semibold font-['Inter']">
                        Request Pilot
                    </button>
                    <button suppressHydrationWarning className="px-5 py-2.5 bg-transparent hover:bg-white/5 border border-white/40 rounded-md text-white text-sm font-semibold font-['Inter']">
                        Sign In
                    </button>
                </div>
                
                <p className="text-center text-[#7688a0] text-xs mt-6 max-w-[600px]">
                    No roadmap commitment, live incident status, compatibility guarantee, or sensitive security disclosure is implied by this page.
                </p>
            </div>
        </section>

      </main>
    </div>
  );
}
