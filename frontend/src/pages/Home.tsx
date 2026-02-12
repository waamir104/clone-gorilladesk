import { Label } from "../shared/Label";

export const Home = () => {
  return (
    <section>
      <h1>
        <Label keyName="home.title" />
      </h1>
      <p>
        <Label keyName="home.welcome" />
      </p>
    </section>
  );
};

