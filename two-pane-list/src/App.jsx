import { TwoPaneList } from "./TwoPaneList.jsx";
import { data } from "./data.js";

import "bulma/css/bulma.min.css";

function App() {
  return (
    <section className="section">
      <div className="box">
        <h1 className="title">Two-Pane List with Detail</h1>
        <p>
          Open <code>TwoPaneList.jsx</code> and implement your component named{" "}
          <code>TwoPaneList</code>.
        </p>
      </div>

      <h3 className="title is-4">Task</h3>
      <div className="content">
        <p>
          Create a React component (which may have sub-components) which
          implements a two-pane layout:
        </p>
        <ul>
          <li>
            The input to this component is a <code>data</code> property which
            contains an array of objects with the shape:
          </li>
          <code>
            &#123;
            <br />
            &nbsp;&nbsp;title: string
            <br />
            &nbsp;&nbsp;content: string[]
            <br />
            &#125;
          </code>
          <li>
            The left pane contains a list of all the <code>title</code>s.
          </li>
          <li>
            When a title is clicked on, it displays the content in the
            right-hand pane, with each string in the <code>content</code> as a
            separate paragraph.
          </li>
          <li>
            Before anything is clicked the right-hand pane should have an empty
            state which tells people to click on a title.
          </li>
        </ul>
        <p>
          Use <code>bulma</code> classes for styling - the library is included
          in the bundle already.
        </p>
      </div>

      <h3 className="title is-4">Test</h3>
      <TwoPaneList data={data} />
    </section>
  );
}

export default App;
