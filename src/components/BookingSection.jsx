import InfoPanel from './InfoPanel';
import BookingForm from './BookingForm';

const BookingSection = () => {
  return (
    <section id="booking" className="relative w-full flex items-center py-16 md:py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          <InfoPanel />
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
