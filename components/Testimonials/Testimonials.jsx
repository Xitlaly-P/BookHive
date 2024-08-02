import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      image: "/images/user1.png",
      text: "“I started coming to The Book Hive for the board game nights, and it quickly became my favorite hangout. The sense of community here is amazing, and I've met so many wonderful people. Whether it's a game night or a book club meeting, there's always something fun going on.”",
    },
    {
      id: 2,
      image: "/images/user2.png",
      text: "“The Book Hive has become a second home for me. I love attending the book club meetings where I can discuss my favorite books with like-minded people. The atmosphere is always welcoming, and the café offers the best coffee in town. It's a place where everyone feels like family.”",
    },
    {
      id: 3,
      image: "/images/user3.png",
      text: "“The Book Hive's movie nights are a highlight of my week. It's such a welcoming space, and I love how they bring the community together. Plus, their selection of snacks and drinks makes it even better. It's the perfect place to unwind and enjoy a good film with friends.”",
    },
  ];

  return (
    <section className="testimonials">
      <div className="section_title_container">
        <h1>Testimonials</h1>
        <div className="section_title_underline"></div>
      </div>
      <section className="cards">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="card">
            <img src={testimonial.image} alt="User" />
            <p>{testimonial.text}</p>
          </div>
        ))}
      </section>

      <div className="bee_image">
        <Image src="/images/bee.png" alt="User" height={186} width={510} />
      </div>
    </section>
  );
}
