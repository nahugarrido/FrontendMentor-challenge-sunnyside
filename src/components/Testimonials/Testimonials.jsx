import classes from "./Testimonials.module.css";
import TestimonialCard from "./TestimonialCard";
const DUMMY_DATA = [
  {
    id: 1,
    name: "Emily R.",
    img: "./images/persons/image-emily.jpg",
    title: "Marketing Director",
    quote:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
  },
  {
    id: 2,
    name: "Thomas S.",
    img: "./images/persons/image-thomas.jpg",
    title: "Chief Operating Officer",
    quote:
      "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience",
  },
  {
    id: 3,
    name: "Jennie F.",
    img: "./images/persons/image-jennie.jpg",
    title: "Business Owner",
    quote:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
  },
];

const Testimonials = () => {
  const persons = DUMMY_DATA;
  /* me esta dando un warning de que cada hijo debe tener una key, deberia crear un componente card de testimonial asi puedo pasarle la key */
  return (
    <section className={classes.testimonials}>
      <div className={classes.title}>
        <span>CLIENT TESTIMONIALS</span>
      </div>
      <div className={classes["testimonials-wrap"]}>
        {persons.map((person) => (
          <TestimonialCard
            title={person.title}
            img={person.img}
            quote={person.quote}
            name={person.name}
            key={person.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
