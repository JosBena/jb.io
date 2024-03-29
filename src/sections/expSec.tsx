import { WE } from "../assets/WE";

export const Experience = () => {
  return (
    <section id="experience" className="pt-0 px-0 bg-secondary">
      <div className="h1 text-center bg-dark py-3 pt-4 shadow-sm text-light">
        Experience
      </div>
      <div className="container mt-4">
        <div className="">
          <div className="d-flex justify-content-center">
            <div className="col-10 text-altlight pdfFix border border-dark rounded-3 bg-dark p-3 ps-5">
              <WE />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
