import React from "react";
import ReactDom from "react-dom";
import SingleComment from "./singleComment";
import img1 from "./images/member-1.jpg";
import img2 from "./images/member-2.jpg";
import img3 from "./images/member-3.jpg";

const App = () => {
  return (
    <div className="ui comments">
      <SingleComment
            name="jake"
            image={img1}
            date="Today at 5:00PM"
            text="It's Amazing"
      />
      <SingleComment
            name="sarah"
            image={img2}
            date="Today at 3:00PM"
            text="It's okay"
      />
      <SingleComment
            name="mike"
            image={img3}
            date="Today at 2:48PM"
            text="Just what i Wanted"
      />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
