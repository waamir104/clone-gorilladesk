import { Label } from "../shared/Label";

export const About = () => {
  return (
    <section>
      <h1>
        <Label keyName="about.title" />
      </h1>
      <p>
        <Label keyName="about.description" />
      </p>
    </section>
  );
};

