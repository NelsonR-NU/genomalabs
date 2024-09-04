export default function Testimonials() {
  return (
    <section className="p-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Partners Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-800 shadow-lg">
            <p className="mb-4">ARMs technology has revolutionized our industry.</p>
            <p className="font-bold">- John Doe, CEO of TechCorp</p>
          </div>
          <div className="p-8 bg-gray-800 shadow-lg">
            <p className="mb-4">Partnering with ARM was the best decision weve made.</p>
            <p className="font-bold">- Jane Smith, CTO of InnovateX</p>
          </div>
          <div className="p-8 bg-gray-800 shadow-lg">
            <p className="mb-4">ARMs solutions are unparalleled in the market.</p>
            <p className="font-bold">- Mike Johnson, Head of R&D at FutureTech</p>
          </div>
        </div>
      </div>
    </section>
  );
}
