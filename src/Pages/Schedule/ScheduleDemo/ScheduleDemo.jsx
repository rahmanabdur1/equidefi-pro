import React from "react";
import "./ScheduleDemo.css";
import { Link } from "react-router-dom";

const ScheduleDemo = () => {
    
  return (
    <div className="schedule-demo">
      <div className="demo">
         <div className="demos">
          <div> <h3>Schedule your</h3>
          <h2>EquiDeFi® Demo</h2></div>
          <p>
            Ready to discover how EquiDeFi® is revolutionizing private finance?
          </p>
          <p>
            Schedule a demo with us to see the platform in action and learn how
            you can benefit. Our experts are ready to walk you through the
            features and answer any questions.
          </p>
          <button>
            <Link>Schedule Your Demo</Link>
          </button>
        </div>   
      </div>
    </div>
  );
};

export default ScheduleDemo;
