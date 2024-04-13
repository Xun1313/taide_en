import { WithContext } from "schema-dts";
import Image from "next/image";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";
import btnDownArrow from "~/images/icon/btn_downArrow.svg";
import bg_download from "~/images/download/bg_download.png";
import Navigation from "./components/Navigation";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "TAIDE Model - TAIDE Taiwanese Native Large Language Model",
  description:
    "Complete guide to unlock download and application secrets of TAIDE model version. Upgrade your AI skills and quickly get started and practice!",
  openGraph: {
    description:
      "Complete guide to unlock download and application secrets of TAIDE model version. Upgrade your AI skills and quickly get started and practice!",
  },
};

const DownloadModel = () => {
  const jsonLd: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Complete guide to unlock download and application secrets of TAIDE model version. Upgrade your AI skills and quickly get started and practice!",
    additionalName:
      "Complete guide to unlock download and application secrets of TAIDE model version. Upgrade your AI skills and quickly get started and practice!",
    url: process.env.WEBSITE_DOMAIN,
    datePublished: "2023-03-02",
  };

  return (
    <>
      <article className="downloadUnit">
        <div className="downloadUnit__body">
          <div className="cardDownload">
            <div className="cardDownload__item max">
              <h1>TAIDE Model</h1>
              <div className="photo">
                <Image src={bg_download} alt="TAIDE Model" />
              </div>
            </div>
            <div className="cardDownload__item">
              <Navigation />
            </div>
          </div>
          <div className="downloadDetail">
            <div className="downloadDetail__left">
              <div className="article__item terms">
                <h2>·TAIDE L Models Community License Agreement</h2>
                <div className="article_＿date">
                  Release Date: April 15 , 2024
                </div>
                <div className="article__con">
                  <p>Preambles.</p>
                  <p>
                    National Applied Research Laboratories (hereinafter referred
                    to as {'"NARLabs"'}) has developed and implemented TAIDE L
                    models. When You obtain or start using TAIDE L models and
                    its materials (hereinafter collectively referred to as the{" "}
                    {'"TAIDE L models"'}), it means that You have read,
                    understood, and agreed to accept all the contents of this
                    Agreement. If You do not agree with the contents of this
                    Agreement, or if Your country or region excludes all or part
                    of the contents of this Agreement, You should immediately
                    stop using TAIDE L models.
                  </p>

                  <h3>1. Definitions.</h3>
                  <p>
                    <span>1.1 </span>
                    <span>
                      License: means NARLabs agrees that You may use, reproduce,
                      modify, and distribute TAIDE L models, subject to the
                      terms of this Agreement.
                    </span>
                  </p>
                  <p>
                    <span>1.2 </span>
                    <span>
                      Licensor: means the legal entity that owns all rights and
                      intellectual property rights to TAIDE L models. The
                      licensor under this Agreement is NARLabs or the
                      individuals or other legal entities authorized by NARLabs
                      to sublicense to Third Parties.
                    </span>
                  </p>
                  <p>
                    <span>1.3 </span>
                    <span>
                      You (or {'"Your"'}): means the authorized person under
                      this Agreement, namely individuals or other legal entities
                      who may exercise the rights granted in this Agreement
                      and/or use or access TAIDE L models for any purpose, in
                      any field.
                    </span>
                  </p>
                  <p>
                    <span>1.4 </span>
                    <span>
                      Third Party: means any individual or legal entity other
                      than the {'"Licensor"'} or {'"You."'}
                    </span>
                  </p>
                  <p>
                    <span>1.5 </span>
                    <span>
                      TAIDE L models: mean artificial intelligence-based
                      language and dialogue model, software, and algorithm,
                      including machine learning model code, parameters of the
                      trained model, driver code, etc. You may adjust or modify
                      TAIDE L models by using the content or data that You own
                      or that You are authorized to use, in order to develop
                      systems or models that meet Your requirements.
                    </span>
                  </p>
                  <p>
                    <span>1.6 </span>
                    <span>
                      Derived Model: means a model built by transferring the
                      parameters or output modes of TAIDE L models, a model
                      trained by using synthetic data generated by using TAIDE L
                      models, or a model built by modifying or altering TAIDE L
                      models and having similar performance to TAIDE L models.
                    </span>
                  </p>
                  <p>
                    <span>1.7 </span>
                    <span>
                      Personal Data: means data that can directly or indirectly
                      identify a specific natural person. The processing of
                      personal data includes but is not limited to recording,
                      inputting, storing, editing, correcting, duplicating,
                      retrieving, deleting, outputting, connecting, or
                      internally transferring.
                    </span>
                  </p>

                  <h3>2. License Grant and Restrictions.</h3>
                  <p>
                    <span>2.1 </span>
                    <span>
                      Subject to the terms and conditions of this Agreement,
                      NARLabs hereby grants You a non-exclusive, worldwide,
                      non-transferable, non-sublicensable, and free-of-charge
                      license.
                    </span>
                  </p>
                  <p>
                    <span>2.2 </span>
                    <span>
                      You acknowledge that TAIDE L models are based on Meta{" "}
                      {"AI's"} {'"Llama 2 models."'} Terms, conditions, and
                      agreements relevant to Llama 2 models (including but not
                      limited to the META AI Llama 2 Community License
                      Agreement, META AI Llama 2 Acceptable Use Policy), please
                      refer to: https://ai.meta.com/llama/. You shall go online
                      to review the agreements and agree to comply with them.
                    </span>
                  </p>
                  <p>
                    <span>2.3 </span>
                    <span>
                      You may add new intellectual property statements to the
                      derived models You build, and You may also provide
                      conditions different from those in this Agreement for Your
                      derived models, under the circumstances that You must
                      ensure that the conditions such as use and reproduction of
                      such derived models do not conflict with this Agreement.
                    </span>
                  </p>
                  <p>
                    <span>2.4 </span>
                    <span>
                      You may have relevant rights to Your derived models under
                      applicable laws, however, You must meet the following
                      conditions. In the event that You breach any of the
                      following conditions, the license granted to You under
                      this Agreement shall immediately be terminated:
                    </span>
                  </p>
                  <div className="ml-1">
                    <p>
                      <span>2.4.1</span>
                      <span>
                        You shall not use, reproduce, modify, alter, or build
                        any derived models related to all or part of TAIDE L
                        models for any military or illegal purposes.
                      </span>
                    </p>
                    <p>
                      <span>2.4.2</span>
                      <span>
                        Shall there be any derived models obtained through
                        modification or alteration of TAIDE L models, You must
                        prominently indicate or specify the modifications made,
                        and such modifications must not violate the terms and
                        conditions under this Agreement.
                      </span>
                    </p>
                    <p>
                      <span>2.4.3</span>
                      <span>
                        Your modification or any use of TAIDE L models
                        (including but not limited to the use of derived models
                        obtained through TAIDE L models ) shall not violate the
                        requirements of the laws of the Republic of China or
                        laws of other countries or applicable regulations of
                        international organizations (including but not limited
                        to the EU Artificial Intelligence Act), nor shall such
                        modification or use infringe upon the rights of NARLabs
                        or any Third Party (including but not limited to
                        personality rights such as rights of portrait,
                        reputation, privacy, intellectual property rights such
                        as copyright, patent, trade secret, or other property
                        rights).
                      </span>
                    </p>
                    <p>
                      <span>2.4.4</span>
                      <span>
                        If You reproduce, publicly recite, publicly broadcast,
                        publicly perform, publicly transmit, publicly display,
                        adapt, edit, distribute, or rent Your derived models to
                        Your users or recipients, You shall provide them with a
                        copy of this Agreement and ensure their compliance with
                        all the terms and conditions of this Agreement.
                      </span>
                    </p>
                    <p>
                      <span>2.4.5</span>
                      <span>
                        Without the prior written consent of NARLabs, You shall
                        not claim to be NARLabs or {"NARLabs'"} agents,
                        employees, partners, or any other identity without{" "}
                        {"NARLabs'"} express consent, nor shall You claim to be
                        the owner of TAIDE L models. Furthermore.
                      </span>
                    </p>
                    <p>
                      <span>2.4.6</span>
                      <span>
                        You agree to access TAIDE L models only through{" "}
                        {"NARLabs'"}
                        website or the websites authorized by NARLabs.
                      </span>
                    </p>
                    <p>
                      <span>2.4.7</span>
                      <span>
                        You shall not, in any way, directly or indirectly, allow
                        or assist any Third Party to violate the terms and
                        conditions under this Agreement.
                      </span>
                    </p>
                  </div>

                  <h3>3. Intellectual Property Rights.</h3>
                  <p>
                    <span>3.1 </span>
                    <span>
                      The intellectual property rights (including but not
                      limited to moral rights and economic rights) of the
                      derived models built by You through the use of TAIDE L
                      models shall belong to You, in accordance with applicable
                      laws. However, You also acknowledge that the protection of
                      such derivative work shall not affect the existing rights
                      owned by NARLabs in the pre-existing work, namely TAIDE L
                      models.
                    </span>
                  </p>
                  <p>
                    <span>3.2 </span>
                    <span>
                      You understand and agree that in case of any legal
                      disputes (including but not limited to defamation,
                      plagiarism, or other infringements of {"others'"}{" "}
                      copyright or other rights), or lawsuits, consumer disputes
                      or similar matters brought against You by Your users or
                      Third Parties, due to Your use, adaptation, or alteration
                      of the content, form, or name of TAIDE L models, You shall
                      solely bear all relevant legal liabilities. On the other
                      hand, if NARLabs suffers any damages as a result, NARLabs
                      may also seek compensation from You.
                    </span>
                  </p>

                  <h3>4. Trademarks.</h3>
                  <p>
                    Except for reasonable use, You should not arbitrarily use
                    any trademarks, service marks, website names, or other names
                    of works of NARLabs (hereinafter collectively referred to as
                    the {'"Logos"'}). You should not, without the prior written
                    consent of NARLabs, display, use, or apply for trademark
                    registration of the aforementioned Logos, either separately
                    or collectively, in any country or region; nor should You
                    explicitly or implicitly indicate to others that You have
                    the right to display, use, or dispose of the aforementioned
                    Logos. If You violate this article and cause damage to
                    NARLabs or any Third Party, You shall bear the relevant
                    legal liabilities.
                  </p>

                  <h3>5. Disclaimer and Limitation of Liability.</h3>
                  <p>
                    <span>5.1 </span>
                    <span>
                      Unless required by applicable law, the services provided
                      by NARLabs under this Agreement are on an {'"as-is"'} and{" "}
                      {'"as available"'} basis. NARLabs explicitly disclaims all
                      kinds of express or implied warranties or conditions,
                      including but not limited to merchantability, fitness for
                      a particular purpose, non-infringement, or ownership. You
                      understand and agree that You should bear all risks
                      associated with the use and modification of TAIDE L
                      models, and You should confirm the legality of using TAIDE
                      L models or distributing derived models and assume all
                      legal liabilities related thereto on Your own.
                    </span>
                  </p>
                  <p>
                    <span>5.2 </span>
                    <span>
                      You understand and agree that NARLabs, its agents,
                      employees, affiliated units, or partners shall not be
                      liable for any damages or losses incurred by You from the
                      use or modification of TAIDE L models, even if NARLabs has
                      been notified or is aware of the possibility of such
                      damages or losses. On the other hand, if NARLabs suffers
                      any damages or losses due to Your illegal use or any
                      violation of the terms and conditions under this
                      Agreement, NARLabs reserves the right to seek full
                      compensation from You.
                    </span>
                  </p>
                  <p>
                    <span>5.3 </span>
                    <span>
                      Despite {"NARLabs'"} efforts to maintain the legality and
                      accuracy of TAIDE L models throughout its training stages,
                      limitations in detection and protection mechanisms may
                      compromise the accuracy of TAIDE L {"models'"} output
                      results. Therefore, NARLabs explicitly states that it does
                      not assume any risk or liability for data security issues
                      resulting from Your use of TAIDE L models and its source
                      code or any risks and liabilities arising from TAIDE L
                      {"models'"} misuse, abuse, unauthorized or illegal use.
                    </span>
                  </p>
                  <p>
                    <span>5.4 </span>
                    <span>
                      You understand and agree that NARLabs does not guarantee
                      or promise that TAIDE L models shall meet Your
                      requirements. You must train, improve, or optimize Your
                      derived models on Your own and bear any risks and
                      consequences that may arise from doing so.
                    </span>
                  </p>
                  <p>
                    <span>5.5 </span>
                    <span>
                      You understand and agree to comply with all applicable
                      laws in processing personal data, especially complying
                      with the Personal Data Protection Act. Please be advised
                      that even though NARLabs grants You the right to use TAIDE
                      L models under this Agreement, it does not mean that You
                      have been authorized to process related personal data. As
                      an independent data processor, You must confirm and comply
                      with the requirements of relevant laws on Your own.
                    </span>
                  </p>
                  <p>
                    <span>5.6 </span>
                    <span>
                      You understand and agree that apart from the
                      aforementioned terms, NARLabs reserves the right to
                      determine whether You have engaged in other acts that
                      violate relevant laws or this Agreement and to take
                      appropriate legal measures accordingly. In addition,
                      NARLabs has the right to notify relevant government
                      agencies. If such situations arise, You shall bear all
                      legal liabilities arising therefrom.
                    </span>
                  </p>
                  <p>
                    <span>5.7 </span>
                    <span>
                      You understand and agree that You shall be responsible for
                      the intellectual property risks associated with the use of
                      TAIDE L models and Your derived models or any damages or
                      losses related thereto.
                    </span>
                  </p>
                  <p>
                    <span>5.8 </span>
                    <span>
                      {'"Damages or losses"'} in this Agreement include:
                    </span>
                  </p>
                  <div className="ml-1">
                    <p>
                      <span>5.8.1</span>
                      <span>loss of income;</span>
                    </p>
                    <p>
                      <span>5.8.2</span>
                      <span>actual or anticipated profit loss;</span>
                    </p>
                    <p>
                      <span>5.8.3</span>
                      <span>anticipated savings loss;</span>
                    </p>
                    <p>
                      <span>5.8.4</span>
                      <span>business loss;</span>
                    </p>
                    <p>
                      <span>5.8.5</span>
                      <span>loss of opportunities;</span>
                    </p>
                    <p>
                      <span>5.8.6</span>
                      <span>loss of goodwill or reputation; or</span>
                    </p>
                    <p>
                      <span>5.8.7</span>
                      <span>
                        any indirect or consequential damages or losses.
                      </span>
                    </p>
                  </div>
                  <h3>6. Voluntary acceptance of additional obligations.</h3>
                  <p>
                    When You distribute Your derived models, You may provide
                    warranties, technical support, guarantees, indemnities, or
                    other contractual obligations to Your users or recipients,
                    and You may charge fees to Your users or recipients.
                    However, You understand and agree that You are not
                    authorized to represent NARLabs while accepting such
                    obligations. NARLabs shall not assume any obligation or
                    liability due to Your voluntary acceptance of such
                    additional obligations, agreement to indemnify, or other
                    similar circumstances.
                  </p>
                  <h3>
                    7. Brand Exposure and Brand Identity of TAIDE L models.
                  </h3>
                  <p>
                    If You grant permission for the use of Your derived models
                    built based on TAIDE L models, whether within or outside the
                    territory of the Republic of China, or participate in any
                    ranking competition organized by organizations or
                    individuals (including but not limited to evaluating aspects
                    such as accuracy in algorithms, performance, etc.), whether
                    within or outside the territory of the Republic of China,
                    You should prominently indicate in the model description
                    that Your derived model is based on TAIDE L models and is a
                    derivative work thereof.
                  </p>
                  <h3>8. Term and Termination.</h3>
                  <p>
                    Upon Your acceptance, use or access to TAIDE L models, this
                    Agreement shall become effective and shall remain in effect
                    thereafter. In the event that you breach any term or
                    condition of this Agreement, NARLabs reserves the right to
                    terminate this Agreement. Upon termination of this
                    Agreement, You should delete and stop using TAIDE L models,
                    the provisions of Article 3 under this Agreement, however,
                    shall remain in full force and effect.
                  </p>
                  <h3>9. Miscellaneous.</h3>
                  <p>
                    <span>9.1 </span>
                    <span>
                      You may review the latest version of this Agreement at any
                      time. Amendments to this Agreement shall take effect
                      immediately upon publication. If You continue to use TAIDE
                      L models after the effective date of such amendment, it
                      means that You agree to comply with all the terms and
                      conditions as amended.
                    </span>
                  </p>
                  <p>
                    <span>9.2 </span>
                    <span>
                      If You institute litigation against NARLabs or any Third
                      Party due to disputes arising from this Agreement or the
                      use of TAIDE L models, the license granted to You under
                      this Agreement shall automatically terminate as of the
                      date such litigation is filed.
                    </span>
                  </p>
                  <p>
                    <span>9.3 </span>
                    <span>
                      Governing Law and Jurisdiction. Shall there be any
                      disputes arising from or in connection with the
                      performance or execution of this Agreement, such disputes
                      shall be governed by the laws of the Republic of China
                      (Taiwan), and Taiwan Taipei District Court shall be the
                      first-instance court of jurisdiction.
                    </span>
                  </p>
                  <br />
                  <br />
                  <p>Reference:</p>
                  <div className="sources">
                    Meta AI Llama2 Acceptable Use Policy{" "}
                    <a
                      href="https://ai.meta.com/llama/use-policy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://ai.meta.com/llama/use-policy/
                    </a>
                  </div>
                  <div className="sources">
                    Meta AI Llama2 Community License Agreement{" "}
                    <a
                      href="https://ai.meta.com/llama/license/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://ai.meta.com/llama/license/
                    </a>
                  </div>
                  <br />
                  <br />
                  <p>notes:</p>
                  <div className="sources">
                    TAIDE L Models Community License Agreement applies to the
                    released model : TAIDE-LX-7B
                  </div>
                </div>
              </div>
              <div className="article__item even">
                <h2>·TAIDE Collaboration Model</h2>
                <div className="article__con">
                  <h3>
                    {`TAIDE is actively seeking partners to jointly promote the
                    development of Taiwan's Large Language Models (LLMs).`}
                  </h3>
                  <p>
                    <b>
                      We are earnestly inviting industry professionals,
                      academicians, and anyone with relevant technical expertise
                      to participate in this milestone collaboration!
                    </b>
                  </p>
                  <p>
                    TAIDE aims to ground itself in Taiwanese culture,
                    incorporating unique linguistic elements, values, and
                    customs. This approach enables the generative AI engine to
                    better understand and respond to local user needs, creating
                    a trustworthy foundational model for generative AI engines.
                    These models can be applied across various domains to meet
                    the diverse needs of users.
                  </p>
                  <p>
                    The basic collaboration plan offered by TAIDE includes
                    providing partners with a large language model as a powerful
                    tool for applications in various fields, such as natural
                    language processing, machine translation, intelligent
                    customer service, and other creative possibilities.
                  </p>
                  <p>
                    TAIDE represents a new opportunity to advance technology and
                    expand its applications, bringing tangible value and
                    outcomes to partners and society at large. We look forward
                    to responses from interested parties worldwide, eager to
                    explore the limitless potential of LLMs.
                  </p>
                  <br />
                  <p>
                    <b>
                      If you or your organization are interested in this
                      collaboration, please contact us for more detailed
                      information and discuss potential partnerships.
                    </b>
                  </p>
                  <p>
                    TAIDE Project Team:
                    <a href="mailto:TAIDE@narlabs.org.tw">
                      TAIDE@narlabs.org.tw
                    </a>
                  </p>
                  <br />

                  <ul>
                    <li className="hd">What Does TAIDE Offer?</li>
                    <li>
                      Large Language Model: Provision of a 7-billion-parameter
                      language model to assist partners in achieving their
                      application goals.
                    </li>
                    <li>
                      Technical Support and Training: Offering technical
                      interactions, knowledge sharing, relevant technical
                      support and training to ensure smooth integration and
                      usage by partners.
                    </li>
                    <li>
                      Confidentiality and Security Management: TAIDE will sign
                      clear cooperation agreements with partners to protect
                      their rights and intellectual property, covering data
                      usage rights, intellectual property ownership, and
                      confidentiality.
                    </li>
                  </ul>
                  <br />
                  <ul>
                    <li className="hd">What Do Partners Need to Prepare?</li>
                    <li>
                      Dataset Requirements: Partners need to provide their
                      datasets for training and fine-tuning the model, ensuring
                      appropriate data support for practical applications.
                    </li>
                    <li>
                      Relevant Information Capabilities: Partners should possess
                      relevant information capabilities and resources, including
                      data processing, model training expertise and
                      computational resources to ensure the quality and security
                      of datasets.
                    </li>
                    <li>
                      Application Proposal: Partners are required to provide a
                      proposal compatible with the TAIDE model, aligning with
                      the objectives of promoting generative AI technology
                      development and application.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <p>
                    The following types of applications will be prioritized by
                    TAIDE in its call for projects, but of course, TAIDE always
                    welcomes more creative contributions:
                  </p>
                  <ul>
                    <li>Automated Knowledge Base Management</li>
                    <li>Software News Translation Tools</li>
                    <li>Multilingual Support Tools</li>
                    <li>AI Customer Service</li>
                    <li>API Service</li>
                    <li>Web Service</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      ></script>
    </>
  );
};

export default DownloadModel;
