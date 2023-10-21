import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "I post most days",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Consistency is key. I post most days to keep myself accountable and to
        share my learnings with my future self.
      </>
    ),
  },
  {
    title: "Problems of all levels",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        I post solutions to all levels of problems, <code>easy</code>,{" "}
        <code>medium</code> and <code>hard</code>. But I also post learnings
        from courses and tutorials.
      </>
    ),
  },
  {
    title: "Posts about my side projects",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        I love to build apps and come up with new ideas. So you will also find
        brain dumps of what I get up to when building apps.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
