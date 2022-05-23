import "./index.css";
import Hero from "../../components/Hero";
import Feature from "../../components/Feature";

import bankTreeImage from "../../assets/img/bank-tree.jpeg";

import iconChat from "../../assets/img/icon-chat.png";
import iconMoney from "../../assets/img/icon-money.png";
import iconSecurity from "../../assets/img/icon-security.png";

function Homepage() {
  return (
    <main>
      <Hero image={`url(${bankTreeImage})`} />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Feature
          image={iconChat}
          title="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <Feature
          image={iconMoney}
          title="More savings means higher rates"
          description="The more you save with us, the higher your interest rate will be!"
        />
        <Feature
          image={iconSecurity}
          title="Security you can trust"
          description="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
    </main>
  );
}

export default Homepage;
