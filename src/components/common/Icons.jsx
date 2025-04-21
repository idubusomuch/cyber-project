function Icons({ iconRoute, name }) {
  const src = `assets/icons/${iconRoute}.svg`;
  return <img src={src} alt={name} />;
}
export default Icons;
