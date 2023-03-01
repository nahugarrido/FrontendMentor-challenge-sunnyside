import classes from "./Testimonials.module.css";

const DUMMY_DATA = [
  {
    id: 1,
    name: "Emily R.",
    img: "../../assets/persons/image-emily.jpg",
    title: "Marketing Director",
    quote:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
  },
  {
    id: 2,
    name: "Thomas S.",
    img: "../../assets/persons/image-thomas.jpg",
    title: "Chief Operating Officer",
    quote:
      "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience",
  },
  {
    id: 3,
    name: "Jennie F.",
    img: "../../assets/persons/image-jenny.jpg",
    title: "Business Owner",
    quote:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
  },
];

const Testimonials = () => {
  const persons = DUMMY_DATA;
  /* me esta dando un warning de que cada hijo debe tener una key, deberia crear un componente card de testimonial asi puedo pasarle la key */
  return (
    <section>
      {persons.map((person) => (
        <div className="testimonial-card">
          <img src={person.img} alt="" />
          <p>{person.quote}</p>
          <span>{person.name}</span>
          <span>{person.title}</span>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
