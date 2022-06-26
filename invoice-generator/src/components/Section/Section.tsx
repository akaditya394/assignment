import React from "react";
import styles from "./Section.module.css";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import "animate.css";

type Props = {
  title: string;
};

function Section({ title }: Props) {
  return (
    <div
      className={`${styles.section} animate__animated animate__fadeIn animate__slow`}
    >
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <ArrowCircleRightIcon className={styles.icon} />
      </div>
    </div>
  );
}

export default Section;
