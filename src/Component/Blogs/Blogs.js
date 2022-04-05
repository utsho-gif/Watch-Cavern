import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="container">
        <div className="d-flex flex-column">
          <div>
            <h2 className="text-danger">Q1: What is Context API</h2>
            <h4>
              <span className="text-success">Answer:</span> API context is
              basically a hook which is prevent from props drilling. Sometimes
              it's getting very deep when you drill a props and it's kinda
              repeatating. Or sometimes we don't want to share the data to the
              children component. Instead of we want to share this with
              grandchild component in that situation Context API is the best way
              without having props drilling. All we need to do to set a area
              like a tower which components are may use the context api. Then a
              value will be set to the area. And the last thing go into the
              component you desire to want to use context and receive the
              context.
            </h4>
            <div className="mt-5">
            <h2 className="text-danger">Q2: What is Semantic Tag</h2>
              <h4>
                <span className="text-success">Answer:</span> The semantic refers the tags that provide meaningful tag rather than just a presentation in HTML. It makes HTML more describable by better definition of each and every different section and layout. The main purpose of semantic tags are it clearly communicate it's meaning to both browser and developer. Those element are clearly defines its content. There are lot's of semantic tags in HTML5 such as, article, nav, aside, section, details, header, footer, summary etc.    
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
