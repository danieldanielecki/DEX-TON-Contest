import PropTypes from "prop-types";
import styles from './styles.module.scss';

const BaseIcon = (props: { image: string, size?: number, title?: string }) => {
  const { image, size, title } = props;

  return (
    <div className={`${styles.padding} ${image ? styles.block : styles.hidden}`} >
      <img
        height={size ? size : 64}
        src={ image }
        width={size ? size : 64}
      />
      <span> {title}</span>
    </div>
  );
};

BaseIcon.propTypes = {
  image: PropTypes.string.isRequired,
  size: PropTypes.number,
  title: PropTypes.string,
};

export default BaseIcon;
