import NavBar from "./NavBar";
import Footer from "./Footer";

const SchoolsWithTalent = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col h-screen">
        <div className="flex-grow flex justify-center items-center">
          <div className="text-3xl">
            <h1>Coming soon</h1>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SchoolsWithTalent;
