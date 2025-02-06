
import Entrepreneurships from "../../../assets/Entrepreneurships.avif";
import Family from "../../../assets/family.avif";
import manymore from "../../../assets/manymore.jpg";
const careers = [
  {
    title: "Entrepreneurship",
    image: Entrepreneurships,
    path: "https://www.econlib.org/library/Enc/Entrepreneurship.html#:~:text=Entrepreneurship%20is%20the%20process%20of,the%20entrepreneur%20makes%20a%20profit.",
  },
  {
    title: "Family Business",
    image: Family,
    path: "https://www.econlib.org/library/Enc/Entrepreneurship.html#:~:text=Entrepreneurship%20is%20the%20process%20of,the%20entrepreneur%20makes%20a%20profit.",
  },
  { 
      title: "& many more", 
      image: manymore, 
      path: "https://www.econlib.org/library/Enc/Entrepreneurship.html#:~:text=Entrepreneurship%20is%20the%20process%20of,the%20entrepreneur%20makes%20a%20profit."
  },
];

const Entrepreneurship = () => {
  return (
    <div className="lawcontainer">
      <h2 className="lawtitle">Entrepreneurship</h2>
      <p className="lawdescription">
        Entrepreneurs are leaders willing to take risk and exercise initiative.
        They look to take advantage of market opportunities often by innovating
        or improving existing products & services. Developed countries are
        moving from managerial to entrepreneurial economies. India, as an
        emerging economy, is ensuring that entrepreneurship is embraced as a
        career choice for the young. The ecosystem for Entrepreneurship commonly
        known as Start-Ups is at its brightest. While no specific education or
        training is required to start a business venture of your own, the odds
        of success increase exponentially when entrepreneurs have a solid
        education background. With the popularity of entrepreneurship rising,
        many universities/ institutes offer programs to groom budding
        entrepreneurs. These programs are available both at undergraduate (BBS,
        BBA) and post graduate levels (MBA). Most top business schools also
        provide courses for entrepreneurship. Entrepreneurs are job creators
        rather than job seekers. They create products and services. Other than
        the path of owning ones own business, participating in a family
        business or starting a partnered venture, entrepreneurs also take up
        roles in the field of business consulting, sales, research and
        development, not-for-profit management, and mid-level management.
        Trending Fields: E-Commerce, M-Commerce, EduTech, FinTech, Healthcare
      </p>
      {/* <p className="agriread-more">Read more</p> */}

      <h3 className="lawsubtitle">
        Click below to explore any of the following career(s)
      </h3>

      <div className="lawcareer-grid">
        {careers.map((career, index) => (
          <div key={index} className="lawcareer-card">
            <a href={career.path} target="_blank" rel="noopener noreferrer">
              <img
                src={career.image}
                alt={career.title}
                className="lawcareer-image"
              />
              <p className="lawcareer-title">{career.title}</p>
            </a>
            <a
              href={career.path}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              See Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Entrepreneurship;
