import NavBar from "./NavBar";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <div className="h-screen flex flex-col justify-between">
        <div className="flex flex-col items-center px-4 py-8">
          <div className="text-3xl mb-8">
            <h1>About Us</h1>
          </div>
          <div className="max-w-4xl text-lg">
            <p className="pt-5">
              E Connect Ltd is a Tanzanian-based company specializing in talent
              development and entertainment solutions for students in schools,
              college and universities. Founded in 2016 as a sole proprietor and
              incorporated in 2023, the company has quickly gained recognition
              for its unique approach to combining education, sports and
              entertainment to foster creativity and skill development among
              young learners with creative talents. With authorization from
              President's Office, Regional Administration and Local Government
              Tanzania-PO-RALG, the company is implementing its program by
              partnering with government agencies and ministries including
              BASATA, COSOTA, Ministry of Culture, Arts and Sports, Dar es
              Salaam City Council as well as private companies. We implement
              talent development and entertainment both in primary and secondary
              schools under the program called
              <b> Creative Talent Masters- CTM Program</b> of which we are now
              operating in three regions namely{" "}
              <b>Dar es Salaam, Mbeya and Mwanza.</b>
            </p>
            <p className="pt-10">
              Creative Talent Masters serve as a platform for budding talents
              from students to shine on TV, Radios, Social Media pages, CTM
              Festival & Awards. Through a series of auditions, competitions,
              shows and mentorship sessions, the program discover, nurture, and
              promote the next generation of creative geniuses.
            </p>
            <p className="text-xl font-bold pt-10">
              Our comprehensive services for the program includes:
            </p>
            <div className="p-8">
              <h1 className="text-2xl font-bold mb-4">
                Talent Scouting and Management
              </h1>
              <p className="text-lg mb-6">
                Identifying and nurturing promising talents in music, acting,
                sports, and more.
              </p>
              <h1 className="text-2xl font-bold mb-4">Event Production</h1>
              <p className="text-lg mb-6">
                We have established, organized, and managed various event
                programs including CTM Show, CTM Awards, CTM Festival, Talk with
                your Star, and Imagine Tomorrow. All of these programs aim to
                bring together creative minds for a transformative society.
              </p>
              <h1 className="text-2xl font-bold mb-4">Training Programs</h1>
              <p className="text-lg mb-6">
                Through Creative Talent Masters Club-CTM Club in schools, we
                conduct training and workshop courses in performing arts, media
                production, ethics, and personal development.
              </p>
              <p className="text-lg">
                Our team of industry veterans and creative professionals ensures
                that every project we undertake meets the highest standards of
                quality and innovation.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
