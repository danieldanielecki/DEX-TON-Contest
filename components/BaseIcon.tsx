import PropTypes from "prop-types";

const BaseIcon = (props: { name: string }) => {
  const { name } = props;

const loadModule = () => {
  try {
    const icon = require(`../node_modules/cryptocurrency-icons/svg/color/${name}.svg`).default.src;
    return icon;
  }
  catch (ex) {
    return '';
  }
}
  return (
    <div>
      <img
        height={64}
        src={ loadModule() }
        width={64}
      />
    </div>
  );
};

BaseIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BaseIcon;
