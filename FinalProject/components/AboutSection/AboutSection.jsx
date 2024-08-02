import Image from "next/image";

export default function AboutSection() {
  const items = [
    {
      title: "Books",
      description:
        "At The Book Hive, we believe in the power of stories to bring people together. Our diverse selection ensures there's something for every reader, whether you're picking up a lifelong favorite or your next great read. Our friendly staff is here to help you find the perfect book. Discover a place where everyone feels at home.",
    },
    {
      title: "Cafe",
      description:
        "The Book Hive Café is a cozy spot where community and comfort come together. Enjoy locally roasted coffee, delicious pastries, and light snacks as you relax with a good book or catch up with friends. Our welcoming atmosphere makes it the perfect place to unwind and feel at home.",
    },
    {
      title: "Events",
      description:
        "At The Book Hive, our events and lounge space bring people together. Join us for book clubs, board game nights, and movie screenings in a warm, welcoming atmosphere. It's the perfect way to connect, learn, and feel at home with your community.",
    },
  ];

  return (
    <section className="about">
    

      <section className="about_container">
        <div>
          <Image
            src="/images/about.png"
            alt="About"
            width={605}
            height={1066}
          />
        </div>
        <div className="content">
          {items.map((item, index) => {
            return (
              <div key={index}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
