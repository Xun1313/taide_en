"use client";
import { useEffect } from "react";

const NewsListUnit = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(".accordion").accordion({
        header: "h3",
        collapsible: true,
        active: false,
      });
    });

    return () => {
      $(document).ready(function () {});
    };
  }, []);

  return (
    <article className="newsListUnit">
      <a id="toProject"></a>
      <div className="newsListUnit__body">
        <h2>Project Info</h2>
        <p>
          This project is grounded in Taiwanese culture, incorporating unique
          elements such as Taiwanese language, values, and customs, enabling
          generative AI to understand and respond to the needs of local users.
          It aims to create a trustworthy foundational model for generative AI
          engines.
          <br />
          <br />
          {`As AI applications become increasingly widespread, both businesses and
          the public have higher expectations. Consequently, there is an urgent
          demand for AI's performance, safety and robustness, as well as
          fairness and transparency.`}
        </p>
        <div className="accordion">
          <div className="accordion__item">
            <h3>Custom-Built for Taiwan</h3>
            <div className="accordion__con">
              <p>
                Creating a trustworthy generative AI dialogue engine
                foundational model specifically for Taiwan, the government and
                industry can select the model size by computational power
                according to their services, to train the model themselves and
                establish internal applications.
              </p>
            </div>
          </div>
          <div className="accordion__item">
            <h3>Diverse Traditional Chinese Training Materials</h3>
            <div className="accordion__con">
              <p>
                {`Incorporating various thematic textual resources and training
                materials to create specific domain application examples,
                enhancing the model's performance in different thematic areas.`}
              </p>
            </div>
          </div>
          <div className="accordion__item">
            <h3>Laying the Foundation for Widespread Application</h3>
            <div className="accordion__con">
              <p>
                Constructing a computational environment and application service
                platform, providing the necessary computational power for model
                development, and laying the groundwork for subsequent promotion
                and application.
              </p>
            </div>
          </div>
          <div className="accordion__item">
            <h3>Strengthening the AI Development Environment</h3>
            <div className="accordion__con">
              <p>
                Through legal analysis, establishment of testing norms, and
                development of evaluation tools, the AI development environment
                is strengthened and public trust is enhanced.
              </p>
            </div>
          </div>
          <div className="accordion__item">
            <h3>Public-Private Collaboration for Mutual Benefit</h3>
            <div className="accordion__con">
              <p>
                Utilizing public-private collaboration to assist industries in
                integrating foundational models, these can be used for specific
                industrial applications. Custom adjustments are made with data
                provided by the businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsListUnit;
