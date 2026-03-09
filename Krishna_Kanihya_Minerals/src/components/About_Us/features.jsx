import React from "react";
import vector_symbol_1 from "../../assets/abt_us_1.png";
import vector_symbol_2 from "../../assets/abt_us_2.png";
import vector_symbol_3 from "../../assets/abt_us_3.png";

const Features = () => {
  return (
    <div className="about-features">

      <div className="feature-item">
        <img src={vector_symbol_1} alt="" />
        <div>
          <h3>Integrated Manufacturing Facilities</h3>
          <p>
            In-house processing units with controlled production lines to
            deliver stable specifications for every shipment.
          </p>
        </div>
      </div>

      <div className="feature-item">
        <img src={vector_symbol_2} alt="" />
        <div>
          <h3>Quality-First Approach</h3>
          <p>
            Strict quality check at each stage - from raw material selection to final
            packing - supported by laboratory testing and documented results.
          </p>
        </div>
      </div>

      <div className="feature-item">
        <img src={vector_symbol_3} alt="" />
        <div>
          <h3>Export-Focused Operations</h3>
          <p>
            Experienced in handling export documentation, customized
            packing, and coordination with international logistics partners.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Features;