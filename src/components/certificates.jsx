import { useState } from "react";

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="max-w-5xl mx-auto px-6 py-16">
      
      <h2 className="text-3xl font-bold mb-8 text-white">
        Certificates
      </h2>

      {/* RESPONSIVE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

        <CertificateCard
          title="Introduction to Cybersecurity"
          issuer="Cisco Networking Academy"
          onView={() => setSelectedCert("/cyber.jpg")}
        />

        <CertificateCard
          title="Fundamentals of Digital Marketing"
          issuer="Google Skillshop"
          onView={() => setSelectedCert("/digmarket.jpg")}
        />

        <CertificateCard
          title="SEO Fundamentals"
          issuer="HubSpot Academy"
          onView={() => setSelectedCert("/seo.png")}
        />

      </div>

      {/* MODAL (MOBILE FRIENDLY) */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="w-full max-w-3xl max-h-[85vh] bg-white rounded-xl overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCert}
              alt="Certificate"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

    </section>
  );
}

function CertificateCard({ title, issuer, onView }) {
  return (
    <div className="border rounded-xl p-4 sm:p-5 bg-gray-900 flex flex-col h-full">

      <h3 className="text-base sm:text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="text-xs sm:text-sm text-gray-300 mt-1">
        {issuer}
      </p>

      <div className="mt-auto pt-4">
        <button
          onClick={onView}
          className="w-full text-sm px-4 py-2 border border-gray-500 text-white rounded-lg hover:bg-white hover:text-black active:scale-95 transition"
        >
          View Certificate
        </button>
      </div>

    </div>
  );
}

export default Certificates;