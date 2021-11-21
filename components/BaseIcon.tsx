import PropTypes from "prop-types";

const BaseIcon = (props: { name: string }) => {
  const { name } = props;

const loadModule = () => {
  try {
    const icon = require(`../node_modules/cryptocurrency-icons/svg/color/${name}.svg`).default.src;
    return icon;
  }
  catch (ex) {
    return ex;
  }
}
  return (
<<<<<<< HEAD
    <div>
      <img
        height={64}
        src={ loadModule() }
        width={64}
      />
    </div>
=======
    <img
      height={64}
      src={
        require(`../node_modules/cryptocurrency-icons/svg/color/${name}.svg`)
          .default.src
      }
      width={64}
    />
>>>>>>> 1fc39fd54af2a8fb8844fd2babfbba30e5e53b93
  );
};

BaseIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BaseIcon;
