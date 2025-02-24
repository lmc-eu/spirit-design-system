import classNames from 'classnames';

export const useValidationTextStyleProps = (className: string, hasValidationIcon: boolean | undefined): string => {
  const validationTextClass = `${className}__validationText`;
  const validationIconTextClass = `${validationTextClass}--hasIcon`;

  return classNames(validationTextClass, {
    [validationIconTextClass]: hasValidationIcon,
  });
};
