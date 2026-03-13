import React from "react";

const Team = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center">People</h2>
      <div className="row mx-auto my-5" style={{ width: "75%" }}>
        <div className="col mt-5 text-center ">
          <img
            className="rounded-circle"
            src="../Media/images/nithinKamath.jpg"
            alt="Nithin"
            style={{ width: "65%" }}
          />
          <h5 className="mt-4">
            Nithin Kamath
            <br />
            <span className="text-muted mt-5 fs-6">Founder, CEO</span>
          </h5>
        </div>
        <div className="col mt-5 fs-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on <a href="/">Homepage</a> / <a href="/">Trading QnA</a> /{" "}
            <a href="/">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
