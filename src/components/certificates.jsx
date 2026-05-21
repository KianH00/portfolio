import { useState } from "react";

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="max-w-5xl mx-auto px-6 py-20">

      <h2 className="text-3xl font-bold mb-10 text-white">
        Certificates
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

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

      {/* MODAL */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="w-[80%] h-[80%] bg-white rounded-xl overflow-hidden shadow-xl"
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
    <div className="border rounded-xl p-5 bg-gray-900 transition duration-300 hover:scale-105 hover:shadow-md flex flex-col h-full">

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="text-sm text-gray-300 mt-1">
        {issuer}
      </p>

      {/* PUSH BUTTON TO BOTTOM */}
      <div className="mt-auto pt-4">
        <button
          onClick={onView}
          className="w-full text-sm px-4 py-2 border border-gray-500 text-white rounded-lg hover:bg-white hover:text-black transition"
        >
          View Certificate
        </button>
      </div>

    </div>
  );
}

export default Certificates;