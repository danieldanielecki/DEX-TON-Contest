import PropTypes from "prop-types";

const BaseIcon = (props: { name: string }) => {
  const { name } = props;

  return (
    <div>
      <img
        src={
          require(`../node_modules/cryptocurrency-icons/svg/color/${name}.svg`)
            .default.src
        }
      />
    </div>
  );
};

BaseIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BaseIcon;
