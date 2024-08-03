import Image from "next/image";

const JoinSection = () => {
  return (
    <section className="join_section">
      <div className="section_title_container" id="join">
        <h1>Join</h1>
        <div className="section_title_underline"></div>
      </div>
      <div className="join_container">
        <div className="content">
          <h2>Join the Hive Today</h2>
          <p>
            Get a FREE dessert on us by signing up for our weekly newsletter!
          </p>
          <p>
            Stay connected with The Book Hive to get the latest updates on new
            books, upcoming events, and special promotions. Sign up today and
            treat yourself!
          </p>
          <div class="email-input-container">
            <img
              className="email-icon"
              src="/images/mail.svg"
              alt="Email Icon"
            />
            <input
              type="email"
              placeholder="Enter Email Address"
              class="email-input"
            />
            <div type="submit" class="submit-button">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 24H38M38 24L24 10M38 24L24 38"
                  stroke="#1E1E1E"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/join.png"
            alt="People enjoying coffee at The Book Hive"
            width={580}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
