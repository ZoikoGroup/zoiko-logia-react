
import React from 'react';

export default function About(){
  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
        <div className="text-2xl font-bold text-slate-900">ZoikoLogia</div>
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-orange-500">Platform</a>
          <a href="#" className="hover:text-orange-500">Who it serves</a>
          <a href="#" className="hover:text-orange-500">Solutions</a>
          <a href="#" className="hover:text-orange-500">Resources</a>
          <a href="#" className="hover:text-orange-500">Pricing</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm font-medium hover:text-orange-500">Sign in</a>
          <button className="px-4 py-2 text-sm font-semibold text-white bg-orange-500 rounded hover:bg-orange-600">
            Book a Demo
          </button>
          <button className="px-4 py-2 text-sm font-semibold text-slate-900 border border-slate-900 rounded hover:bg-slate-50">
            Request Pilot
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-orange-400 text-sm font-semibold tracking-wider uppercase mb-4">About ZoikoLogia</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              Governed AI accounting intelligence, built for professional work.
            </h1>
            <p className="text-slate-300 text-lg mb-8">
              ZoikoLogia acts as a governed advisor for tax, audit, finance, and accounting professionals.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600">
                Book a Demo
              </button>
              <button className="px-6 py-3 border border-white text-white font-semibold rounded hover:bg-slate-800">
                Find out how
              </button>
            </div>
          </div>
          <div className="relative h-64 md:h-96 w-full bg-slate-700 rounded-lg overflow-hidden">
             {/* Image Placeholder */}
            <div className="w-full h-full flex items-center justify-center text-slate-400 border-2 border-dashed border-slate-500">
              Hero Image Space
            </div>
          </div>
        </div>
      </section>

      {/* Why ZoikoLogia Section */}
      <section className="bg-orange-50 px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-orange-500 text-sm font-semibold tracking-wider uppercase mb-4">Why Us</p>
              <h2 className="text-3xl font-serif font-bold mb-6 text-slate-900">
                Accounting work can't run on unsupported AI confidence.
              </h2>
              <p className="text-gray-600 mb-8">
                Accounting, audit, tax, and compliance work require source attribution, jurisdictional awareness, and verifiable logic.
              </p>
              <button className="px-6 py-2 border border-slate-900 text-slate-900 font-semibold rounded hover:bg-slate-100">
                View the Platform
              </button>
            </div>
            <div className="h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden">
              {/* Image Placeholder */}
              <div className="w-full h-full flex items-center justify-center text-gray-500 border-2 border-dashed border-gray-400">
                High-Five Image Space
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 border-t border-orange-200 pt-12">
            <div>
              <div className="w-8 h-8 bg-orange-200 rounded-full mb-4 flex items-center justify-center text-orange-700 font-bold">1</div>
              <h3 className="font-bold text-slate-900 mb-2">Source-governed</h3>
              <p className="text-sm text-gray-600">Approved, managed sources for reliable information.</p>
            </div>
            <div>
              <div className="w-8 h-8 bg-orange-200 rounded-full mb-4 flex items-center justify-center text-orange-700 font-bold">2</div>
              <h3 className="font-bold text-slate-900 mb-2">Enterprise-oriented</h3>
              <p className="text-sm text-gray-600">Secure solution, audit artifacts, and reliable provenance.</p>
            </div>
            <div>
              <div className="w-8 h-8 bg-orange-200 rounded-full mb-4 flex items-center justify-center text-orange-700 font-bold">3</div>
              <h3 className="font-bold text-slate-900 mb-2">Responsible by design</h3>
              <p className="text-sm text-gray-600">Built to support human judgment, not replace it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What it Does Section */}
      <section className="bg-white px-8 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-orange-500 text-sm font-semibold tracking-wider uppercase mb-4">What ZoikoLogia Does</p>
            <h2 className="text-3xl font-serif font-bold mb-6 text-slate-900">
              The AI advisor for governed accounting work.
            </h2>
            <p className="text-gray-600 mb-8">
              It helps you analyze patterns, calculate underlying tax rates, and recognize anomalies instantly across multiple data points.
            </p>
            
            {/* Tabs */}
            <div className="flex space-x-6 border-b border-gray-200 mb-6">
              <button className="pb-2 border-b-2 border-orange-500 text-orange-600 font-semibold">Learning</button>
              <button className="pb-2 text-gray-500 hover:text-gray-800">Real-time</button>
              <button className="pb-2 text-gray-500 hover:text-gray-800">Review</button>
              <button className="pb-2 text-gray-500 hover:text-gray-800">Attest</button>
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Learning Mode</h3>
            <p className="text-sm text-gray-600">
              Facilitates accurate work outputs guided by active rules and policies.
            </p>
          </div>
          <div className="h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
            {/* Image Placeholder */}
            <div className="w-full h-full flex items-center justify-center text-gray-500 border-2 border-dashed border-gray-400">
              Meeting Image Space
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="bg-orange-50 px-8 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-orange-500 text-sm font-semibold tracking-wider uppercase mb-4">Who We Serve</p>
          <h2 className="text-3xl font-serif font-bold mb-8 text-slate-900 max-w-2xl mx-auto">
            Accounting intelligence for the people who ask, prepare, review, govern, and sign.
          </h2>
          <div className="flex justify-center space-x-4 mb-12">
            <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600">
              Explore Solutions
            </button>
            <button className="px-6 py-2 border border-slate-900 text-slate-900 font-semibold rounded hover:bg-slate-100">
              Read Advisors
            </button>
          </div>

          {/* Grid of Personas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {[
              "Tax Expert", "Auditor", "Business Owner", "Operations Leader",
              "Finance Manager", "CFO", "Audit Partner", "CPA"
            ].map((role, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded shrink-0">
                  {/* Avatar Placeholder */}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{role}</h4>
                  <p className="text-xs text-gray-500 mt-1">Dedicated AI workspace for {role.toLowerCase()} operations.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="bg-slate-900 text-white px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-orange-400 text-sm font-semibold tracking-wider uppercase mb-4">How Does It Work</p>
          <h2 className="text-3xl font-serif font-bold mb-12">
            Governance first. Model capability second.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left mb-12">
            {[
              { title: "Source authoring first", desc: "Start from a vetted library of standard procedures." },
              { title: "Multi-stage feedback", desc: "Collect insights from peers and designated reviewers." },
              { title: "Evidence before trust", desc: "Check every assertion against source documents." },
              { title: "Privacy-first processing", desc: "Data is completely isolated in your secure tenant." },
              { title: "Graduated policy execution", desc: "Framework and result guidance rule deployments." },
              { title: "Human judgment preserved", desc: "System supports professionals - it never replaces them." }
            ].map((feature, idx) => (
              <div key={idx}>
                <div className="w-6 h-6 bg-slate-800 border border-slate-600 rounded flex items-center justify-center mb-4 text-orange-400 text-xs">
                  {/* Icon Placeholder (Check mark replacement) */}
                  ✓
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>

          <button className="px-6 py-2 border border-white text-white font-semibold rounded hover:bg-slate-800">
            View Governance Framework
          </button>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="bg-white px-8 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden">
             {/* Image Placeholder */}
             <div className="w-full h-full flex items-center justify-center text-gray-500 border-2 border-dashed border-gray-400">
              Professional Writing Image Space
            </div>
          </div>
          <div>
            <p className="text-orange-500 text-sm font-semibold tracking-wider uppercase mb-4">Trust & Security</p>
            <h2 className="text-3xl font-serif font-bold mb-6 text-slate-900">
              Privacy and auditability are product requirements, not add-ons.
            </h2>
            <p className="text-gray-600 mb-8">
              Tenant isolation, encryption, regional routing, and replay audits built-in to the core platform architecture.
            </p>
            <button className="px-6 py-2 border border-slate-900 text-slate-900 font-semibold rounded hover:bg-slate-100">
              Visit Privacy & Security
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-orange-50 px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-orange-500 text-sm font-semibold tracking-wider uppercase mb-4">FAQ</p>
          <h2 className="text-3xl font-serif font-bold mb-8 text-slate-900">
            A few things people ask first.
          </h2>

          <div className="border-t border-slate-200">
            {[
              { q: "Is ZoikoLogia a chatbot?", a: "No. It is a governed accounting intelligence platform designed for specific operational workflows." },
              { q: "How is data access secured?", a: "" },
              { q: "Can I connect my own data sources?", a: "" },
              { q: "Is it built for enterprises?", a: "" }
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-slate-200 py-4">
                <button className="w-full flex justify-between items-center text-left font-bold text-slate-900 py-2">
                  <span>{faq.q}</span>
                  <span className="text-slate-400 font-normal">{idx === 0 ? '-' : '+'}</span>
                </button>
                {faq.a && (
                  <p className="text-gray-600 text-sm mt-2 pb-4">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-white px-8 py-16">
        <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-xl p-12 text-center">
          <p className="text-orange-400 text-sm font-semibold tracking-wider uppercase mb-4">Start with Governed Accounting AI</p>
          <h2 className="text-3xl font-serif font-bold mb-6">
            See how ZoikoLogia fits your organization.
          </h2>
          <p className="text-slate-300 mb-8">
            We're glad to walk through the platform, governance model, and architecture.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600">
              Book a Demo
            </button>
            <button className="px-6 py-3 border border-white text-white font-semibold rounded hover:bg-slate-800">
              Request Pilot
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 px-8 py-12 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <div className="text-2xl font-bold text-white mb-4">ZoikoLogia</div>
            <p className="max-w-xs">Governed AI accounting intelligence, built for professional human judgment.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Our Story</a></li>
              <li><a href="#" className="hover:text-white">Knowledge Graph</a></li>
              <li><a href="#" className="hover:text-white">AI Engine</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">AI Advisor</a></li>
              <li><a href="#" className="hover:text-white">Audit Hub</a></li>
              <li><a href="#" className="hover:text-white">Tax Studio</a></li>
              <li><a href="#" className="hover:text-white">Enterprise</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">API Reference</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Release Notes</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Legal</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2026 ZoikoLogia Technologies. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

