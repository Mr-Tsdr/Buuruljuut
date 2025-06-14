export default function ContactMap() {
  return (
    <section className="h-96 bg-gray-200">
      <div className="w-full h-full relative">
        {/* Placeholder for Google Maps */}
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 text-lg mb-2">Interactive Map</p>
            <p className="text-gray-500">50 Car World, 2nd Breaking St, Newyork, USA 10002</p>
          </div>
        </div>

        {/* You can replace this with an actual Google Maps embed */}
        {/* 
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635959729807!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        */}
      </div>
    </section>
  )
}
