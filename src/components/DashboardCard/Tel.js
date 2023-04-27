const Tel = ({ phone }) => {
  return (
    <a href={`tel:${phone}`} target="_blank">
      {phone}
    </a>
  );
};

export default Tel;
