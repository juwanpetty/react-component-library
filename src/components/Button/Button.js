import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Button.module.scss';

const Button = ({
  type,
  label,
  buttonIcon,
  leadingIcon,
  size,
  plain,
  outline,
  onClick,
  ...props
}) => {
  const classNames = cx(
    styles.button,
    plain && styles.button___plain,
    outline && styles.button___outline,
    buttonIcon && styles.button___icon,
    styles[`button___${size}`]
  );

  return (
    <button type="button" {...props} className={classNames}>
      <span className={styles.button_content}>
        {leadingIcon && (
          <span className={styles.button_leadingIcon}>{leadingIcon}</span>
        )}
        {buttonIcon && <span>{buttonIcon}</span>}
        <span className={styles.button_text}>{label}</span>
      </span>
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  plain: PropTypes.bool,
  outline: PropTypes.bool,
  buttonIcon: PropTypes.elementType,
  leadingIcon: PropTypes.elementType,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
  label: null,
  plain: false,
  outline: false,
  buttonIcon: null,
  leadingIcon: null,
  size: 'medium',
};
