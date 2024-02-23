"use client";
import Image from "next/image";
import { useEffect } from "react";

import bg_stage from "~/images/en/bg_stage.gif";

const StageUnit = () => {
  useEffect(() => {
    $(document).ready(function () {
      $("[id^=btnSstageFold_]").click(function () {
        const vm: {
          attr: Function;
          closest: Function;
        } = $(this);
        var scn = vm.attr("id").split("_")[1];
        $(".stageFoldUnit").removeClass("stageFoldUnit1");
        $(".stageFoldUnit").removeClass("stageFoldUnit2");
        $(".stageFoldUnit").removeClass("stageFoldUnit3");
        $(".stageFoldUnit").removeClass("stageFoldUnit4");
        vm.closest(".stageFoldUnit").addClass("stageFoldUnit" + scn);
      });
    });

    return () => {
      $(document).ready(function () {
        $("[id^=btnSstageFold_]").off("click");
      });
    };
  }, []);

  return (
    <article className="stageUnit">
        <div className="stageUnit__body">
          <h2>PHASED GOALS</h2>
          <div className="row">
            <div className="stageUnit__left">
              <div className="stageFoldUnit stageFoldUnit1">
                <div className="stageFoldUnit__wrap">
                  <div className="stageFoldUnit__item item1">
                    <div className="step" id="btnSstageFold_1">
                      Model Size <b>7B</b>
                    </div>
                    <div className="con">
                      <h3>Computational Resources</h3>
                      <p>Dedicated Computing Infrastructure for TAIDE</p>
                      <ul>
                        <li>
                          32 nodes allocated specifically for TAIDE project
                          model training.
                        </li>
                        <li>
                          Each node boasts 8 V100 32GB GPUs, ensuring
                          substantial processing power.
                        </li>
                      </ul>
                      <p>Optimization with DeepSpeed 03</p>
                      <ul>
                        <li>
                          Implementing the DeepSpeed 03 framework for efficient
                          and optimized training of large Al models within the
                          TAIDE project.
                        </li>
                      </ul>
                      <p>Scaled Training Capabilities for TAIDE Models</p>
                      <ul>
                        <li>
                          For 7B Model Training: Deploying 8 nodes, totaling 64
                          V100 GPUs.
                        </li>
                        <li>
                          For 13B Model Training: Expanding to 12-16 nodes,
                          utilizing 96-128 V100 GPUs.
                        </li>
                      </ul>
                    </div>
                    <div className="con">
                      <h3>Trustworthy Pre-Training Data</h3>
                      <ul>
                        <li>
                          Importance of starting with reliable data for building
                          a Base Model.
                        </li>
                        <li>
                          Project initiated by the Taiwanese government, led by
                          our team.
                        </li>
                        <li>
                          Access to pre-training data facilitated by government
                          resources.
                        </li>
                        <li>
                          Collaboration with public media and government
                          agencies yielded about 1.7 billion tokens.
                        </li>
                        <li>
                          Achieved a substantial collection of 420,000 pieces of
                          data.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="stageFoldUnit__item item2">
                    <div className="step" id="btnSstageFold_2">
                      Model Size <b>13B</b>
                    </div>
                    <div className="con">
                      <h3>Computational Resources</h3>
                      <p>Dedicated Computing Infrastructure for TAIDE</p>
                      <ul>
                        <li>
                          32 nodes allocated specifically for TAIDE project
                          model training.
                        </li>
                        <li>
                          Each node boasts 8 V100 32GB GPUs, ensuring
                          substantial processing power.
                        </li>
                      </ul>
                      <p>Optimization with DeepSpeed 03</p>
                      <ul>
                        <li>
                          Implementing the DeepSpeed 03 framework for efficient
                          and optimized training of large Al models within the
                          TAIDE project.
                        </li>
                      </ul>
                      <p>Scaled Training Capabilities for TAIDE Models</p>
                      <ul>
                        <li>
                          For 7B Model Training: Deploying 8 nodes, totaling 64
                          V100 GPUs.
                        </li>
                        <li>
                          For 13B Model Training: Expanding to 12-16 nodes,
                          utilizing 96-128 V100 GPUs.
                        </li>
                      </ul>
                    </div>
                    <div className="con">
                      <h3>Trustworthy Pre-Training Data</h3>
                      <ul>
                        <li>
                          Importance of starting with reliable data for building
                          a Base Model.
                        </li>
                        <li>
                          Project initiated by the Taiwanese government, led by
                          our team.
                        </li>
                        <li>
                          Access to pre-training data facilitated by government
                          resources.
                        </li>
                        <li>
                          Collaboration with public media and government
                          agencies yielded about 1.7 billion tokens.
                        </li>
                        <li>
                          Achieved a substantial collection of 420,000 pieces of
                          data.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="stageUnit__right">
              <Image src={bg_stage} style={{ height: "auto" }} alt="stage" />
            </div>
          </div>
        </div>
      </article>
  );
};

export default StageUnit;
