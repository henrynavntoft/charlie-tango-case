const Mailto = ({ email }) => {
  return (
    <a href={`mailto:${email}`} target="_blank">
      {email}
    </a>
  );
};

export default Mailto;
