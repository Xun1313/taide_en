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
                <h2>·Usage Policy and License Agreement</h2>
                <div className="article__con">
                  <p>
                    TAIDE is a model derivative that amalgamates the Llama2
                    model with Taiwanese culture and a Traditional Chinese
                    language corpus.
                  </p>
                  <p>
                    This TAIDE Usage Policy and License Agreement (referred to
                    as <b>{`"this Agreement"`}</b>) outlines and mandates user
                    (referred to as <b>{`"You"`}</b>) compliance with the specified
                    conduct while utilizing TAIDE.
                  </p>
                  <p>
                    This Agreement applies to anyone using TAIDE. Accessing and
                    using TAIDE (including software, services, and derivative
                    works) are required to comply with this Agreement. TAIDE
                    reserves the right to update these guidelines at any time,
                    and this Agreement may not comprehensively cover all
                    instances of TAIDE usage. TAIDE reserves the right to amend,
                    append, delete, or supplement this Agreement at any time,
                    with the revised version made available on this website.
                  </p>
                  <p>
                    If there is any ambiguity in this Agreement, the final
                    interpretation of any and all policies stated herein is at
                    the sole discretion of TAIDE.
                  </p>
                  <p>
                    Any violation of this Agreement, or any authorization or
                    assistance in such violation by you, may lead to the
                    immediate suspension or termination of your complete or
                    partial usage of TAIDE.
                  </p>
                  <p>This Agreement mainly includes:</p>
                  <div className="ml-1">
                    <p>(1) TAIDE Terms of use </p>
                    <p>(2) META AI Llama2 Community License Agreement</p>
                    <p>(3) META AI Llama2 Acceptable Use Policy</p>
                  </div>

                  <h3>1. Terms of Use</h3>
                  <p>
                    <span>1.1 </span>
                    <span>
                      During your use of TAIDE service, it is imperative to
                      adhere to the following principles:
                    </span>
                  </p>
                  <div className="ml-1">
                    <p>
                      <span>1.1.1</span>
                      <span>
                        Comply with the laws and regulations of the Republic of
                        China (TAIWAN).
                      </span>
                    </p>
                    <p>
                      <span>1.1.2</span>
                      <span>
                        Do not employ TAIDE for any illicit purposes (including
                        but not limited to the laws and regulations of the
                        Republic of China and the content of the Llama2 Usage
                        Terms).
                      </span>
                    </p>
                    <p>
                      <span>1.1.3</span>
                      <span>
                        Refrain from utilizing any devices, software, or
                        programs to disrupt or attempt to disrupt the normal
                        operation of TAIDE.
                      </span>
                    </p>
                    <p>
                      <span>1.1.4</span>
                      <span>
                        Avoid unauthorized invasion, access, usage, or attempts
                        to invade, access, or use the servers of TAIDE and any
                        data area not sanctioned by TAIDE or TAIDE.
                      </span>
                    </p>
                    <p>
                      <span>1.1.5 </span>
                      <span>
                        Do not restrict or prohibit other users from using
                        TAIDE.
                      </span>
                    </p>
                    <p>
                      <span>1.1.6 </span>
                      <span>
                        If you identify any illegal use of accounts or any
                        security vulnerabilities, you shall immediately inform
                        TAIDE of such incidents.
                      </span>
                    </p>
                  </div>
                  <p>
                    <span>1.2</span>
                    <span>Indemnity</span>
                  </p>
                  <div className="ml-1">
                    <p>
                      You agree to indemnify and hold harmless TAIDE and any
                      other third parties. In the event that TAIDE or any other
                      third party incurs losses as a result of a breach of laws,
                      regulations, or this Agreement, you commit to assuming the
                      responsibility for compensating for the damages caused.
                    </p>
                  </div>
                  <p>
                    <span>1.3</span>
                    <span>Limitation of Liability</span>
                  </p>
                  <div className="ml-1">
                    <p>
                      <span>1.3.1</span>
                      <span>
                        TAIDE reserves the right to suspend or interrupt either
                        specific components or the entirety of TAIDE services
                        under the following circumstances:
                      </span>
                    </p>
                    <div className="ml-2">
                      <p>
                        a. Migration, replacement, or maintenance of TAIDE
                        model-related system equipment.
                      </p>
                      <p>
                        b. Service interruption or suspension caused by any
                        reason not attributable to TAIDE.
                      </p>
                      <p>
                        c. Natural disasters or other force majeure events
                        causing the service interruption or suspension of TAIDE.
                      </p>
                    </div>
                    <p>
                      <span>1.3.2</span>
                      <span>
                        In any case, TAIDE shall not be liable for any losses
                        incurred by you or any other third party due to the use
                        or inability to use TAIDE, whether contractual
                        liability, tort liability, negligence liability, product
                        liability, or other liability, including any indirect,
                        special, consequential, incidental, or punitive damages,
                        even if TAIDE has been advised of the possibility of
                        such situations.
                      </span>
                    </p>
                  </div>
                  <p>
                    <span>1.4</span>
                    <span>
                      Service Modifications, Interruptions, or Termination
                    </span>
                  </p>
                  <div className="ml-1">
                    <p>
                      You acknowledge that TAIDE reserves the right to modify,
                      interrupt, or terminate part or all of TAIDE services at
                      any time.
                    </p>
                  </div>
                  <p>
                    <span>1.5</span>
                    <span>Miscellaneous</span>
                  </p>
                  <div className="ml-1">
                    <p>
                      If any portion of this Agreement is completely or
                      partially invalid, terminated, or unenforceable due to any
                      reasons, the remaining portions of this Agreement shall
                      remain valid and binding.
                    </p>
                  </div>
                  <p>
                    <span>1.6</span>
                    <span>Governing Law and Jurisdiction</span>
                  </p>
                  <div className="ml-1">
                    <p>
                      The establishment, execution, interpretation, and dispute
                      resolution of this Agreement shall be governed by the laws
                      of the Republic of China (TAIWAN), and Taiwan Taipei
                      District Court shall be the first-instance court of
                      jurisdiction.
                    </p>
                  </div>

                  <h3>2. META AI Llama2 Community License Agreement</h3>
                  <p>
                    <span>2.1</span>
                    <span>
                      <b>「Agreement」</b> means the terms and conditions for
                      use, reproduction, distribution and modification of the
                      Llama Materials set forth herein.
                    </span>
                  </p>
                  <p>
                    <span>2.2</span>
                    <span>
                      <b>「Documentation」</b> means the specifications, manuals
                      and documentation accompanying Llama 2 distributed by Meta
                      at
                      <a
                        href="https://ai.meta.com/resources/models-and-libraries/Llama-downloads/"
                        target="_blank"
                      >
                        ai.meta.com/resources/models-and-libraries/Llama-downloads/
                      </a>
                      .
                    </span>
                  </p>
                  <p>
                    <span>2.3</span>
                    <span>
                      <b>「Licensee」</b> or <b>「you」</b> means you, or your
                      employer or any other person or entity (if you are
                      entering into this Agreement on such person or entity’s
                      behalf), of the age required under applicable laws, rules
                      or regulations to provide legal consent and that has legal
                      authority to bind your employer or such other person or
                      entity if you are entering in this Agreement on their
                      behalf.
                    </span>
                  </p>
                  <p>
                    <span>2.4</span>
                    <span>
                      <b>「Llama 2」</b> means the foundational large language
                      models and software and algorithms, including
                      machine-learning model code, trained model weights,
                      inference-enabling code, training-enabling code,
                      fine-tuning enabling code and other elements of the
                      foregoing distributed by Meta at
                      <a
                        href="https://ai.meta.com/resources/models-and-libraries/Llama-downloads/"
                        target="_blank"
                      >
                        ai.meta.com/resources/models-and-libraries/Llama-downloads/
                      </a>
                      .
                    </span>
                  </p>
                  <p>
                    <span>2.5</span>
                    <span>
                      <b>「Llama Materials」</b> means, collectively, Meta’s
                      proprietary Llama 2 and Documentation (and any portion
                      thereof) made available under this Agreement.
                    </span>
                    <br />
                    <span>
                      <b>「Meta」</b> or <b>「we」</b> means Meta Platforms
                      Ireland Limited (if you are located in or, if you are an
                      entity, your principal place of business is in the EEA or
                      Switzerland) and Meta Platforms, Inc. (if you are located
                      outside of the EEA or Switzerland).
                    </span>
                  </p>
                  <p>
                    <span>2.5.1</span>
                    <span>License Rights and Redistribution：</span>
                  </p>
                  <div className="ml-1">
                    <p>
                      <span>a.</span>
                      <span>
                        Grant of Rights. You are granted a non-exclusive,
                        worldwide, non-transferable and royalty-free limited
                        license under Meta’s intellectual property or other
                        rights owned by Meta embodied in the Llama Materials to
                        use, reproduce, distribute, copy, create derivative
                        works of, and make modifications to the Llama Materials.
                      </span>
                    </p>
                    <p>b. Redistribution and Use.</p>
                    <div className="ml-1">
                      <p>
                        <span>Ⅰ.</span>
                        <span>
                          If you distribute or make the Llama Materials, or any
                          derivative works thereof, available to a third party,
                          you shall provide a copy of this Agreement to such
                          third party.
                        </span>
                      </p>
                      <p>
                        <span>Ⅱ.</span>
                        <span>
                          If you receive Llama Materials, or any derivative
                          works thereof, from a Licensee as part of an
                          integrated end user product, then Section 2 of this
                          Agreement will not apply to you.
                        </span>
                      </p>
                      <p>
                        <span>Ⅲ.</span>
                        <span>
                          You must retain in all copies of the Llama Materials
                          that you distribute the following attribution notice
                          within a「Notice」 text file distributed as a part of
                          such copies:「Llama 2 is licensed under the LLAMA 2
                          Community License, Copyright © Meta Platforms, Inc.
                          All Rights Reserved.」
                        </span>
                      </p>
                      <p>
                        <span>Ⅳ.</span>
                        <span>
                          Your use of the Llama Materials must comply with
                          applicable laws and regulations (including trade
                          compliance laws and regulations) and adhere to the
                          Acceptable Use Policy for the Llama Materials
                          (available at
                          <a
                            href="https://ai.meta.com/llama/use-policy"
                            target="_blank"
                          >
                            https://ai.meta.com/llama/use-policy
                          </a>
                          ), which is hereby incorporated by reference into this
                          Agreement.
                        </span>
                      </p>
                      <p>
                        <span>Ⅴ.</span>
                        <span>
                          You will not use the Llama Materials or any output or
                          results of the Llama Materials to improve any other
                          large language model (excluding Llama 2 or derivative
                          works thereof).
                        </span>
                      </p>
                    </div>
                  </div>
                  <p>
                    <span>2.5.2</span>
                    <span>Additional Commercial Terms.</span>
                  </p>
                  <div className="ml-2">
                    <p>
                      If, on the Llama 2 version release date, the monthly
                      active users of the products or services made available by
                      or for Licensee, or Licensee’s affiliates, is greater than
                      700 million monthly active users in the preceding calendar
                      month, you must request a license from Meta, which Meta
                      may grant to you in its sole discretion, and you are not
                      authorized to exercise any of the rights under this
                      Agreement unless or until Meta otherwise expressly grants
                      you such rights.
                    </p>
                  </div>
                  <p>
                    <span>2.5.3</span>
                    <span>Disclaimer of Warranty.</span>
                  </p>
                  <div className="ml-2">
                    <p>
                      UNLESS REQUIRED BY APPLICABLE LAW, THE LLAMA MATERIALS AND
                      ANY OUTPUT AND RESULTS THEREFROM ARE PROVIDED ON AN “AS
                      IS” BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS
                      OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES
                      OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY, OR FITNESS
                      FOR A PARTICULAR PURPOSE. YOU ARE SOLELY RESPONSIBLE FOR
                      DETERMINING THE APPROPRIATENESS OF USING OR REDISTRIBUTING
                      THE LLAMA MATERIALS AND ASSUME ANY RISKS ASSOCIATED WITH
                      YOUR USE OF THE LLAMA MATERIALS AND ANY OUTPUT AND
                      RESULTS.
                    </p>
                  </div>
                  <p>
                    <span>2.5.4</span>
                    <span>Limitation of Liability.</span>
                  </p>
                  <div className="ml-2">
                    <p>
                      IN NO EVENT WILL META OR ITS AFFILIATES BE LIABLE UNDER
                      ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, TORT,
                      NEGLIGENCE, PRODUCTS LIABILITY, OR OTHERWISE, ARISING OUT
                      OF THIS AGREEMENT, FOR ANY LOST PROFITS OR ANY INDIRECT,
                      SPECIAL, CONSEQUENTIAL, INCIDENTAL, EXEMPLARY OR PUNITIVE
                      DAMAGES, EVEN IF META OR ITS AFFILIATES HAVE BEEN ADVISED
                      OF THE POSSIBILITY OF ANY OF THE FOREGOING.
                    </p>
                  </div>
                  <p>
                    <span>2.5.5</span>
                    <span>Intellectual Property.</span>
                  </p>
                  <div className="ml-2">
                    <p>
                      <span>a.</span>
                      <span>
                        No trademark licenses are granted under this Agreement,
                        and in connection with the Llama Materials, neither Meta
                        nor Licensee may use any name or mark owned by or
                        associated with the other or any of its affiliates,
                        except as required for reasonable and customary use in
                        describing and redistributing the Llama Materials.
                      </span>
                    </p>
                    <p>
                      <span>b.</span>
                      <span>
                        Subject to Meta’s ownership of Llama Materials and
                        derivatives made by or for Meta, with respect to any
                        derivative works and modifications of the Llama
                        Materials that are made by you, as between you and Meta,
                        you are and will be the owner of such derivative works
                        and modifications.
                      </span>
                    </p>
                    <p>
                      <span>c.</span>
                      <span>
                        If you institute litigation or other proceedings against
                        Meta or any entity (including a cross-claim or
                        counterclaim in a lawsuit) alleging that the Llama
                        Materials or Llama 2 outputs or results, or any portion
                        of any of the foregoing, constitutes infringement of
                        intellectual property or other rights owned or
                        licensable by you, then any licenses granted to you
                        under this Agreement shall terminate as of the date such
                        litigation or claim is filed or instituted. You will
                        indemnify and hold harmless Meta from and against any
                        claim by any third party arising out of or related to
                        your use or distribution of the Llama Materials.
                      </span>
                    </p>
                  </div>
                  <p>
                    <span>2.5.6</span>
                    <span>Term and Termination.</span>
                  </p>
                  <div className="ml-2">
                    <p>
                      The term of this Agreement will commence upon your
                      acceptance of this Agreement or access to the Llama
                      Materials and will continue in full force and effect until
                      terminated in accordance with the terms and conditions
                      herein. Meta may terminate this Agreement if you are in
                      breach of any term or condition of this Agreement. Upon
                      termination of this Agreement, you shall delete and cease
                      use of the Llama Materials. Sections 3, 4 and 7 shall
                      survive the termination of this Agreement.
                    </p>
                  </div>
                  <p>
                    <span>2.5.7</span>
                    <span>Governing Law and Jurisdiction.</span>
                  </p>
                  <div className="ml-2">
                    <p>
                      This Agreement will be governed and construed under the
                      laws of the State of California without regard to choice
                      of law principles, and the UN Convention on Contracts for
                      the International Sale of Goods does not apply to this
                      Agreement. The courts of California shall have exclusive
                      jurisdiction of any dispute arising out of this Agreement.
                    </p>
                  </div>

                  <br />
                  <h3>3. META AI Llama2 Acceptable Use Policy</h3>
                  <p>
                    <span>3.1</span>
                    <span>
                      We want everyone to use Llama 2 safely and responsibly.
                      You agree you will not use, or allow others to use, Llama
                      2 to:
                    </span>
                  </p>

                  <p>
                    <span>3.1.1</span>
                    <span>
                      Violate the law or others’ rights, including to:
                    </span>
                  </p>
                  <div className="ml-2">
                    <p>
                      <span>a.</span>
                      <span>
                        Engage in, promote, generate, contribute to, encourage,
                        plan, incite, or further illegal or unlawful activity or
                        content, such as:
                      </span>
                    </p>
                    <div className="ml-1">
                      <p>Ⅰ. Violence or terrorism</p>
                      <p>
                        Ⅱ. Exploitation or harm to children, including the
                        solicitation, creation, acquisition, or dissemination of
                        child exploitative content or failure to report Child
                        Sexual Abuse Material.
                      </p>
                    </div>
                    <p>
                      <span>b.</span>
                      <span>
                        Human trafficking, exploitation, and sexual violence
                      </span>
                    </p>
                    <div className="ml-1">
                      <p>
                        Ⅰ. The illegal distribution of information or materials
                        to minors, including obscene materials, or failure to
                        employ legally required age-gating in connection with
                        such information or materials.
                      </p>
                      <p>Ⅱ. Sexual solicitation</p>
                      <p>Ⅲ. Any other criminal activity</p>
                    </div>

                    <p>
                      <span>c.</span>
                      <span>
                        Engage in, promote, incite, or facilitate the
                        harassment, abuse, threatening, or bullying of
                        individuals or groups of individuals.
                      </span>
                    </p>
                    <p>
                      <span>d.</span>
                      <span>
                        Engage in, promote, incite, or facilitate discrimination
                        or other unlawful or harmful conduct in the provision of
                        employment, employment benefits, credit, housing, other
                        economic benefits, or other essential goods and
                        services.
                      </span>
                    </p>
                    <p>
                      <span>e.</span>
                      <span>
                        Engage in the unauthorized or unlicensed practice of any
                        profession including, but not limited to, financial,
                        legal, medical/health, or related professional
                        practices.
                      </span>
                    </p>
                    <p>
                      <span>f.</span>
                      <span>
                        Collect, process, disclose, generate, or infer health,
                        demographic, or other sensitive personal or private
                        information about individuals without rights and
                        consents required by applicable laws.
                      </span>
                    </p>
                    <p>
                      <span>g.</span>
                      <span>
                        Engage in or facilitate any action or generate any
                        content that infringes, misappropriates, or otherwise
                        violates any third-party rights, including the outputs
                        or results of any products or services using the Llama 2
                        Materials.
                      </span>
                    </p>
                    <p>
                      <span>h.</span>
                      <span>
                        Create, generate, or facilitate the creation of
                        malicious code, malware, computer viruses or do anything
                        else that could disable, overburden, interfere with or
                        impair the proper working, integrity, operation or
                        appearance of a website or computer system.
                      </span>
                    </p>
                  </div>

                  <p>
                    <span>3.1.2</span>
                    <span>
                      Engage in, promote, incite, facilitate, or assist in the
                      planning or development of activities that present a risk
                      of death or bodily harm to individuals, including use of
                      Llama 2 related to the following:
                    </span>
                  </p>
                  <div className="ml-2">
                    <p>
                      a. Military, warfare, nuclear industries or applications,
                      espionage, use for materials or activities that are
                      subject to the International Traffic Arms Regulations
                      (ITAR) maintained by the United States Department of
                      State.
                    </p>
                    <p>
                      b. Guns and illegal weapons (including weapon
                      development).
                    </p>
                    <p>c. Illegal drugs and regulated/controlled substances.</p>
                    <p>
                      d. Operation of critical infrastructure, transportation
                      technologies, or heavy machinery.
                    </p>
                    <p>
                      e. Self-harm or harm to others, including suicide,
                      cutting, and eating disorders.
                    </p>
                    <p>
                      f. Any content intended to incite or promote violence,
                      abuse, or any infliction of bodily harm to an individual.
                    </p>
                  </div>
                  <p>
                    <span>3.1.3</span>
                    <span>
                      Intentionally deceive or mislead others, including use of
                      Llama 2 related to the following:
                    </span>
                  </p>
                  <div className="ml-2">
                    <p>
                      a. Generating, promoting, or furthering fraud or the
                      creation or promotion of disinformation.
                    </p>
                    <p>
                      b. Generating, promoting, or furthering defamatory
                      content, including the creation of defamatory statements,
                      images, or other content.
                    </p>
                    <p>
                      c. Generating, promoting, or further distributing spam.
                    </p>
                    <p>
                      d. Impersonating another individual without consent,
                      authorization, or legal right.
                    </p>
                    <p>
                      e. Representing that the use of Llama 2 or outputs are
                      human-generated.
                    </p>
                    <p>
                      f. Generating or facilitating false online engagement,
                      including fake reviews and other means of fake online
                      engagement.
                    </p>
                  </div>
                  <p>
                    <span>3.1.4</span>
                    <span>
                      Fail to appropriately disclose to end users any known
                      dangers of your AI system
                    </span>
                  </p>
                  <br />
                  <br />
                  <p>Reference sources:</p>
                  <div className="sources">
                    Meta AI Llama2 Acceptable Use Policy
                    <a
                      href="https://ai.meta.com/Llama/use-policy/"
                      target="_blank"
                    >
                      https://ai.meta.com/Llama/use-policy/
                    </a>
                  </div>
                  <div className="sources">
                    Meta AI Llama2 Community License Agreement
                    <a
                      href="https://ai.meta.com/Llama/license/"
                      target="_blank"
                    >
                      https://ai.meta.com/Llama/license/
                    </a>
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
