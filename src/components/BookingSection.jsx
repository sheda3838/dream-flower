import InfoPanel from './InfoPanel';
import BookingForm from './BookingForm';

const BookingSection = () => {
  return (
    <section id="booking" className="relative w-full min-h-screen flex items-center py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <InfoPanel />
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
