export const BodyClassDecorator = (Story) => {
  document.body.classList.add('spirit-v1-stack-no-default-gap')

  return <Story />;
};
