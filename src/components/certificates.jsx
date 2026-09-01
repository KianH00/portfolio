import { useState } from "react";

const certificates = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    image: "/cyber.jpg",
    verticalFix: false,
  },
  {
    title: "Fundamentals of Digital Marketing",
    issuer: "Google Skillshop",
    image: "/digmarket.jpg",
    verticalFix: true,
  },
  {
    title: "SEO Fundamentals",
    issuer: "HubSpot Academy",
    image: "/seo.png",
    verticalFix: false,
  },
];

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isVerticalFix, setIsVerticalFix] = useState(false);

  return (
    <section
      id="certificates"
      className="relative bg-slate-900 py-20 overflow-hidden"
    >
      {/* background accent */}
      <div className="absolute -top-32 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-white">Certificates</h2>

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {certificates.map((cert) => (
            <CertificateCard
              key={cert.title}
              title={cert.title}
              issuer={cert.issuer}
              onView={() => {
                setSelectedCert(cert.image);
                setIsVerticalFix(cert.verticalFix);
              }}
            />
          ))}
        </div>

        {/* MODAL */}
        {selectedCert && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
            onClick={() => {
              setSelectedCert(null);
              setIsVerticalFix(false);
            }}
          >
            <div
              className="w-full max-w-3xl bg-white rounded-xl overflow-hidden shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {isVerticalFix ? (
                <div className="p-2 flex items-center justify-center bg-white">
                  <img
                    src={selectedCert}
                    alt="Certificate"
                    className="max-h-[80vh] w-auto object-contain"
                  />
                </div>
              ) : (
                <img
                  src={selectedCert}
                  alt="Certificate"
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function CertificateCard({ title, issuer, onView }) {
  return (
    <div className="border border-slate-700 rounded-xl p-4 sm:p-5 bg-slate-800 flex flex-col h-full hover:border-slate-500 hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-base sm:text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="text-xs sm:text-sm text-gray-300 mt-1">{issuer}</p>

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