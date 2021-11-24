import styles from "../styles/BaseDialog.module.scss";
import PropTypes from "prop-types";
import useToggleAlert from "../hooks/useToggleAlert";

const BaseDialog = (props: {
  onOpenDialog: any;
  section: string;
  title: string;
}) => {
  const { onOpenDialog, section, title } = props;
  const [isOpened, setIsOpened] = useToggleAlert(onOpenDialog);

  return (
    <div>
      {isOpened && (
        <div className={styles.backdrop}>
          <div className={styles.dialog}>
            <div className={styles.header}>
              <div className={styles.menu}>
                <div>
                  <button onClick={() => setIsOpened(false)}>x</button>
                </div>
              </div>
              <h2>{title}</h2>
            </div>
            <section>{section}</section>
          </div>
        </div>
      )}
    </div>
  );
};

BaseDialog.propTypes = {
  onOpenDialog: PropTypes.func.isRequired,
  section: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BaseDialog;
